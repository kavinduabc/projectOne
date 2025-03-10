import express from "express";
import { rejisterUser } from "../controller/userConroller.js";


const userRouter = express.Router();


userRouter.post("/",rejisterUser);



export default userRouter;