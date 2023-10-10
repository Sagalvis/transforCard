/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BtnDelete, ButtonDelete, ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainTable, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableServiceClient";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import { toast, ToastContainer } from "react-toastify";

const TableServiceClient = ({getcustomer, deleteService}) => {
  //Variables de estados para almacenar las ordenes de servicio del cliente
  const [mapeo, setMapeo] = useState([])
  const [handleDeleteCustomerService, setHandleDeleteCustomerService] = useState(false);
  const [delServiderOrder, setDelServiceOrder] = useState(null);


  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const token = localStorage.getItem("user")
  const limpio = token.replace(/"/g,"")

  //Funcion para traer todos los servicios del cliente
  const getOrdenService = async ()=> {
    const res = await axios.get(`${apiBaseBack}/getServiceCliente/${getcustomer}`);
    setMapeo(res.data)
  }
  useEffect(() => {
    getOrdenService()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setMapeo])

  const deleteServiceOrder = async() => {
    try {
      const result = await axios.delete(`${apiBaseBack}/deleteserviceorder/${delServiderOrder.id_servicio_cliente}`,{
        headers: {
          Authorization: `${limpio}`
        }
      })
      console.log(result);
      setMapeo(mapeo.filter((v) => v.id_servicio_cliente !== delServiderOrder.id_servicio_cliente));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteService = () => {
    toast.success('Servicio eliminado con éxito.');
  };

  return (
    <>
      {/* Controladores */}

      <ContainControls>
        {/* Control "CANTIDAD DE REGISTROS" */}
        <ContainMaxData>
          <Label type="select">Cantidad de registros</Label>
        </ContainMaxData>
      </ContainControls>

      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID Servicio</Th>
              <Th>Tipo de servicio</Th>
              <Th>Total a pagar</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mapeo.map((item, i) => (
              <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td>{item.nombre_serv}</Td>
                <Td>$ {item.precio.toLocaleString()}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons
                    title="Eliminar servicio"
                    onClick={() => {setHandleDeleteCustomerService(!handleDeleteCustomerService); setDelServiceOrder(item)}}
                    >
                      <i className={deleteService}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
              ))}
          </Tbody>
        </Table>
      </ContainTable>

      <ToastContainer 
      autoClose="1000" 
      hideProgressBar={false}
      theme="dark"
      pauseOnHover/>

      {/* Modal para eliminar un servicio de cliente */}
      <Modals
      status={handleDeleteCustomerService}
      changeStatus={setHandleDeleteCustomerService}
      changeposition={'start'}
      showHeader={true}
      showCloseButton={true}
      titleModal={'Eliminar servicio'}
      >
        <ContainInfoModal>
          <Paragraph>¿Estás seguro de que quieres eliminar este servicio?</Paragraph>
          <ButtonDelete>
            <BtnDelete onClick={() => {setHandleDeleteCustomerService(!handleDeleteCustomerService); handleDeleteService(); deleteServiceOrder()}}>Eliminar</BtnDelete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableServiceClient;
