import {Router} from "express";

import * as controllGet from "../controllers/get.controllers.js";

const getRouter = Router();

/* Routas para traer las tablas clientes, empoleados, vehiculos */
getRouter.get('/customer', controllGet.getCustomer);
getRouter.get('/employees', controllGet.getEmployees);
getRouter.get('/vehicle', controllGet.getVehicle);
getRouter.get('/vehicle/:identificacion', controllGet.getVehicleId);
getRouter.get('/tipovehicle', controllGet.getSelectypevehicle);
getRouter.get('/tiporol', controllGet.getSelectRol);
getRouter.get('/tipopais', controllGet.getSelectPais);
getRouter.get('/tipocliente', controllGet.getTypeClient);
getRouter.get('/inventario', controllGet.getInventario);

export default getRouter