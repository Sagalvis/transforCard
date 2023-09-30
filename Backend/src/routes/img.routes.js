import { Router } from "express";
import { pool } from "../dbconfig.js";
import * as controllimg from "../controllers/imagen.controllers.js";

const imgRouter = Router();
//Rutas para subir imagenes

imgRouter.post('/imagen', controllimg.upload.single('file'), async(req, res)=>{
    const file = req.file
    console.log(file)
    const imagen = {
        name: file.originalname
    }
    await pool.query("INSERT INTO imagen (ruta) values (?)",[imagen.name])
    res.status(200).json({
        message: 'Imagen subida correctamente'
      });
});

imgRouter.get('/getImagen', controllimg.getImg)

export default imgRouter;