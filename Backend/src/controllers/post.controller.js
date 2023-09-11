/* importacion de la base de la base de datos para hace las consultas */
import { pool } from "../dbconfig.js";

/* Consulta para crear clientes */
export const postCustomer = async (req, res) => {
  try {
    const { identificacion, nombre, apellido, correo, direccion, tel } = req.body;
    const [row] = await pool.query( "INSERT INTO cliente (identificacion, nombre, apellido, correo, direccion, tel) VALUE(?,?,?,?,?,?)",[identificacion, nombre, apellido, correo, direccion, tel]);
    res.send({identificacion, nombre, apellido, correo, direccion,tel});
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para crear empleado */

export const postEmployees = async (req, res) => {
  try {
    const { id_empleado, nombre, apellido, correo, contraseña } = req.body;
    const [row] = await pool.query("INSERT INTO empleado (id_empleado, nombre, apellido, correo, contraseña) VALUE (?,?,?,?,?,?,?,?)",[id_empleado, nombre, apellido, correo, contraseña]);
    res.send({id_empleado,nombre,apellido,correo,contraseña});
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para crear vehiculos */

export const postVehicle = async (req, res) => {
  try {
    const { matricula, tarjetaPropiedad, marca, modelo, año, color, vin, observacion, identificacion, id_tipo_vehiculo } = req.body;
    const [row] = await pool.query( "INSERT INTO vehiculo (matricula, tarjetaPropiedad, marca, modelo, año, color, vin,observacion, identificacion, id_tipo_vehiculo) VALUE(?,?,?,?,?,?,?,?,?,?)",[matricula, tarjetaPropiedad, marca, modelo, año, color, vin,observacion, identificacion, id_tipo_vehiculo]);
    res.send({matricula,tarjetaPropiedad,marca,modelo,año,color,vin,observacion, identificacion, id_tipo_vehiculo});
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};
