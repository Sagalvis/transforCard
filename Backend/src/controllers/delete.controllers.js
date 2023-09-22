/* importacion de la base de la base de datos para hace las consultas */

import {pool} from "../dbconfig.js";
/*--- NOTA: USAR SOLO SI ES ESTRICAMENTE NECESARIO ---*/

/* Consulta para eliminar clientes  */


export const deleteCustomer = async(req, res) => {
  try {
    const { identificacion} =  req.params;
    const [row] = await pool.query(
      "DELETE FROM cliente WHERE identificacion = ?",
      [identificacion]
    );
    if (row.affectedRows === 0){
      return res.status(404).json({
        message:"No se encontró al cliente",
      });
    };
    res.send({
      message:'Cliente eliminado correctamente',
      identificacion
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para eliminar empleados  */

export const deleteEmployees = async (req, res) => {
  try {
    const {id_empleado} = req.params;
    const [row] = await pool.query(
      "DELETE FROM empleado WHERE id_empleado = ?",
      [id_empleado]
    );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message:"No se encontró al empleado",
      });
    };
    res.send({
      message:'empleado eliminado correctamente',
      id_empleado
    })
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para eliminar vehiculos  */

export const deleteVehicle = async(req, res) => {
  try {
    const { matricula} = req.params;
    const [row] = await pool.query(
      "DELETE FROM vehiculo WHERE matricula = ?",
      [matricula]
    );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al vehículo",
      });
    };
    res.send({
      message:'vehículo eliminado correctamente',
      matricula
    })
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};


/* Consulta para eliminar productos de la tabla inventario */

export const deleteProductInventory = async (req, res) => {
  try {
    const {id_inventario} = req.params;
    const [row] = await pool.query(
      "DELETE FROM inventario WHERE id_inventario = ? ",[id_inventario]
    )
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró el producto",
      });
    };
    res.send({
      message:'producto eliminado correctamente',
      id_inventario
    })
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}


/* Consulta para eliminar servicios... */

export const deleteServiceInventory = async (req, res) => {
  try {
    const {id_orden} = req.params;
    const [row] = await pool.query(
      "DELETE FROM orden_servicio WHERE id_orden = ? ",[id_orden]
    )
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró el producto",
      });
    };
    res.send({
      message:'producto eliminado correctamente',
      id_orden
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}


/* Consulta para eliminar ordenes de la tabla orden de servicio */

export const deleteServiceOrder = async (req, res) => {
  try {
    const {id_servicio_cliente} = req.params;
    const [row] = await pool.query(
      "DELETE FROM servicio_cliente WHERE id_servicio_cliente = ? ",[id_servicio_cliente]
    )
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró la orden",
      });
    };
    res.send({
      message:'Orden eliminada correctamente',
      id_servicio_cliente
    })
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}