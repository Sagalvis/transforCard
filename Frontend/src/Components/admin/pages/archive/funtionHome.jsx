import axios from "axios"

  export const getCountCustomer = async(setCountCustomer) => {
    try {
      const res = await axios.get("http://localhost:3005/countclientes")
      setCountCustomer(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  export const getVehicle = async (setCountVehicle) => {
    try {
      const res = await axios.get("http://localhost:3005/countvehiculos")
      setCountVehicle(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  export const getEmployees = async (setCountEmployees) => {
    try {
      const res = await axios.get("http://localhost:3005/countempleados")
      setCountEmployees(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  export const getProduct = async (setCountProduct) => {
    try {
      const res = await axios.get("http://localhost:3005/countproductos")
      setCountProduct(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  export const getService = async (setCountService) => {
    try {
      const res = await axios.get("http://localhost:3005/countservicios")
      setCountService(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  export const getServiceOrder = async (setCountServiceOrder) => {
    try {
      const res = await axios.get("http://localhost:3005/countordenesdeservicio")
      setCountServiceOrder(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };