import {Router} from "express";

import * as controllpost from "../controllers/post.controller.js";

const postRouter = Router();

/* Rutas para crear clientes, empleados, vehiculo, logueo de empleado */
postRouter.post('/postcustomer', controllpost.postCustomer);
postRouter.post('/postemployees', controllpost.postEmployees);
postRouter.post('/postvehicle', controllpost.postVehicle);
postRouter.post('/postLoginEmployees', controllpost.postLoginEmployees);

export default postRouter