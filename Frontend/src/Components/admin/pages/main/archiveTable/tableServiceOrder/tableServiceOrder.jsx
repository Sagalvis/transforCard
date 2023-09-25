/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableServiceOrder";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, P } from "../../../header/styledHeader";
import { Btn_Delete, ButtonDelete } from "../tableClient/styledTableClient";

const TableServiceOrder = ({ editOrder, deleteOrder, createServiceOrder}) => {
  const [search, setSearch] = useState("");
  //Variables para mostrar la orden de servicio
  const [ordenService, setOrden] = useState([]);
  // Variable para eliminar orden de servicio
  const [handleDeleteServiceOrder, setHandleDeleteServiceOrder] = useState(false);
  const [delServiceOrder, setDelServiceOrder] = useState(null);
  const [idServCliente , setIdServCliente ] = useState("");
  const [cedula , setCedula ] = useState("");


//Función de busqueda
const searching = (e) => {
  setSearch(e.target.value);
  console.log(e.target.value);
}; 

//Metodo de filtrado tabla cliente
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

  const getOrdenService = async ()=> {
    const res = await axios.get(`http://localhost:3005/getServiceCliente`)
    setOrden(res.data)
  }
  useEffect(() => {
    getOrdenService()
  },[setOrden])

  // Función para eliminar orden de servicio.
  const deleteServiceOrder = async () => {
    try {
      const result = await axios.delete(`http://localhost:3005/deleteserviceorder/${delServiceOrder.id_servicio_cliente}`);
      console.log(result);
      window.location.reload();
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
      axios.post("http://localhost:3005/postCreateFactura",{
        identificacion : cedula,
        id_servicio_cliente: idServCliente
      })
      console.log("factura creada con exito")
    } catch (error) {
      console.log(error);
    }
  }
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
          ></Input>
        </ContainSearch>
      </ContainControls>

      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID Servicio cliente</Th>
              <Th>ID Cliente</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Tipo de servicio</Th>
              <Th>Total a pagar</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resultsServiceOrder.map((item, i) => (
              <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td>{item.identificacion}</Td>
                <Td className="name">{item.nombre}</Td>
                <Td className="last-name">{item.apellido}</Td>
                <Td>{item.nombre_serv}</Td>
                <Td>{item.precio}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons
                      title="Editar orden">
                      <i className={editOrder}></i>
                    </Buttons>

                    <Buttons
                      onClick={() => {setHandleDeleteServiceOrder(!handleDeleteServiceOrder); setDelServiceOrder(item)}}
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
                  </ButtonOptions>
                </Td>
              </Tr>
              ))}
          </Tbody>
        </Table>
      </ContainTable>

      {/* Eliminar orden de servicio */}
      <Modals
      status={handleDeleteServiceOrder}
      changeStatus={setHandleDeleteServiceOrder}
      titleModal={'Eliminar orden'}
      changePosition={'start'}
      showHeader={true}
      showCloseButton={true}
      >
        <ContainInfoModal>
          <P>¿Estas seguro de querer eliminar esta orden?</P>
          <ButtonDelete>
            <Btn_Delete onClick={() => {setHandleDeleteServiceOrder(!handleDeleteServiceOrder); deleteServiceOrder()}} >Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableServiceOrder;
