/* importacion de la base de la base de datos para hace las consultas */
import { pool } from "../dbconfig.js";

/* se usa COALESCE para  permitir que los campos no especificados en la solicitud PATCH mantengan 
sus valores actuales en la base de datos. */

/* Consulta para actualizar clientes */

export const updateCustomer = async (req, res) => {
  try {
    const { identificacion } = req.params;
    const { nombre,apellido,correo,direccion,tel } = req.body;
    const [row] = await pool.query( "UPDATE cliente SET nombre = COALESCE(?, nombre), apellido = COALESCE(?, apellido), correo = COALESCE(?, correo), direccion = COALESCE(?, direccion), tel = COALESCE(?, tel) WHERE identificacion = ?",
      [nombre,apellido,correo,direccion,tel,identificacion] );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al cliente",
      });
    }
    res.send({identificacion,nombre,apellido,correo,direccion,tel});
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para actualizar empleados */

export const updateEmployees = async (req, res) => {
  const {nombre,apellido, correo, id_rol} = req.body
  const {id_empleado} = req.params
  try {
    const [row] = await pool.query("UPDATE empleado SET nombre = COALESCE(?,nombre), apellido = COALESCE(?, apellido), correo = COALESCE(?, correo),  id_rol = COALESCE(?,id_rol) WHERE id_empleado = ?",[nombre, apellido, correo, id_rol, id_empleado ]);
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al empleado",
      });
    }
    res.send({ id_empleado,nombre,apellido,correo,id_rol });
    console.log(res)
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para actualizar vehiculos */

export const updateVehicle = async (req, res) => {
  try {
    const { matricula } = req.params;
    const { tarjetaPropiedad,marca,modelo,año,color,vin } = req.body;
    const [row] = await pool.query( "UPDATE vehiculo SET tarjetaPropiedad = COALESCE(?, tarjetaPropiedad), marca = COALESCE(?, marca), modelo = COALESCE(?, modelo), año = COALESCE(?, año), color = COALESCE(?, color), vin = COALESCE(?, vin) WHERE matricula = ?",
      [tarjetaPropiedad,marca,modelo,año,color,vin,matricula] );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró el vehículo",
      });
    }
    res.send({ matricula,tarjetaPropiedad,marca,modelo,año,color,vin })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}

/* Consulta para actualizar productos de la tabla inventario */

export const updateProcutoInventario = async (req, res) => {
  try {
    const {id_inventario} = req.params;
    const {nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida,  id_medida, id_producto} = req.body;
    const [row] = await pool.query("UPDATE inventario SET nombre = COALESCE(?, nombre), costo = COALESCE(?, costo), cantidad_comprada = COALESCE(?,cantidad_comprada), precio_unitario = COALESCE(?,precio_unitario), cantidad_en_stock = COALESCE(?, cantidad_en_stock), cantidad_vendida = COALESCE(?, cantidad_vendida), id_medida = COALESCE (?, id_medida), id_producto = COALESCE (?, id_producto)  WHERE id_inventario = ?", [ nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida, id_medida, id_producto, id_inventario]);
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró el producto",
      });
    }
    res.send({id_inventario, nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida, id_medida, id_producto})
  } catch (error) { 
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
} 

// Consulta para actualizar Service 
export const updateService = async (req, res) => {
  try {
    const {nombre_serv, descripcion, precio, tiempo_estimado} = req.body;
    const {id_orden} = req.params
    const [row] = await pool.query('UPDATE orden_servicio SET nombre_serv = IFNULL(?, nombre_serv), descripcion = IFNULL(?, descripcion), precio = IFNULL(?, precio), tiempo_estimado = IFNULL(?, tiempo_estimado) WHERE id_orden = ?',[nombre_serv, descripcion, precio, tiempo_estimado, id_orden]);
    res.status(201).json({message:"registro actualizado..."})
  } catch (error) {
    res.status(500).send(error)
  }
}
