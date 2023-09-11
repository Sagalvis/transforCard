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
    const [row] = await pool.query("SELECT vehiculo.*, tipo_vehiculo.tipoVehiculo FROM vehiculo INNER JOIN tipo_vehiculo ON vehiculo.id_tipo_vehiculo = tipo_vehiculo.id_tipo_vehiculo ");
    res.send(row)
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor"
    });
  }
};


export const getSelectypevehicle = async(req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM tipo_vehiculo");
    res.send(row)
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor"
    });
  }
}

export const getSelectPais = async(req, res) => {
  0
}