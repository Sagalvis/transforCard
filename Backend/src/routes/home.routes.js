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
 queryHome.get("/march/client", ControllerHome.MarchClient);
 queryHome.get("/april/client", ControllerHome.AprilClient);
 queryHome.get("/may/client", ControllerHome.MayClient);
 /*queryHome.get("/june/client", ControllerHome.JuneClient);
 
queryHome.get("/july/client", ControllerHome.JulyClient);
queryHome.get("/august/client", ControllerHome.AugustClient);
queryHome.get("/september/client", ControllerHome.SeptemberClient);
queryHome.get("/october/client", ControllerHome.OctoberClient);
queryHome.get("/november/client", ControllerHome.NovemberClient);
queryHome.get("/december/client", ControllerHome.DecemberClient); */
/* Final  ruta que traer clientes mes a mes en cada una */

/* Inicio ruta que traer vehiculos mes a mes en cada una */
/* queryHome.get("/january/vehiculo", ControllerHome.JanuaryVehicle);
queryHome.get("/february/vehiculo", ControllerHome.FebruaryVehicle);
queryHome.get("/march/vehiculo", ControllerHome.MarchVehicle);
queryHome.get("/april/vehiculo", ControllerHome.AprilVehicle);
queryHome.get("/may/vehiculo", ControllerHome.MayVehicle);
queryHome.get("/june/vehiculo", ControllerHome.JuneVehicle);
queryHome.get("/july/vehiculo", ControllerHome.JulyVehicle);
queryHome.get("/august/vehiculo", ControllerHome.AugustVehicle);
queryHome.get("/september/vehiculo", ControllerHome.SeptemberVehicle);
queryHome.get("/october/vehiculo", ControllerHome.OctoberVehicle);
queryHome.get("/november/vehiculo", ControllerHome.NovemberVehicle);
queryHome.get("/dicember/vehiculo", ControllerHome.DicemberVehicle); */
/* Final  ruta que traer vehiculos mes a mes en cada una */
export default queryHome

