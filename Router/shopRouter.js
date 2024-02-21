import express from 'express';
import { Home ,About,Contact} from '../Contoller/ShopContorller.js';

const shopRouter = express.Router();

shopRouter.get("/Home", Home);
shopRouter.get("/About", About);
shopRouter.get("/Contact", Contact);

export default shopRouter;