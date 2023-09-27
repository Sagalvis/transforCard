import axios from "axios"

  export const getCountCustomer = async(setCountCustomer) => {
    try {
      const res = await axios.get("http://localhost:3005/count/clientes")
      setCountCustomer(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  export const getVehicle = async (setCountVehicle) => {
    try {
      const res = await axios.get("http://localhost:3005/count/vehiculos")
      setCountVehicle(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  export const getEmployees = async (setCountEmployees) => {
    try {
      const res = await axios.get("http://localhost:3005/count/empleados")
      setCountEmployees(res.data)
      
    } catch (error) {
      console.log(error)
    }
  };

  export const getProduct = async (setCountProduct) => {
    try {
      const res = await axios.get("http://localhost:3005/count/productos")
      setCountProduct(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  export const getService = async (setCountService) => {
    try {
      const res = await axios.get("http://localhost:3005/count/servicios")
      setCountService(res.data)
      
    } catch (error) {
      console.log(error)
    }
  };

  export const getServiceOrder = async (setCountServiceOrder) => {
    try {
      const res = await axios.get("http://localhost:3005/count/ordenesdeservicio")
      setCountServiceOrder(res.data)
      
    } catch (error) {
      console.log(error)
    }
  };

  export const getInvoice = async (setCountInvoice) => {
    try {
      const res = await axios.get("http://localhost:3005/count/factura")
      setCountInvoice(res.data)
      
    } catch (error) {
      console.log(error)
    }
  };