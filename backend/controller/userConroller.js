import User from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



//** create function for rejisterUser  */
export async function rejisterUser(req,res){
    //get all user request data from user request body
    const data =req.body;
    //hashig the usr password
    data.password = bcrypt.hashSync(data.password,10)
    const newUser = new User(data)

    try {
       await newUser.save();
       res.json({
        message : "user rejistration successfully"
       })
    } catch (error) {
        res.status(500).json({
            error : "user rejistration faild"
        })
    }
    
   // const newUser = new User(data)
    //newUser.save().then(()=>{
        //res.json({
           // message : "User registered successfully"
       // })
   // }).catch((error)=>{
       // res.status(500).json({
           // error : "User rejistration faild"
        //})
   // })
}


export  function loginUser(req,res){

    const data = req.body;
    
    User.findOne({
        email : data.email
    }).then(
        (user) =>{
            if(user == null){
                res.status(404).json({
                    error:"User not found"
                })
            }else{
                const isPasswordCorrect = bcrypt.compareSync(data.password,user.password)
                
                if(isPasswordCorrect){
                    const token = jwt.sign({
                        
                        firstName : user.firstName,
                        lastName : user.lastName,
                        email : user.email,
                        phone : user.password
                    },process.env.SECRET_KEY)

                    res.json({
                        message : "Login is successfully", token : token
                    });
                }
                else{
                    res.status(404).json({
                        error :"Login Faild"
                    })
                }
            }
        }
    )


}

//** check user role admin */
export function isItAdmin(req){

    // variable for 
    let isAdmin = false;

    if(req.user != null){
        if(req.user.role == "admin")
        {
            isAdmin = true;
        }
    }
    return isAdmin;
}

//** check user role is customer */
export function isItUser(req){

    let isCustomer = false;

    if(req.user != null)
    {
        if(req.user.role == "customer")
        {
            isCustomer = true;
        }
    }
    return isCustomer;
}