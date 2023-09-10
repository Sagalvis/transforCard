import {Router} from "express";

import * as controllDelete from "../controllers/delete.controllers.js";

const deleteRouter = Router();

deleteRouter.delete('/deletecustomer/:identification', controllDelete.deleteCustomer);

export default deleteRouter