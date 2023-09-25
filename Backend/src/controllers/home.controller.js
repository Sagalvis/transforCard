import {pool} from "../dbconfig.js"


/* Inicio de las consulta para contar el contenido de las diferentes tabalas  */
export const CounterCustomer = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT (*)AS 'Numero_clientes' FROM cliente")
    res.send(row)
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

export const CounterVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT (*)AS 'Numero_vehiculos' FROM vehiculo");
    res.send(row)
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

export const CounterEmployees = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT (*)AS 'Numero_empleados' FROM empleado");
    res.send(row)
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

export const CounterProduct = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT (*)AS 'Numero_productos' FROM inventario");
    res.send(row)
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}; 

export const CounterService = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT (*)AS 'Numero_servicios' FROM orden_servicio");
    res.send(row)
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

export const CounterServiceOrder = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT (*)AS 'Numero_ordenes_servicio' FROM servicio_cliente");
    res.send(row)
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}; 
export const CounterInvoice = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT (*)AS 'Numero_factura' FROM factura");
    res.send(row)
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}; 