// checkRouter.js - Router
import express from 'express';
import { check } from '../Contoller/Check.js';

const checkRouter = express.Router();

checkRouter.get('/check', check);

export default checkRouter;
