import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';
import { pool } from '../dbconfig.js';

const isAuth = async (req, res, next) => {
    const token = req.header("user")
     if(!token) return res.json({message : 'Usuario no logueado'})
     try {
        const validtoken = jwt.verify(token, SECRET_KEY)
       /*  console.log("Decoded Token: ", validtoken);
        req.correo = validtoken.correo;
        req.contraseña = validtoken.contraseña;
        const user = await pool.query("SELECT * FROM empleado WHERE correo = ? AND contraseña = ?",[req.correo, req.contraseña])
        console.log("User: ", user); */
        if(!validtoken){

            return res.json({ message : 'Usuario no existe' })
            
        }
        next();
    } catch (error) {
        console.error("Token verification error: ", error);
        return res.status(401).json({ message : 'Token invalido' })
    }

}

export default isAuth