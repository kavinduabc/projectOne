import express from "express";
import { loginUser, rejisterUser } from "../controller/userConroller.js";


const userRouter = express.Router();


userRouter.post("/",rejisterUser);
userRouter.post("/login",loginUser);



export default userRouter;