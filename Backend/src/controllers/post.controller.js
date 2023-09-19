/* importacion de la base de la base de datos para hace las consultas */
import { pool } from "../dbconfig.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const SECRET = "jesusessimpdehelena"
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
    const passwordHash = await bcrypt.hash(contraseña, 8);
    /* await postLoginEmployees (req, res, passwordHash) */
    const [row] = await pool.query(
      "INSERT INTO empleado (id_empleado, nombre, apellido, correo, contraseña,id_rol) VALUE (?,?,?,?,?,?)",
      [id_empleado, nombre, apellido, correo, passwordHash,id_rol]
      );
      res.send({ id_empleado, nombre, apellido, correo, passwordHash,id_rol });
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
    console.log(req.body);

    const [rows] = await pool.query(
      "SELECT * FROM empleado WHERE correo = ?",
      [correo]
    );
    console.log(rows[0])
    if (rows.length > 0) {
      const compassword = await bcrypt.compare(contraseña, rows[0].contraseña);
      console.log(compassword);
      console.log({id: rows[0].id_empleado});
      if (compassword) {
        const token = jwt.sign({ id: rows[0].id_empleado }, SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json(token);
        
      } else {
        res.status(400).send("El usuario no existe 🤣🤣");
      }
    } else {
      res.status(400).send("El usuario no existe🤦‍♂🤦‍♂");
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor 💀💀💀" });
  }
};

/* consulta para crear productos en el inventario */

export const postInventario = async (req, res) => {
  try {
    const {id_producto, nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida, id_item, id_medida} = req.body;
    const [row] = await pool.query(
      "INSERT INTO inventario (id_producto, nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida,id_item, id_medida) VALUEs(?,?,?,?,?,?,?,?,?)",
      [ id_producto, nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida,id_item, id_medida]
    );
    res.json({
      id_inventario: row.insertId,
      id_producto, nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida,id_item, id_medida
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}
