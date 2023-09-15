import {Router} from "express";

import * as controllDelete from "../controllers/delete.controllers.js";

/*--- NOTA: USAR SOLO SI ES ESTRICAMENTE NECESARIO ---*/

const deleteRouter = Router();

/* Contulta para eliminar cliente, empleado, vehiculo */

deleteRouter.delete('/deletecustomer/:identificacion', controllDelete.deleteCustomer);
deleteRouter.delete('/deleteemployees/:id_empleado', controllDelete.deleteEmployees);
deleteRouter.delete('/deletevehicle/:matricula', controllDelete.deleteVehicle);
deleteRouter.delete('/deleteinventario/:id_producto', controllDelete.deleteProductoInventario);
export default deleteRouter