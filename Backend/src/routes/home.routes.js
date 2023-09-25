import { Router } from "express";
import * as ControllerHome from "../controllers/home.controller.js"
const queryHome = Router();

/* Inicio de las rutas para contar el contenido de las diferentes tabalas  */
queryHome.get("/countclientes", ControllerHome.CounterCustomer);
queryHome.get("/countvehiculos", ControllerHome.CounterVehicle);
queryHome.get("/countempleados", ControllerHome.CounterEmployees);
queryHome.get("/countproductos", ControllerHome.CounterProduct);
queryHome.get("/countservicios", ControllerHome.CounterService);
queryHome.get("/countordenesdeservicio", ControllerHome.CounterServiceOrder);
export default queryHome

