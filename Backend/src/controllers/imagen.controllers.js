import { pool } from "../dbconfig.js";
import multer from "multer";
import path from "path";

export const imagenes = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, '../assets')
    },
    filename: (req, file, cb)=>{
        cb(null,"imagen"+Date.now()+file.originalname);
    }
})

export const fileUpload = multer({
    storage: imagenes
}).single('imagen')



export const postImg = async () =>{
    const [row] = await pool.query("insert into imagen values (?)" )
}
