import User from "../models/user.js";
import bcrypt from "bcrypt"



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