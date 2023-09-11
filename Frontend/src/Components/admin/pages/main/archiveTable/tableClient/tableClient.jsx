/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  ButtonOptions,
  Buttons,
  ContainTable,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./styledTableClient";
import axios from "axios";

const TableClient = ({
  editUser,
  createVehicle,
  deleteUser,
}) => {
  /* Consulta para traer la tabla clientes */
  const [customer, setCustomer] = useState([]);

  const getCustomer = async () => {
    try {
      const res = await axios.get("http://localhost:3005/customer");
      setCustomer(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomer();
  }, [setCustomer]);

  return (
    <>
      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID_Cliente</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Email</Th>
              <Th>Celular</Th>
              <Th>Dirección</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customer.map((item, i) => (
              <Tr key={i}>
                <Td>{item.identificacion}</Td>
                <Td>{item.nombre}</Td>
                <Td>{item.apellido}</Td>
                <Td>{item.correo}</Td>
                <Td>{item.direccion}</Td>
                <Td>{item.tel}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons title="Editar cliente">
                      <i className={editUser}></i>
                    </Buttons>
                    <Buttons title="Vehículos">
                      <i className={createVehicle}></i>
                    </Buttons>
                    <Buttons title="Eliminar cliente">
                      <i className={deleteUser}></i>
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

export default TableClient;
