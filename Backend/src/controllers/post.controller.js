/* importacion de la base de la base de datos para hace las consultas */
import {pool} from "../dbconfig.js"

/* Consulta para crear clientes */
export const postCustomer = async(req, res) => {
  try {
    const {identification, name, last_name, email, adress, phone} = req.body;
    const [row] = await pool.query(
        "INSERT INTO customer (identification, name, last_name, email, adress, phone) VALUE(?,?,?,?,?,?)",
        [identification,name,last_name, email, adress, phone]
      );
      res.send(({
        identification,
        name,
        last_name,
        email,
        adress,
        phone
      }))
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Error en el servidor"
    })
  }
};