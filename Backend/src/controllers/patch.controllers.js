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
    const { nombre, apellido, correo, contraseña } = req.body;
    const [row] = await pool.query("UPDATE employees SET nombre = COALESCE(?, nombre), apellido = COALESCE(?, apellido), correo = COALESCE(?, correo), contraseña = COALESCE(?, contraseña) WHERE id_empleado = ?",[nombre, apellido, correo,contraseña, id_empleado ]);
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al empleado",
      });
    }
    res.send({ id_empleado,nombre,apellido,correo,contraseña });
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
    const { observacion } = req.body;
    const [row] = await pool.query( "UPDATE vehicle SET observacion = COALESCE(?, observacion) WHERE matricula = ?",
      [observacion, matricula] );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró el vehículo",
      });
    }
    res.send({ matricula,observacion })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}
