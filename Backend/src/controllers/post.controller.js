/* importacion de la base de la base de datos para hace las consultas */
import { pool } from "../dbconfig.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { SECRET_KEY } from "../config.js";
/* Consulta para crear clientes */
export const postCustomer = async (req, res) => {
  try {
    const {
      identificacion,
      nombre,
      apellido,
      correo,
      direccion,
      barrio,
      tel,
      idtipo_documento,
    } = req.body;
    const [row] = await pool.query(
      "INSERT INTO cliente (identificacion, nombre, apellido, correo, direccion,barrio, tel, idtipo_documento) VALUE(?,?,?,?,?,?,?,?)",
      [
        identificacion,
        nombre,
        apellido,
        correo,
        direccion,
        barrio,
        tel,
        idtipo_documento,
      ]
    );
    res.send({
      identificacion,
      nombre,
      apellido,
      correo,
      direccion,
      barrio,
      tel,
      idtipo_documento,
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
    const { id_empleado, nombre, apellido, correo, contraseña, id_rol } =
      req.body;
    const passwordHash = await bcrypt.hash(contraseña, 8);
    const [row] = await pool.query(
      "INSERT INTO empleado (id_empleado, nombre, apellido, correo, contraseña, id_rol) VALUE (?,?,?,?,?,?)",
      [id_empleado, nombre, apellido, correo, passwordHash, id_rol]
    );
    res.json(row);
    console.log(row);
  } catch (error) {
    console.log(error);
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
      "SELECT rol_empleado.rol, empleado.* FROM empleado INNER JOIN rol_empleado ON empleado.id_rol = rol_empleado.id_rol where correo = ?",
      [correo]
    );

    if (rows.length > 0) {
      const compassword = await bcrypt.compare(contraseña, rows[0].contraseña);

      if (compassword) {
        const token = jwt.sign(
          {
            rol: rows[0].rol,
            id: rows[0].id_empleado,
            nombre: rows[0].nombre,
            apellido: rows[0].apellido,
            correo: rows[0].correo,
          },
          SECRET_KEY,
          {
            expiresIn: '1h',
          }
        );
        res.status(200).json({ token });
      } else {
        res.status(401).json({ error: "Contraseña incorrecta" });
      }
    } else {
      res.status(404).json({ error: "El usuario no existe" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor 💀💀💀" });
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


export const postInvoices = async (req, res) => {
  try {
    const {
      id_factura,
      identificacion,
      id_orden,
      fecha_emision,
      cantidad_pagada,
      estado_pago,
    } = req.body;
    console.log(req.body, "los campos estan correctos 🤔🤔🤔");
    const [row] = await pool.query(
      "INSERT INTO factura (id_factura, identificacion, id_orden, fecha_emision, cantidad_pagada, estado_pago) VALUES (?, ?, ?, ?, ?, ?)",
      [
        id_factura,
        identificacion,
        id_orden,
        fecha_emision,
        cantidad_pagada,
        estado_pago,
      ]
    );
    console.log(row, "no hay fallas 😎😎😎");
    res.json({
      id_factura,
      identificacion,
      id_orden,
      fecha_emision,
      cantidad_pagada,
      estado_pago,
    });
  } catch (error) {
    console.error(error);
  }
};
/* Consulta para crear servicios */

export const postOrdenService = async (req, res) => {
  try {
    const file = req.file;
    console.log(file);

    if (!file) {
      return res.status(400).json({ message: 'No se ha proporcionado una imagen' });
    }

    const { id_orden, nombre_serv, descripcion, precio, tiempo_estimado } = req.body;

    // Extraer el nombre del archivo del campo originalname
    const imageName = file.originalname;

    const [row] = await pool.query(
      "INSERT INTO orden_servicio (id_orden, nombre_serv, descripcion, precio, tiempo_estimado, ruta_img) VALUES (?,?,?,?,?,?)",
      [id_orden, nombre_serv, descripcion, precio, tiempo_estimado, imageName]
    );

    res.json(row);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para crear orden se servicio a cada cliente */

export const postOrdenServiceCliente = async(req, res) => {
  try {
    const {identificacion, id_orden} = req.body;
    const [existingService] = await pool.query("SELECT * FROM servicio_cliente WHERE identificacion = ? AND id_orden = ?",[identificacion, id_orden]);
    if (existingService.length > 0) {
      return res.status(404).json({
        message:"Error. El servicio ya existe"
      })
    }else {
      const [rows] = await pool.query("INSERT INTO servicio_cliente (identificacion, id_orden) VALUES (?,?)",[identificacion,id_orden]);
      res.status(200).json({
        message: "Servicio agregado con exito"
      })
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* post para crear la factura */
export const postCreateFactura = async (req, res) => {
  try {
    const { id_servicio_cliente, identificacion } = req.body;
    const [precio] = await pool.query(
      "SELECT SUM(orden_servicio.precio) AS suma_precio FROM servicio_cliente INNER JOIN orden_servicio ON servicio_cliente.id_orden = orden_servicio.id_orden INNER JOIN cliente ON servicio_cliente.identificacion = cliente.identificacion where cliente.identificacion = ? GROUP BY cliente.identificacion, cliente.nombre, cliente.apellido",
      [identificacion]
    );

    const [row] = await pool.query(
      "INSERT INTO factura (cantidad_pagada, id_servicio_cliente, estado_pago) VALUES (?,?,'PENDIENTE')",
      [precio[0].suma_precio, id_servicio_cliente]
    );
    res.json({
      row,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

export const postCallService = async (req, res) => {
  try {
    const { identificacion } = req.params;
    console.log(req.body);
    const [row] = await pool.query(
      "SELECT cliente.identificacion, orden_servicio.nombre_serv AS servicios, orden_servicio.precio AS precio FROM servicio_cliente INNER JOIN orden_servicio ON servicio_cliente.id_orden = orden_servicio.id_orden INNER JOIN cliente ON servicio_cliente.identificacion = cliente.identificacion WHERE cliente.identificacion = ?",
      [identificacion]
    );
    res.json({
      message: "Se ha generado la factura",
      row,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};


