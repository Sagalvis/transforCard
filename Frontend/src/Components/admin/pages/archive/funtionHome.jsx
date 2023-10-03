import axios from "axios";

export const getCountCustomer = async (setCountCustomer) => {
  try {
    const res = await axios.get("http://localhost:3005/count/clientes");
    setCountCustomer(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getVehicle = async (setCountVehicle) => {
  try {
    const res = await axios.get("http://localhost:3005/count/vehiculos");
    setCountVehicle(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getEmployees = async (setCountEmployees) => {
  try {
    const res = await axios.get("http://localhost:3005/count/empleados");
    setCountEmployees(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (setCountProduct) => {
  try {
    const res = await axios.get("http://localhost:3005/count/productos");
    setCountProduct(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getService = async (setCountService) => {
  try {
    const res = await axios.get("http://localhost:3005/count/servicios");
    setCountService(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getServiceOrder = async (setCountServiceOrder) => {
  try {
    const res = await axios.get(
      "http://localhost:3005/count/ordenesdeservicio"
    );
    setCountServiceOrder(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getInvoice = async (setCountInvoice) => {
  try {
    const res = await axios.get("http://localhost:3005/count/factura");
    setCountInvoice(res.data);
  } catch (error) {
    console.log(error);
  }
};
/* Inicio funcion  que traer clientes mes a mes en cada una */
export const getJanuary = async (setJanuaryClient) => {
  try {
    const res = await axios.get("http://localhost:3005/january/client");
    setJanuaryClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de enero:", error);
  }
};

export const getFebruary = async (setFebruaryClient) => {
  try {
    const res = await axios.get("http://localhost:3005/february/client");
    setFebruaryClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
};

export const getMarch = async (setMarchClient) => {
  try {
    const res = await axios.get("http://localhost:3005/march/client");
    setMarchClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
};

export const getApril = async (setAprilClient) => {
  try {
    const res = await axios.get("http://localhost:3005/april/client");
    setAprilClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
};

export const getMay = async (setMayClient) => {
  try {
    const res = await axios.get("http://localhost:3005/may/client")
    setMayClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
}
export const getJune = async (setJuneClient) => {
  try {
    const res = await axios.get("http://localhost:3005/june/client")
    setJuneClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
}
export const getJuly = async (setJulyClient) => {
  try {
    const res = await axios.get("http://localhost:3005/july/client")
    setJulyClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
}
export const getAugust = async (setAugustClient) => {
  try {
    const res = await axios.get("http://localhost:3005/august/client")
    setAugustClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
}
export const getSeptember = async (setSeptemberClientsetOctoberClient) => {
  try {
    const res = await axios.get("http://localhost:3005/september/client")
    setSeptemberClientsetOctoberClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
}
export const getOctober = async (setOctoberClient) => {
  try {
    const res = await axios.get("http://localhost:3005/october/client")
    setOctoberClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
}
export const getNovember = async (setNovemberClient) => {
  try {
    const res = await axios.get("http://localhost:3005/november/client")
    setNovemberClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
}
export const getDicember = async (setDicemberClient) => {
  try {
    const res = await axios.get("http://localhost:3005/dicember/client")
    setDicemberClient(res.data)
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
}
