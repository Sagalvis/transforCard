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
// Inicio consulta que permite obtener la cantidad de clientes por mes 
queryHome.get("/Datecustomer", ControllerHome.DateCustomer);
queryHome.get("/Datevehicle", ControllerHome.DateVehicle);
export default queryHome

