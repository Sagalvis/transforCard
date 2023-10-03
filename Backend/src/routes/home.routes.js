import { Router } from "express";
import * as ControllerHome from "../controllers/home.controller.js"
const queryHome = Router();

/* Inicio de las rutas para contar el contenido de las diferentes tabalas  */
queryHome.get("/count/clientes", ControllerHome.CounterCustomer);
queryHome.get("/count/vehiculos", ControllerHome.CounterVehicle);
queryHome.get("/count/empleados", ControllerHome.CounterEmployees);
queryHome.get("/count/productos", ControllerHome.CounterProduct);
queryHome.get("/count/servicios", ControllerHome.CounterService);
queryHome.get("/count/ordenesdeservicio", ControllerHome.CounterServiceOrder);
queryHome.get("/count/factura", ControllerHome.CounterInvoice);
/* Final de las consulta para contar el contenido de las diferentes tabalas  */

/* Inicio ruta que traer clientes mes a mes en cada una */
queryHome.get("/january/client", ControllerHome.JanuaryClient);
queryHome.get("/february/client", ControllerHome.FebruaryCLient);
queryHome.get("/march/client", ControllerHome.FebruaryCLient);
queryHome.get("/april/client", ControllerHome.FebruaryCLient);
queryHome.get("/may/client", ControllerHome.FebruaryCLient);
queryHome.get("/june/client", ControllerHome.FebruaryCLient);
queryHome.get("/july/client", ControllerHome.FebruaryCLient);
queryHome.get("/august/client", ControllerHome.FebruaryCLient);
queryHome.get("/september/client", ControllerHome.FebruaryCLient);
queryHome.get("/october/client", ControllerHome.FebruaryCLient);
queryHome.get("/november/client", ControllerHome.FebruaryCLient);
queryHome.get("/dicember/client", ControllerHome.FebruaryCLient);
/* Final  ruta que traer clientes mes a mes en cada una */


queryHome.get("/Datevehicle", ControllerHome.DateVehicle);
export default queryHome

