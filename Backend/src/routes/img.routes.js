import {Router} from "express";
import multer from "multer";
import {fileUpload} from "../controllers/imagen.controllers.js"
import * as controllpost from "../controllers/imagen.controllers.js";

const imgRouter = Router();
const uploader = multer({fileUpload})
/* Rutas para subir imagenes */

imgRouter.post('/imagen', uploader,(req, res)=>{
    console.log(req.file)
} /* ,controllpost.postImg */);

export default imgRouter;