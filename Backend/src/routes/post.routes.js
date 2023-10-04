import {Router} from "express";
import * as controllpost from "../controllers/post.controller.js";
import * as controllimg from "../controllers/imagen.controllers.js";
import {valToken} from "../middleware/auth.js"
const postRouter = Router();

/* Rutas para crear clientes, empleados, vehiculo, logueo de empleado */
postRouter.post('/postcustomer', controllpost.postCustomer);
postRouter.post('/postemployees', controllpost.postEmployees);
postRouter.post('/postvehicle', controllpost.postVehicle);
postRouter.post('/postLoginEmployees', controllpost.postLoginEmployees);
postRouter.post('/postinventory', controllpost.postInventario);
postRouter.post('/postinvoices', controllpost.postInvoices);
postRouter.post('/postservice', controllimg.upload.single('file'), controllpost.postOrdenService);
postRouter.post('/postOrdenServiceCliente', controllpost.postOrdenServiceCliente);
postRouter.post('/postCreateFactura', controllpost.postCreateFactura);
postRouter.post('/postCallService/:identificacion', controllpost.postCallService);
postRouter.post('/validacioncorreo', controllpost.validationCorreoSoporte );

export default postRouter