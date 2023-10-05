/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableServiceOrder";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import { Btn_Delete, ButtonDelete } from "../tableClient/styledTableClient";
import TableServiceClient from "../tableServiceClient/tableServiceClient";
import { toast, ToastContainer } from 'react-toastify'

const TableServiceOrder = ({ deleteOrder, createServiceOrder, showServiceOrder}) => {
  const [search, setSearch] = useState("");
  //Variables para mostrar la orden de servicio
  const [ordenService, setOrden] = useState([]);
  // Variable para eliminar orden de servicio
  const [handleDeleteServiceOrder, setHandleDeleteServiceOrder] = useState(false);
  const [delServiceCustomer, setDelServiceCustomer] = useState(null);
  const [idServCliente , setIdServCliente ] = useState("");
  const [cedula , setCedula ] = useState("");
  // Variable de estado para abrir el modal de servicios del cliente
  const [handleShowServices, setHandleShowServices] = useState(false);
  const [id, setId] = useState("");
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

//Función de busqueda
const searching = (e) => {
  setSearch(e.target.value);
}; 
//Funcion para mostrar los clientes a los cuales tienen asignado un servicio
const getAllService = async ()=>{
  const services = await axios.get(`${apiBaseBack}/getServicesClient`)
  setOrden(services.data)
}
useEffect(()=>{
  getAllService()
},[setOrden])

//Metodo de filtrado tabla orden de servicio
let resultsServiceOrder = [];

if (!search) {
  resultsServiceOrder = ordenService || [];
} else {
  resultsServiceOrder = ordenService.filter(
    (dato) =>
      dato.identificacion &&
      dato.identificacion.toString().includes(search.toString())
  );
}
  
  // Función para eliminar orden de servicio.
  const deleteServiceCustomer = async () => {
    try {
      await axios.delete(`${apiBaseBack}/deleteservicecustomer/${delServiceCustomer.id_servicio_cliente}`);

      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.log(error);
    }
  };

  const handleAddOIdService = (item) => {
    setIdServCliente(item.id_servicio_cliente);
    setCedula(item.identificacion)
  };

  useEffect(() => {
    if (idServCliente) {
      postCreateFactura();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idServCliente]);

  const postCreateFactura = () => {
    try {
      axios.post(`${apiBaseBack}/postCreateFactura`,{
        identificacion : cedula,
        id_servicio_cliente: idServCliente
      })
      toast.success('Factura creada con éxito.')
    } catch (error) {
      console.log(error);
    }
  }

  const handleAlerteDeleteOrder = () => {
    toast.success('Orden eliminada con éxito.');
  };
  return (
    <>
      {/* Controladores */}

      <ContainControls>
        {/* Control "CANTIDAD DE REGISTROS" */}
        <ContainMaxData>
          <Label type="select">Cantidad de registros</Label>
        </ContainMaxData>

        {/* BUSCADOR */}
        <ContainSearch>
          <Label className="search">Buscar: </Label>
          <Input
            value={search}
            onChange={searching}
            type="text"
            title="Buscar cliente"
            placeholder="ID Cliente"
          ></Input>
        </ContainSearch>
      </ContainControls>

      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID Orden</Th>
              <Th>Tipo</Th>
              <Th>ID Cliente</Th>
              <Th>Nombres</Th>
              <Th>Apellidos</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resultsServiceOrder.map((item, i) => (
              <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td>{item.tipoDocumento}</Td>
                <Td>{item.identificacion.toLocaleString()}</Td>
                <Td className="name">{item.nombre}</Td>
                <Td className="last-name">{item.apellido}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons
                      onClick={() => {setHandleDeleteServiceOrder(!handleDeleteServiceOrder); setDelServiceCustomer(item)}}
                      title="Eliminar orden">
                      <i className={deleteOrder}></i>
                    </Buttons>

                    <Buttons
                      title="Crear factura"
                      onClick={()=>{
                        handleAddOIdService(item)
                      }}
                      >
                      <i className={createServiceOrder}></i>
                    </Buttons>

                    <Buttons
                    onClick={() => {
                      setHandleShowServices(!handleShowServices)
                      setId(item.identificacion)
                    }}
                    title="Listar servicios">
                    <i className={showServiceOrder}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
              ))}
          </Tbody>
        </Table>
      </ContainTable>


      <ToastContainer
      autoClose={1000}
      hideProgressBar={true}
      />

      {/* Eliminar orden de servicio */}
      <Modals
      status={handleDeleteServiceOrder}
      changeStatus={setHandleDeleteServiceOrder}
      titleModal={'Eliminar orden'}
      changeposition={'start'}
      showHeader={true}
      showCloseButton={true}
      >
        <ContainInfoModal>
          <Paragraph>¿Estás seguro de que quieres eliminar esta orden?</Paragraph>
          <ButtonDelete>
            <Btn_Delete onClick={() => {setHandleDeleteServiceOrder(!handleDeleteServiceOrder); handleAlerteDeleteOrder(); deleteServiceCustomer()}} >Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>

      {/* Modal para abrir la orden de servicio del cliente  */}
      <Modals
      status={handleShowServices}
      changeStatus={setHandleShowServices}
      showHeader={true}
      titleModal={"Servicios de cliente actual"}
      showCloseButton={true}
      changeposition={"start"}
      changewidth={"1100px"}
      >
        <ContainInfoModal>
          <TableServiceClient
          deleteService={"fa-solid fa-trash-can"}
          getcustomer = {id}
          />
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableServiceOrder;
