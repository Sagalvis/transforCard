import jwt from "jws";
/* import moment from "moment" */
import {SECRET_KEY} from "../config.js";

export const isAuth = (req, res) => {
    if(!req.headers.authorization){
        return res.status(403).send({ message: "No tienes autorización"});
    }

    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.decode(token, SECRET_KEY);
    
    /* if(payload.exp <= moment().unix()){
        return res.status(401).send({ message: "El token ha expirado"})
    } */

    req.user = payload.sub;
    next()
}