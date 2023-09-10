import {Router} from "express"

import * as userControll from "../controllers/customer.controllers.js";

const router = Router()

router.get('/customer', userControll.getCustomer);
router.post('/postcustomer', userControll.postCustomer);
router.patch('/patchcustomer/:identification', userControll.updateCustomer);
router.delete('/deletecustomer/:identification', userControll.deleteCustomer);

export default router