import jwt from "jsonwebtoken"; // Importa jwt desde la biblioteca correcta
import { SECRET_KEY } from "../config.js";

export const isAuth = async (req, res) => {
    const token = req.header('user');
    if (!token) return res.json({ message: 'Token de usuario no encontrado' });
    try {
        const validaToken = jwt.verify(token, SECRET_KEY);
        console.log("validacion", validaToken);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};