import {Router} from "express";

import * as controllGet from "../controllers/get.controllers.js";

const getRouter = Router();

getRouter.get('/customer', controllGet.getCustomer);

export default getRouter