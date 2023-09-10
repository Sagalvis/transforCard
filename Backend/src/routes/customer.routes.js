import {Router} from "express"

import * as userControll from "../controllers/customer.controllers.js";

const router = Router()

router.get('/customer', userControll.getCustomer);
router.post('/postcustomer', userControll.postCustomer)

export default router