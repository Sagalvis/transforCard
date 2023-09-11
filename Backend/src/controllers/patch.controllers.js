/* importacion de la base de la base de datos para hace las consultas */
import { pool } from "../dbconfig.js";

/* se usa COALESCE para  permitir que los campos no especificados en la solicitud PATCH mantengan 
sus valores actuales en la base de datos. */

/* Consulta para actualizar clientes */

export const updateCustomer = async (req, res) => {
  try {
    const { identification } = req.params;
    const { name, last_name, email, adress, phone } = req.body;
    const [row] = await pool.query(
      "UPDATE customer SET name = COALESCE(?, name), last_name = COALESCE(?, last_name), email = COALESCE(?, email), adress = COALESCE(?, adress), phone = COALESCE(?, phone) WHERE identification = ?",
      [name, last_name, email, adress, phone, identification]
    );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al cliente",
      });
    }
    res.send({
      identification,
      name,
      last_name,
      email,
      adress,
      phone,
    });
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
    const { nombres, apellidos, edad, direccion, telefono, correo, contraseña } = req.body;
    const [row] = await pool.query(
      "UPDATE employees SET nombres = COALESCE(?, nombres), apellidos = COALESCE(?, apellidos), edad = COALESCE(?, edad), direccion = COALESCE(?, direccion), telefono = COALESCE(?, telefono), correo = COALESCE(?, correo), contraseña = COALESCE(?, contraseña) WHERE id_empleado = ?",
      [nombres, apellidos, edad, direccion, telefono, correo,contraseña, id_empleado]
    );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al empleado",
      });
    }
    res.send({
      id_empleado,
      nombres,
      apellidos,
      edad,
      direccion,
      telefono,
      correo,
      contraseña
    });
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
    const {matricula} = req.params;
    const {tarjetaPropiedad, marca, modelo,año, color, vin,observacion} = req.body;
    const [row] = await pool.query(
      "UPDATE vehicle SET tarjetaPropiedad = COALESCE(?, tarjetaPropiedad), marca = COALESCE(?, marca),modelo = COALESCE(?, modelo), año = COALESCE(?, año), color = COALESCE(?, color), vin = COALESCE(?, vin), observacion = COALESCE(?, observacion)",
      [tarjetaPropiedad, marca,modelo, año, color, vin,observacion, matricula]
    );
    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró al vehiculo",
      });
    }
    res.send({
      matricula,
      tarjetaPropiedad,
      marca,
      modelo,
      año,
      color,
      vin,
      observacion
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}
