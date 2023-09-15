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
  try {
    const { id_empleado } = req.params;
    const { nombre, apellido, correo, contraseña, id_rol } = req.body;
    const [row] = await pool.query("UPDATE empleado SET nombre = COALESCE(?, nombre), apellido = COALESCE(?, apellido), correo = COALESCE(?, correo), contraseña = COALESCE(?, contraseña), id_rol = COALESCE(?,id_rol) WHERE id_empleado = ?",[nombre, apellido, correo,contraseña, id_rol, id_empleado ]);
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al empleado",
      });
    }
    res.send({ id_empleado,nombre,apellido,correo,contraseña,id_rol });
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
    res.send({ matricula })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}

/* Consulta para actualizar productos en el inventario */
export const updateInventoryProduct = async (req,res)=>{
  try {
    const {id_producto} = req.params;
    const {tipo_producto, nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida} = req.body;
    const [row] = await pool.query(
      "UPDATE inventario SET nombre = COALESCE(?, nombre), costo = COALESCE(?,costo), cantidad_comprada = COALESCE(?, cantidad_comprada), precio_unitario = COALESCE(?, precio_unitario),cantidad_en_stock = COALESCE (?, cantidad_en_stock), cantidad_vendida = COALESCE(?, cantidad_vendida) WHERE id_producto = ?",[tipo_producto, nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida, id_producto]
    );
    if (row.affectedRows === 0){
      return res.status(404).json({
        message: "No se encontró al procuto",
      });
    }
    res.send({
      id_producto, tipo_producto, nombre, costo, cantidad_comprada, precio_unitario, cantidad_en_stock, cantidad_vendida
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}