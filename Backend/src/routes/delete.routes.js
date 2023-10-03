import {Router} from "express";

import * as controllDelete from "../controllers/delete.controllers.js";

/*--- NOTA: USAR SOLO SI ES ESTRICAMENTE NECESARIO ---*/

const deleteRouter = Router();

/* Contulta para eliminar cliente, empleado, vehiculo */

deleteRouter.delete('/deletecustomer/:identificacion', controllDelete.deleteCustomer);
deleteRouter.delete('/deleteemployees/:id_empleado', controllDelete.deleteEmployees);
deleteRouter.delete('/deletevehicle/:matricula', controllDelete.deleteVehicle);
deleteRouter.delete('/deleteproduct/:id_inventario', controllDelete.deleteProductInventory);
deleteRouter.delete('/deleteservice/:id_orden', controllDelete.deleteServiceInventory);
deleteRouter.delete('/deleteservicecustomer/:identificacion', controllDelete.deleteServiceCustomer);
deleteRouter.delete('/deleteserviceorder/:id_servicio_cliente', controllDelete.deleteServiceOrder);
deleteRouter.delete('/deleteinvoice/:id_factura', controllDelete.deleteInvoice);

export default deleteRouter