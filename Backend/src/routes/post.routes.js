import {Router} from "express";

import * as controllpost from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.post('/postcustomer', controllpost.postCustomer);

export default postRouter