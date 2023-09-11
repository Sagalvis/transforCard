/* Importacion de modulos */
import express from "express";
import cors from "cors";
import jws from "jws";
import getRouter from "./routes/get.routes.js";
import postRouter from "./routes/post.routes.js";
import patchRouter from "./routes/patch.routes.js";
import deleteRouter from "./routes/delete.routes.js";
/* Se crea una instancia de aplicacion express y se almacena en la app */
const app = express();

/* Se usa el middleware de express para las solicitudes en JSON */
app.use(express.json());

/* Se usa el middleware de cors para que  los recursos de la aplicación sean 
accesibles desde diferentes dominios o puertos */
app.use(cors());

app.use(getRouter,postRouter,patchRouter,deleteRouter)

/* Inicio del servidor y en donde va a escuchar el server */
app.listen(3005, () => {
  console.log("Server is running on port 3005");
}); 