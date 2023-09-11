/* importacion de la base de la base de datos para hace las consultas */
import {pool} from "../dbconfig.js";

/* consulta para traer toda la tabla de clientes */
export const getCustomer = async(req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente");
    res.send(row)
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor"
    });
  }
};

/* Consulta para traer toda la tabla empleados */

export const getEmployees = async(req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM empleado");
    res.send(row)
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor"
    });
  }
}

/* Consulta para traer toda la tabla vehicle */

export const getVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo");
    res.send(row)
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor"
    });
  }
};


export const getSelectypevehicle = async(req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM tipo_vehiculo")
  } catch (error) {
    
  }
}