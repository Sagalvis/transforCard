import axios from "axios";
const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
/* Inicio Funcion para contar las diferentes tablas  */
export const getCountCustomer = async (setCountCustomer) => {
  try {
    const res = await axios.get(`${apiBaseBack}/count/clientes`);
    setCountCustomer(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getVehicle = async (setCountVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/count/vehiculos`);
    setCountVehicle(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getEmployees = async (setCountEmployees) => {
  try {
    const res = await axios.get(`${apiBaseBack}/count/empleados`);
    setCountEmployees(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (setCountProduct) => {
  try {
    const res = await axios.get(`${apiBaseBack}/count/productos`);
    setCountProduct(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getService = async (setCountService) => {
  try {
    const res = await axios.get(`${apiBaseBack}/count/servicios`);
    setCountService(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getServiceOrder = async (setCountServiceOrder) => {
  try {
    const res = await axios.get(
      `${apiBaseBack}/count/ordenesdeservicio`
    );
    setCountServiceOrder(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getInvoice = async (setCountInvoice) => {
  try {
    const res = await axios.get(`${apiBaseBack}/count/factura`);
    setCountInvoice(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getCountOrderCustomer = async (setCountOrderCustomer) => {
  try {
    const res = await axios.get(`${apiBaseBack}/getServicesClient`);
    setCountOrderCustomer(res.data);
  } catch (error) {
    console.log(error);
  }
};
/* Final Funcion para contar las diferentes tablas  */

/* Inicio funcion  que traer clientes mes a mes en cada una */
export const getJanuaryClient = async (setJanuaryClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/january/client`);
    setJanuaryClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de enero:", error);
  }
};

export const getFebruaryClient = async (setFebruaryClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/february/client`);
    setFebruaryClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
};

export const getMarchClient = async (setMarchClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/march/client`);
    setMarchClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de marzo:", error);
  }
};

export const getAprilClient = async (setAprilClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/april/client`);
    setAprilClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de abril:", error);
  }
};
export const getMay = async (setMayClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/may/client`);
    setMayClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de mayo:", error);
  }
};

export const getMayClient = async (setMayClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/may/client`);
    setMayClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
};
export const getJuneClient = async (setJuneClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/june/client`);
    setJuneClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de junio:", error);
  }
};
export const getJulyClient = async (setJulyClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/july/client`);
    setJulyClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de julio:", error);
  }
};
export const getAugustClient = async (setAugustClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/august/client`);
    setAugustClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de agosto:", error);
  }
};
export const getSeptemberClient = async (
  setSeptemberClientsetOctoberClient
) => {
  try {
    const res = await axios.get(`${apiBaseBack}/september/client`);
    setSeptemberClientsetOctoberClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de septiembre:", error);
  }
};
export const getOctoberClient = async (setOctoberClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/october/client`);
    setOctoberClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de octubre:", error);
  }
};
export const getNovemberClient = async (setNovemberClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/november/client`);
    setNovemberClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de noviembre:", error);
  }
};
export const getDecemberClient = async (setDicemberClient) => {
  try {
    const res = await axios.get(`${apiBaseBack}/december/client`);
    setDicemberClient(res.data);
  } catch (error) {
    console.error("Error al obtener datos de diciembre:", error);
  }
};
/* Final funcion  que traer clientes mes a mes en cada una */

/* Inicio funcion  que traer vehiculos mes a mes en cada una */
export const getJanuaryVehicle = async (setJanuaryVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/january/vehicle`);
    setJanuaryVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de enero:", error);
  }
};

export const getFebruaryVehicle = async (setFebruaryVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/february/vehicle`);
    setFebruaryVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de febrero:", error);
  }
};

export const getMarchVehicle = async (setMarchVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/march/vehicle`);
    setMarchVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de marzo:", error);
  }
};

export const getAprilVehicle = async (setAprilVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/april/vehicle`);
    setAprilVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de abril:", error);
  }
};

export const getMayVehicle = async (setMayVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/may/vehicle`);
    setMayVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de mayo:", error);
  }
};

export const getJuneVehicle = async (setJuneVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/june/vehicle`);
    setJuneVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de junio:", error);
  }
};

export const getJulyVehicle = async (setJulyVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/july/vehicle`);
    setJulyVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de julio:", error);
  }
};

export const getAugustVehicle = async (setAugustVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/august/vehicle`);
    setAugustVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de agosto:", error);
  }
};

export const getSeptemberVehicle = async (setSeptemberVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/september/vehicle`);
    setSeptemberVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de septiembre:", error);
  }
};

export const getOctoberVehicle = async (setOctoberVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/october/vehicle`);
    setOctoberVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de octubre:", error);
  }
};

export const getNovemberVehicle = async (setNovemberVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/november/vehicle`);
    setNovemberVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de noviembre:", error);
  }
};

export const getDecemberVehicle = async (setDecemberVehicle) => {
  try {
    const res = await axios.get(`${apiBaseBack}/december/vehicle`);
    setDecemberVehicle(res.data);
  } catch (error) {
    console.error("Error al obtener datos de diciembre:", error);
  }
};

/* Final funcion  que traer vehiculos mes a mes en cada una */
