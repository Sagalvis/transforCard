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

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const upload = multer({
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR,'../uploads'),
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            cb(null, `${fileName}-${Date.now()}${fileExtension}`);
        }
    })
    ,
    limits: {
        fieldSize: 10000000
    }
});
