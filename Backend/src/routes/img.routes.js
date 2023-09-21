import {Router} from "express";

import * as controllpost from "../controllers/imagen.controllers.js";

const imgRouter = Router();

/* Rutas para subir imagenes */

imgRouter.post('/imagen', controllpost.imagenes);

export default imgRouter;