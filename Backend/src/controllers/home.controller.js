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
/* Final de las consulta para contar el contenido de las diferentes tabalas  */

/* Inicio Consulta que traer clientes mes a mes en cada una */

export const JanuaryClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-01-01' AND '2023-01-31'");
    res.send(row)
  } catch (error) {
    console.log(error)
  }
};

export const FebruaryCLient  = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-02-01' AND '2023-02-28'")
    res.send(row)
  } catch (error) {
    console.log(error)
  }
};

export const MarchClient   = async (req, res) => {
  try {
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-03-01' AND '2023-03-31'");
    res.send(row);
  } catch (error) {
    console.log(error)
  }
}
export const AprilClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-04-01' AND '2023-04-30'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
export const MayClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-05-01' AND '2023-05-31'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
export const JuneClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-06-01' AND '2023-06-30'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
export const JulyClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-07-01' AND '2023-07-31'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
export const AugustClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-08-01' AND '2023-08-31'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
export const SeptemberClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-09-01' AND '2023-09-30'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
export const OctoberClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-10-01' AND '2023-10-31'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
export const NovemberClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-11-01' AND '2023-11-30'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
export const DicemberClient    = async (req, res) =>{
  try{
    const [row] = pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-12-01' AND '2023-12-31'");
    res.send(row);
  }catch (error) {
    console.log(error)
  }
}
/* Final Consulta que traer clientes mes a mes en cada una */

export const DateVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT month(fecha_creacion) AS 'Mes', count(*) as 'total' FROM vehiculo GROUP BY month(fecha_creacion)")
    res.send(row)
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({
      message: "Error en el servidor",
    });
  }
}; 

