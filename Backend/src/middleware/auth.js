// import jwt from "jws";
// import { SECRET_KEY } from "../config.js";

// export const isAuth = (req, res) => {
//     // Obtenemos el token de autenticación de la solicitud
//     const token = req.headers.authorization;

//     // Verificamos que la solicitud contenga la cabecera `Authorization`
//     if (!token) {
//         // La solicitud no contiene la cabecera `Authorization`
//         res.status(401).send("No autorizado");
//         return;
//     }

//     // Validamos el formato del token
//     if (!token.startsWith("Bearer ")) {
//         // El token no tiene el formato correcto
//         res.status(401).send("El token de autenticación no es válido");
//         return;
//     }

//     // Verificamos que el token de autenticación sea válido
//     const decodedToken = jwt.verify(token.slice(7), SECRET_KEY);
//     if (!decodedToken) {
//         // El token de autenticación no es válido
//         res.status(401).send("El token de autenticación no es válido");
//         return;
//     }

//     // Almacenamos el usuario en la sesión
//     req.session.user = decodedToken.user;

//     next();
// };

// import jwt from "jsonwebtoken"; // Importa jwt desde la biblioteca correcta
// import { SECRET_KEY } from "../config.js";

// export const isAuth = (req, res, next) => { // Agrega el parámetro 'next'
//     // Obtenemos el token de autenticación de la solicitud
//     const token = req.headers.authorization;

//     // Verificamos que la solicitud contenga la cabecera `Authorization`
//     if (!token) {
//         // La solicitud no contiene la cabecera `Authorization`
//         res.status(401).send("No autorizado");
//         return;
//     }

//     // Validamos el formato del token
//     if (!token.startsWith("Bearer ")) {
//         // El token no tiene el formato correcto
//         res.status(401).send("El token de autenticación no es válido");
//         return;
//     }

//     // Verificamos que el token de autenticación sea válido
//     try {
//         const decodedToken = jwt.verify(token.slice(7), SECRET_KEY);
//         req.session.user = decodedToken.user;
//         next(); // Llama a 'next' para pasar la solicitud al siguiente middleware o controlador
//     } catch (error) {
//         // Si la verificación del token falla, devuelve un error 401
//         res.status(401).send("El token de autenticación no es válido");
//     }
// };


// Para firmar un token


// Para verificar un token


import jwt from "jsonwebtoken"; // Importa jwt desde la biblioteca correcta
import { SECRET_KEY } from "../config.js";
import {pool} from "../dbconfig.js"

/* export const isAuth = (req, res) => { // Agrega el parámetro 'next'
    // Obtenemos el token de autenticación de la solicitud
    const token = jwt.sign({ user: "nombreDeUsuario" }, SECRET_KEY, { algorithm: "HS256" });

    // Verificamos que la solicitud contenga la cabecera `Authorization`
    if (!token) {
        // La solicitud no contiene la cabecera `Authorization`
        res.status(401).send("No autorizado");
        return;
    }

    // Validamos el formato del token
    if (!token.startsWith("Bearer ")) {
        // El token no tiene el formato correcto
        res.status(401).send("El token de autenticación no es válido");
        return;
    }

    // Verificamos que el token de autenticación sea válido
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY, { algorithm: "HS256" });
        console.log(decodedToken);
    } catch (error) {
        console.error("Error al verificar el token:", error);
    }
}; */

export const valToken = async(req, res, next)=>{
    const user = req.header('user')
    if(!user) return res.json({message: 'User not found'})
    try {
        const validaToken = jwt.verify(user, SECRET_KEY)
        req.id_tipo_cliente = validaToken.id_tipo_cliente
        const User = await pool.query("select * from cliente where identificacion = ?", [req.identificacion])
        console.log(User)
        if(!User) return res.json({message: "no existes"})
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}