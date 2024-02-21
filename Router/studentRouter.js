import express from 'express';
import { student } from '../Contoller/StudentContoller.js'; 
import { studentpost } from '../Contoller/StudentContoller.js';
import { studentput } from '../Contoller/StudentContoller.js';
import { studentdelete } from '../Contoller/StudentContoller.js';
import {studentData} from '../Contoller/StudentContoller.js'

const studentRouter = express.Router();
studentRouter.get("/student", student);
studentRouter.post("/studentpost", studentpost);
studentRouter.put("/studentput/:id", studentput);
studentRouter.delete("/studentdelete/:id", studentdelete);
studentRouter.get("/studentData",studentData)


export default studentRouter;