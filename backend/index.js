import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import userRouter from "./routes/userRoute.js"
import jwt from "jsonwebtoken"


let app = express()

//** env file */
dotenv.config();

app.use(bodyParser.json())

app.use((req,res,next)=>{
    let token = req.header("Authorization");

    if(token){
        token = token.replace("Bearer","");

        jwt.verify(token, process.env.SECRET_KEY,(err, decoded)=>{
           if(err){
            console.error("JWT verification Failed",err.message);
           }
           else{
            req.user = decoded;
           }
        })
         
    
    }
    next();
})

//** create a database connection */
let mongoUrl = process.env.DATABASEURL;
mongoose.connect(mongoUrl)
let connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB connnection is successfully")
})

//** Routting  */
app.use("/api/user",userRouter)


//** port */
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

