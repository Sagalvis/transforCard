/* importacion de la base de la base de datos para hace las consultas */
import {pool} from "../dbconfig.js"

/* consulta para traer toda la tabla de clientes */
export const getCustomer = async(req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM customer");
    res.send(row)
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor"
    });
  }
};

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

/* Consulta para actualizar clientes(se usa COALESCE para  permitir que 
  los campos no especificados en la solicitud PATCH mantengan sus valores actuales en la base de datos.) */

export const updateCustomer = async (req, res) => {
  try {
    const { identification } = req.params;
    const { name, last_name, email, adress, phone } = req.body;
    const [row] = await pool.query(
      "UPDATE customer SET name = COALESCE(?, name), last_name = COALESCE(?, last_name), email = COALESCE(?, email), adress = COALESCE(?, adress), phone = COALESCE(?, phone) WHERE identification = ?",
      [name, last_name, email, adress, phone, identification]
    );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al cliente",
      });
    }
    res.send({
      identification,
      name,
      last_name,
      email,
      adress,
      phone
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para eliminar clientes  */
/* NOTA: USAR SOLO SI ES ESTRICAMENTE NECESARIO */

export const deleteCustomer = async(req, res) => {
  try {
    const { identification} =  req.params;
    const [row] = await pool.query(
      "DELETE FROM customer WHERE identification = ?",
      [identification]
    );
    if (row.affectedRows === 0){
      return res.status(404).json({
        message:"No se encontró al cliente",
      });
    }
    res.send({
      message:'Cliente eliminado correctamente',
      identification
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};