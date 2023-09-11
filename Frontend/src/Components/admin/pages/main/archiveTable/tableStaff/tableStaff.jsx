import { ButtonOptions, Buttons, ContainTable, Table, Tbody, Td, Th, Thead, Tr } from "./styledTableStaff";


const TableStaff = ({id_employee, name, lastname, gender, age, phone, address, email, editUser, deleteUser}) => {
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
              <Tr>
                <Td>{id_employee}</Td>
                <Td>{name}</Td>
                <Td>{lastname}</Td>
                <Td>{gender}</Td>
                <Td>{age}</Td>
                <Td>{phone}</Td>
                <Td>{address}</Td>
                <Td>{email}</Td>
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
            </Tbody>
          </Table>
        </ContainTable>
    </>
  );
}

export default TableStaff;