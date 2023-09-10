import {Router} from "express";

import * as controllpatch from "../controllers/patch.controllers.js";

const patchRouter = Router();

patchRouter.patch('/patchcustomer/:identification', controllpatch.updateCustomer);

export default patchRouter