/* importacion de la base de la base de datos para hace las consultas */
import { pool } from "../dbconfig.js";
import jwt from "jsonwebtoken";

/* Consulta para crear clientes */
export const postCustomer = async (req, res) => {
  try {
    const { identificacion, nombre, apellido, correo, direccion, tel, idpais, id_tipo_cliente } =
      req.body;
    const [row] = await pool.query(
      "INSERT INTO cliente (identificacion, nombre, apellido, correo, direccion, tel, idpais, id_tipo_cliente) VALUE(?,?,?,?,?,?,?,?)",
      [identificacion, nombre, apellido, correo, direccion, tel, idpais, id_tipo_cliente]
    );
    res.send({ identificacion, nombre, apellido, correo, direccion, tel, idpais, id_tipo_cliente });
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
    const { id_empleado, nombre, apellido, correo, contraseña, id_rol } = req.body;
    const nueva = await pool.query()
    const [row] = await pool.query(
      "INSERT INTO empleado (id_empleado, nombre, apellido, correo, contraseña,id_rol) VALUE (?,?,?,?,?,?)",
      [id_empleado, nombre, apellido, correo, contraseña,id_rol]
    );
    res.send({ id_empleado, nombre, apellido, correo, contraseña,id_rol });
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
    const {
      matricula,
      tarjetaPropiedad,
      marca,
      modelo,
      año,
      color,
      vin,
      observacion,
      identificacion,
      id_tipo_vehiculo,
    } = req.body;
    const [row] = await pool.query(
      "INSERT INTO vehiculo (matricula, tarjetaPropiedad, marca, modelo, año, color, vin,observacion, identificacion, id_tipo_vehiculo) VALUE(?,?,?,?,?,?,?,?,?,?)",
      [
        matricula,
        tarjetaPropiedad,
        marca,
        modelo,
        año,
        color,
        vin,
        observacion,
        identificacion,
        id_tipo_vehiculo,
      ]
    );
    res.send({
      matricula,
      tarjetaPropiedad,
      marca,
      modelo,
      año,
      color,
      vin,
      observacion,
      identificacion,
      id_tipo_vehiculo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para loguear empleados*/

export const postLoginEmployees = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const [rows] = await pool.query(
      "SELECT * FROM empleado WHERE correo =? AND contraseña =?",
      [correo, contraseña]
    );
    console.log(rows);
    //crear el objeto payload
    const payload = {
      username: rows[0].correo,
    };
    console.log(payload);
    //almacenar el token
    const token = jwt.sign(payload, "secretkey");
    console.log(token);
    res.setHeader("Authorization", `Bearer ${token}`);

    return res.status(200).json({ message: "usuario ingresado exitosamente" });
  } catch (error) {
    return res.status(500).json({
      message: "Error al ingresar usuario",
    });
  }
};
