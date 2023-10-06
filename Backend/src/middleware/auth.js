import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

export const isAuth = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.json({ message: 'Token de usuario no encontrado'});
    try {
        const validaToken = jwt.verify(token, SECRET_KEY);
        console.log("validacion", validaToken);
        if (validaToken.role === 'administrador') {
            next();
        } else {
            return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta.' });
        }
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};