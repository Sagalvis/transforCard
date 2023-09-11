import {Router} from "express";

import * as controllpatch from "../controllers/patch.controllers.js";

const patchRouter = Router();

/* Rutas para actualizar cada cliente, empleado, vehiculos */

patchRouter.patch('/patchcustomer/:identification', controllpatch.updateCustomer);
patchRouter.patch('/patchemployees/:id_empleado', controllpatch.updateEmployees);
patchRouter.patch('/patchvehicle/:matricula', controllpatch.updateVehicle)

export default patchRouter