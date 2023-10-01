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


