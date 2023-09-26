/* importacion de la base de la base de datos para hace las consultas */
import { pool } from "../dbconfig.js";

/* consulta para traer toda la tabla de clientes */
export const getCustomer = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente");
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para traer toda la tabla empleados */

export const getEmployees = async (req, res) => {
  try {
    const [row] = await pool.query(
      "SELECT empleado.*, rol_empleado.rol FROM empleado INNER JOIN rol_empleado ON empleado.id_rol = rol_empleado.id_rol "
    );
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para traer toda la tabla rol de empleados */

export const getSelectRol = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM rol_empleado");
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para traer toda la tabla vehicle */

export const getVehicle = async (req, res) => {
  try {
    const [row] = await pool.query(
      "SELECT vehiculo.*, tipo_vehiculo.tipoVehiculo FROM vehiculo INNER JOIN tipo_vehiculo ON vehiculo.id_tipo_vehiculo = tipo_vehiculo.id_tipo_vehiculo "
    );
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para traer el vehiculo por la identificacion del usuario*/
export const getVehicleId = async (req, res) => {
  try {
    const [row] = await pool.query(
      "SELECT vehiculo.*, tipo_vehiculo.tipoVehiculo FROM vehiculo INNER JOIN tipo_vehiculo ON vehiculo.id_tipo_vehiculo = tipo_vehiculo.id_tipo_vehiculo WHERE identificacion = ?",
      [req.params.identificacion]
    );
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para traer toda la tabla tipo de vehiculo */

export const getSelectypevehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM tipo_vehiculo");
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Conulta para traer toda la tabla tipo de cliente */

export const getTypeClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM tipo_cliente");
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para traer toda la tabla tipo de pais */

export const getSelectPais = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM pais");
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Consulta para traer toda la tabla inventario */

export const getInventario = async (req, res) => {
  try {
    const [row] = await pool.query(
      "SELECT inventario.*, medida.tipo_medida, producto.tipo_producto FROM inventario INNER JOIN medida ON inventario.id_medida = medida.id_medida INNER JOIN producto ON inventario.id_producto = producto.id_producto"
    );
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* Inicio de consultas para traer tipo item, medida y producto */

export const getMedida = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM medida ");
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

export const getProducto = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM producto ");
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/* consultas para traer facturas */

 export const getInvoices = async (req, res) => {
  try {
    const [row] = await pool.query(
      `SELECT servicio_cliente.identificacion, servicio_cliente.id_orden, factura.* FROM factura INNER JOIN servicio_cliente ON factura.id_servicio_cliente = servicio_cliente.id_servicio_cliente`
    );
    console.log(row);
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}; 

/* export const getInvoicesId = async (req, res) => {
  try {
    const [row] = await pool.query(
      `SELECT servicio_cliente.identificacion, servicio_cliente.id_orden, factura.* FROM factura INNER JOIN servicio_cliente ON factura.id_servicio_cliente = servicio_cliente.id_servicio_cliente WHERE id_factura = ?`,
      [req.params.id_factura]
    );
    console.log(row);
    res.send(row[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};*/

export const getServiceCliente = async (req, res) => {
  try {
    const {identificacion} = req.params
    const [row] = await pool.query(
      "SELECT cliente.identificacion, cliente.nombre, cliente.apellido, orden_servicio.nombre_serv, orden_servicio.precio, servicio_cliente.id_servicio_cliente FROM servicio_cliente INNER JOIN orden_servicio INNER JOIN cliente ON servicio_cliente.identificacion = cliente.identificacion AND servicio_cliente.id_orden = orden_servicio.id_orden WHERE cliente.identificacion = (?) ORDER BY id_servicio_cliente DESC",[identificacion]);
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};
export const getAllServicesClient = async (req, res) => {
  try {
    const [row] = await pool.query("select servicio_cliente.id_servicio_cliente, cliente.identificacion, cliente.nombre, cliente.apellido from servicio_cliente inner join cliente on servicio_cliente.identificacion = cliente.identificacion group by identificacion")
    res.send(row)
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}

export const getService = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM orden_servicio ");
    res.send(row);
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};
