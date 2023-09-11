/* importacion de la base de la base de datos para hace las consultas */
import { pool } from "../dbconfig.js";

/* Consulta para crear clientes */
export const postCustomer = async (req, res) => {
  try {
    const { identification, name, last_name, email, adress, tel } = req.body;
    const [row] = await pool.query(
      "INSERT INTO customer (identification, name, last_name, email, adress, tel) VALUE(?,?,?,?,?,?)",
      [identification, name, last_name, email, adress, tel]
    );
    res.send({
      identification,
      name,
      last_name,
      email,
      adress,
      tel,
    });
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
    const {
      id_empleado,
      nombres,
      apellidos,
      edad,
      direccion,
      telefono,
      correo,
      contraseña,
    } = req.body;
    const [row] = await pool.query(
      "INSERT INTO employees (id_empleado, nombres, apellidos, edad, direccion,telefono, correo, contraseña) VALUE (?,?,?,?,?,?,?,?)",
      [
        id_empleado,
        nombres,
        apellidos,
        edad,
        direccion,
        telefono,
        correo,
        contraseña
      ]
    );
    res.send({
      id_empleado,
      nombres,
      apellidos,
      edad,
      direccion,
      telefono,
      correo,
      contraseña
    });
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
    const { matricula, tarjetaPropiedad, marca, modelo, año, color, vin, observacion } = req.body;
    const [row] = await pool.query(
      "INSERT INTO vehicle (matricula, tarjetaPropiedad, marca, modelo, año, color, vin,observacion) VALUE(?,?,?,?,?,?,?,?)",
      [matricula, tarjetaPropiedad, marca, modelo, año, color, vin,observacion]
    );
    res.send({
      matricula,
      tarjetaPropiedad,
      marca,
      modelo,
      año,
      color,
      vin,
      observacion
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};
