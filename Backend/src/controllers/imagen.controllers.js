import { pool } from "../dbconfig.js"
import multer from "multer";

// Configuramos Multer
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});

// Creamos un middleware para manejar las subidas de imágenes
export const upload = multer({storage});

export const getImg = async (req, res) =>{
    try {
        const [row] = await pool.query("SELECT * FROM imagen");
        res.json(row[0]); 
    } catch (error) {
        return res.status(500).json({message:"No se encontro la imagen"})
    }
    

}

