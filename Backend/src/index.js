/* Importacion de modulos */
import express from "express"
import cors from "cors"

import router from "./routes/customer.routes.js"
/* Se crea una instancia de aplicacion express y se almacena en la app */
const app = express();

/* Se usa el middleware de express para las solicitudes en JSON */
app.use(express.json());

/* Se usa el middleware de cors para que  los recursos de la aplicación sean 
accesibles desde diferentes dominios o puertos */
app.use(cors());

app.use(router)

/* Inicio del servidor y en donde va a escuchar el server */
app.listen(3005, () => {
  console.log("Server is running on port 3005");
}); 