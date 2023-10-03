import jwt from "jws";
import { SECRET_KEY } from "../config.js";

export const isAuth = (req, res) => {
    // Obtenemos el token de autenticación de la solicitud
    const token = req.headers.authorization;

    // Verificamos que la solicitud contenga la cabecera `Authorization`
    if (!token) {
        // La solicitud no contiene la cabecera `Authorization`
        res.status(401).send("No autorizado");
        return;
    }

    // Verificamos que el token de autenticación sea válido
    const decodedToken = jwt.verify(token, SECRET_KEY);
    if (!decodedToken) {
        // El token de autenticación no es válido
        res.status(401).send("No autorizado");
        return;
    }

    // Si el token de autenticación es válido, continuamos con la solicitud
    req.user = decodedToken.user;
    next();
};
