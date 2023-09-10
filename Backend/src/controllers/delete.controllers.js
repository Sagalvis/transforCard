/* importacion de la base de la base de datos para hace las consultas */
import {pool} from "../dbconfig.js";
/*--- NOTA: USAR SOLO SI ES ESTRICAMENTE NECESARIO ---*/

/* Consulta para eliminar clientes  */


export const deleteCustomer = async(req, res) => {
  try {
    const { identification} =  req.params;
    const [row] = await pool.query(
      "DELETE FROM customer WHERE identification = ?",
      [identification]
    );
    if (row.affectedRows === 0){
      return res.status(404).json({
        message:"No se encontró al cliente",
      });
    }
    res.send({
      message:'Cliente eliminado correctamente',
      identification
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};