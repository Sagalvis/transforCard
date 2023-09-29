/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ContainControls, ContainMaxData, ContainTable, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableServiceClient";
import axios from "axios";

const TableServiceClient = ({getcustomer}) => {
  //Variables de estados para almacenar las ordenes de servicio del cliente
  const [mapeo, setMapeo] = useState([])
  //Funcion para traer todos los servicios del cliente
  const getOrdenService = async ()=> {
    const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
    const res = await axios.get(`${apiBaseBack}/getServiceCliente/${getcustomer}`);
    setMapeo(res.data)
  }
  useEffect(() => {
    getOrdenService()
  },[setMapeo])

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
              <Th>ID Cliente</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Tipo de servicio</Th>
              <Th>Total a pagar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mapeo.map((item, i) => (
              <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td>{item.identificacion}</Td>
                <Td className="name">{item.nombre}</Td>
                <Td className="last-name">{item.apellido}</Td>
                <Td>{item.nombre_serv}</Td>
                <Td>{item.precio}</Td>
                <Td>
                </Td>
              </Tr>
              ))}
          </Tbody>
        </Table>
      </ContainTable>
    </>
  );
};

export default TableServiceClient;
