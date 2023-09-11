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
} from "./styledTableStaff";
import axios from "axios";

const TableStaff = ({
  gender,
  editUser,
  deleteUser,
}) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3005/employees");
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEmployees();
  }, [setEmployees]);
  return (
    <>
      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID_Empleado</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Sexo</Th>
              <Th>Edad</Th>
              <Th>Celular</Th>
              <Th>Dirección</Th>
              <Th>Email</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((item, i) => (
              <Tr key={i}>
              <Td>{item.id_empleado}</Td>
              <Td>{item.nombres}</Td>
              <Td>{item.apellidos}</Td>
              <Td>{gender}</Td>
              <Td>{item.edad}</Td>
              <Td>{item.telefono}</Td>
              <Td>{item.direccion}</Td>
              <Td>{item.correo}</Td>
              <Td>
                <ButtonOptions>
                  <Buttons title="Editar cliente">
                    <i className={editUser}></i>
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

export default TableStaff;
