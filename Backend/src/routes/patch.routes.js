import {Router} from "express";

import * as controllpatch from "../controllers/patch.controllers.js";

import {isAuth} from "../middleware/auth.js"

const patchRouter = Router();

/* Rutas para actualizar cada cliente, empleado, vehiculos */
// con la variable isAuth de que las protege *

patchRouter.patch('/patchcustomer/:identificacion', isAuth, controllpatch.updateCustomer);
patchRouter.patch('/patchemployees/:id_empleado', isAuth, controllpatch.updateEmployees);
patchRouter.patch('/patchvehicle/:matricula', isAuth, controllpatch.updateVehicle);
patchRouter.patch('/patchservice/:id_orden', isAuth, controllpatch.updateService);


export default patchRouter