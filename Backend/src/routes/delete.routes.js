import { Router } from "express";
import * as controllDelete from "../controllers/delete.controllers.js";
import { isAuth } from "../middleware/auth.js"

/*--- NOTA: USAR SOLO SI ES ESTRICAMENTE NECESARIO ---*/

const deleteRouter = Router();

/* Consulta para eliminar cliente, empleado, vehiculo */

deleteRouter.delete('/deletecustomer/:identificacion',isAuth, controllDelete.deleteCustomer);
deleteRouter.delete('/deleteemployees/:id_empleado',isAuth, controllDelete.deleteEmployees);
deleteRouter.delete('/deletevehicle/:matricula',isAuth, controllDelete.deleteVehicle);
deleteRouter.delete('/deleteproduct/:id_inventario',isAuth, controllDelete.deleteProductInventory);
deleteRouter.delete('/deleteservice/:id_orden',isAuth, controllDelete.deleteServiceInventory);
deleteRouter.delete('/deleteservicecustomer/:identificacion/:id_servicio_cliente',isAuth, controllDelete.deleteServiceCustomer);
deleteRouter.delete('/deleteserviceorder/:id_servicio_cliente',isAuth, controllDelete.deleteServiceOrder);
deleteRouter.delete('/deleteinvoice/:id_factura',isAuth, controllDelete.deleteInvoice);

export default deleteRouter