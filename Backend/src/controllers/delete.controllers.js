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
        message: "No se encontró al vehiculo",
      });
    };
    res.send({
      message:'vehiculo eliminado correctamente',
      matricula
    })
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};


/* export const deleteCustomer = async(req, res) => {
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
 */