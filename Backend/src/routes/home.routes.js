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
queryHome.get("/january/client", ControllerHome.JanClient);
queryHome.get("/february/client", ControllerHome.FebClient);
queryHome.get("/march/client", ControllerHome.MarClient);
queryHome.get("/april/client", ControllerHome.AprClient);
queryHome.get("/may/client", ControllerHome.MayClient);
queryHome.get("/june/client", ControllerHome.JunClient);
queryHome.get("/july/client", ControllerHome.JulClient);
queryHome.get("/august/client", ControllerHome.AugClient);
queryHome.get("/september/client", ControllerHome.SepClient);
queryHome.get("/october/client", ControllerHome.OctClient);
queryHome.get("/november/client", ControllerHome.NovClient);
queryHome.get("/december/client", ControllerHome.DecClient);
/* Final  ruta que traer clientes mes a mes en cada una */

/* Inicio ruta que traer clientes mes a mes en cada una */
queryHome.get("/january/vehicle", ControllerHome.JanVehicle);
queryHome.get("/february/vehicle", ControllerHome.FebVehicle);
queryHome.get("/march/vehicle", ControllerHome.MarVehicle);
queryHome.get("/april/vehicle", ControllerHome.AprVehicle);
queryHome.get("/may/vehicle", ControllerHome.MayVehicle);
queryHome.get("/june/vehicle", ControllerHome.JunVehicle);
queryHome.get("/july/vehicle", ControllerHome.JulVehicle);
queryHome.get("/august/vehicle", ControllerHome.AugVehicle);
queryHome.get("/september/vehicle", ControllerHome.SepVehicle);
queryHome.get("/october/vehicle", ControllerHome.OctVehicle);
queryHome.get("/november/vehicle", ControllerHome.NovVehicle);
queryHome.get("/december/vehicle", ControllerHome.DecVehicle);
/* Final  ruta que traer clientes mes a mes en cada una */

export default queryHome

