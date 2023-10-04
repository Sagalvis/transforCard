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

export const JanClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-01-01' AND '2023-01-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en enero de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const FebClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-02-01' AND '2023-02-28'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en febrero de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const MarClient = async(req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-03-01' AND '2023-03-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Marzo de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const AprClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-04-01' AND '2023-04-30'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Abril de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const MayClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-05-01' AND '2023-05-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Mayo de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const JunClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-06-01' AND '2023-06-30'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Junio de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const JulClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-07-01' AND '2023-07-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Julio de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const AugClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-08-01' AND '2023-08-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Agosto de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const SepClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-09-01' AND '2023-09-30'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Septiembre de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const OctClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-10-01' AND '2023-10-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Octubre de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const NovClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-11-01' AND '2023-11-30'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Noviembre de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const DecClient = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM cliente WHERE fecha_creacion BETWEEN '2023-12-01' AND '2023-12-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Diciembre de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
} 
/* Final Consulta que traer clientes mes a mes en cada una */


/* Inicio Consulta que traer vehiculos mes a mes en cada una */
export const JanVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-01-01' AND '2023-01-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en enero de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const FebVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-02-01' AND '2023-02-28'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en febrero de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const MarVehicle = async(req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-03-01' AND '2023-03-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Marzo de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const AprVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-04-01' AND '2023-04-30'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Abril de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const MayVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-05-01' AND '2023-05-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Mayo de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const JunVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-06-01' AND '2023-06-30'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Junio de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const JulVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-07-01' AND '2023-07-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Julio de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const AugVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-08-01' AND '2023-08-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Agosto de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const SepVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-09-01' AND '2023-09-30'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Septiembre de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const OctVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-10-01' AND '2023-10-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Octubre de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const NovVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-11-01' AND '2023-11-30'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Noviembre de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const DecVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM vehiculo WHERE fecha_creacion BETWEEN '2023-12-01' AND '2023-12-31'");
    if (!row) {
      res.status(404).json({ message: 'No se encontraron registros en Diciembre de 2023' });
    } else {
      res.status(200).json(row);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}
/* Final Consulta que traer vehiculos mes a mes en cada una */

