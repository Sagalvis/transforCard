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
    const { id_empleado, nombre, apellido, correo, contraseña, id_rol } =
      req.body;
    const passwordHash = await bcrypt.hash(contraseña, 8);
    /* await postLoginEmployees (req, res, passwordHash) */
    const [row] = await pool.query(
      "INSERT INTO empleado (id_empleado, nombre, apellido, correo, contraseña,id_rol) VALUE (?,?,?,?,?,?)",
      [id_empleado, nombre, apellido, correo, passwordHash, id_rol]
    );
    res.send({ id_empleado, nombre, apellido, correo, passwordHash, id_rol });
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
    /* const [rows] = await pool.query(
      "SELECT * FROM empleado WHERE correo = ?",
      [correo]
      ); */
      const [rows] = await pool.query("SELECT rol_empleado.rol, empleado.* FROM empleado INNER JOIN rol_empleado ON empleado.id_rol = rol_empleado.id_rol where correo = ?", [correo]);
    
    console.log(rows[0])
    if (rows.length > 0) {
      const compassword = await bcrypt.compare(contraseña, rows[0].contraseña);
      console.log(compassword);
      console.log({id: rows[0].id_empleado});
      if (compassword) {
        const token = jwt.sign({rol:rows[0].rol, id: rows[0].id_empleado, nombre: rows[0].nombre , apellido: rows[0].apellido}, SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json(token);
        console.log(token)
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
    const {
      nombre,
      costo,
      cantidad_comprada,
      precio_unitario,
      cantidad_en_stock,
      cantidad_vendida,
      id_medida,
      id_producto,
    } = req.body;
    const [row] = await pool.query(
      "INSERT INTO inventario (nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida, id_medida,id_producto) VALUES(?,?,?,?,?,?,?,?)",
      [
        nombre,
        costo,
        cantidad_comprada,
        precio_unitario,
        cantidad_en_stock,
        cantidad_vendida,

        id_medida,
        id_producto,
      ]
    );
    res.send({
      id_inventario: row.insertId,
      nombre,
      costo,
      cantidad_comprada,
      precio_unitario,
      cantidad_en_stock,
      cantidad_vendida,

      id_medida,
      id_producto,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* post para crear la factura */


export const postInvoices = async (req, res) => {
  try {
    const {
      id_factura,
      identificacion,
      id_orden,
      fecha_emision,
      cantidad_pagada,
      estado_pago
    } = req.body;
    console.log(req.body,'los campos estan correctos 🤔🤔🤔');
    const [row] = await pool.query(
      "INSERT INTO factura (id_factura, identificacion, id_orden, fecha_emision, cantidad_pagada, estado_pago) VALUES (?, ?, ?, ?, ?, ?)",
      [id_factura, identificacion, id_orden, fecha_emision, cantidad_pagada, estado_pago]
    );
    console.log(row, 'no hay fallas 😎😎😎');
    res.json({
      id_factura,
      identificacion,
      id_orden,
      fecha_emision,
      cantidad_pagada,
      estado_pago
    })    
  } catch (error) {
    console.error(error);
  }
}
/* Consulta para crear servicios */

export const postOrdenService = async (req, res) => {
  try {
    const {id_orden, nombre_serv, descripcion, precio, tiempo_estimado} = req.body;
    const [row] = await pool.query("INSERT INTO orden_servicio (id_orden,nombre_serv, descripcion, precio, tiempo_estimado) VALUE (?,?,?,?,?)",
    [id_orden, nombre_serv, descripcion, precio, tiempo_estimado]);
    res.json(row)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}

/* Consulta para crear orden se servicio a cada cliente */

export const postOrdenServiceCliente = async (req, res) => {
  try {
    const { identificacion, id_orden } = req.body;
    const [row] = await pool.query(
      "INSERT INTO servicio_cliente (identificacion, id_orden) VALUES (?,?)",
      [identificacion, id_orden]
    );
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

export const postCreateFactura = async (req, res) => {
  try {
    const {id_servicio_cliente, identificacion} = req.body;
    const [precio] = await pool.query("SELECT SUM(orden_servicio.precio) AS suma_precio FROM servicio_cliente INNER JOIN orden_servicio ON servicio_cliente.id_orden = orden_servicio.id_orden INNER JOIN cliente ON servicio_cliente.identificacion = cliente.identificacion where cliente.identificacion = ? GROUP BY cliente.identificacion, cliente.nombre, cliente.apellido",[identificacion]);

    const [row] = await pool.query("INSERT INTO factura (cantidad_pagada, id_servicio_cliente, estado_pago) VALUES (?,?,'PENDIENTE')", [precio[0].suma_precio, id_servicio_cliente]);
    res.json({
      message:"Se ha creado la Factura",
      row
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}



