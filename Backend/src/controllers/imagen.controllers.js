import { pool } from "../dbconfig.js";
import multer from "multer";

export const imagenes = () => {
    const upload = multer({ dest: "../img/" });
    upload.single('imagen'), function(req,res){
        const file = req.file
        console.log(file)
        res.send("imagen recibida")
    }
}