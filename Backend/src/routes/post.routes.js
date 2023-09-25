import {Router} from "express";

import * as controllpost from "../controllers/post.controller.js";

const postRouter = Router();

/* Rutas para crear clientes, empleados, vehiculo, logueo de empleado */
postRouter.post('/postcustomer', controllpost.postCustomer);
postRouter.post('/postemployees', controllpost.postEmployees);
postRouter.post('/postvehicle', controllpost.postVehicle);
postRouter.post('/postLoginEmployees', controllpost.postLoginEmployees);
postRouter.post('/postinventory', controllpost.postInventario);
postRouter.post('/postinvoices', controllpost.postInvoices);
postRouter.post('/postservice', controllpost.postOrdenService);
postRouter.post('/postOrdenServiceCliente', controllpost.postOrdenServiceCliente);
postRouter.post('/postCreateFactura', controllpost.postCreateFactura);

export default postRouter