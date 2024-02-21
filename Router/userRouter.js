import express from 'express';
import { user } from '../Contoller/UserContoller.js';
import { userpost } from '../Contoller/UserContoller.js';
import { userput } from '../Contoller/UserContoller.js';
import { userdelete } from '../Contoller/UserContoller.js';
import { userData } from '../Contoller/UserContoller.js';

const userRouter = express.Router();
userRouter.get("/user", user);
userRouter.post("/userpost", userpost);
userRouter.put("/userput/:id", userput);
userRouter.delete("/userdelete/:id", userdelete);
userRouter.get("/userdata",userData)


export default userRouter;