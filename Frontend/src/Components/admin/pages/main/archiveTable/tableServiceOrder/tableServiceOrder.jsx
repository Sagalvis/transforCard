/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableServiceOrder";
import axios from "axios";

const TableServiceOrder = ({ editOrder, deleteOrder, createServiceOrder}) => {
  const [search, setSearch] = useState("");
  //Variables para mostrar la orden de servicio
  const [ordenService, setOrden] = useState([]);

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

  const getOrdenService = async ()=>{
    const res = await axios.get(`http://localhost:3005/getServiceCliente`)
    setOrden(res.data)
  }
  useEffect(() =>{
    getOrdenService()
  },[setOrden])

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
              <Th>ID_Cliente</Th>
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
                      title="Eliminar orden">
                      <i className={deleteOrder}></i>
                    </Buttons>

                    <Buttons
                      title="Crear factura">
                      <i className={createServiceOrder}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
              ))}
          </Tbody>
        </Table>
      </ContainTable>
    </>
  );
};

export default TableServiceOrder;
