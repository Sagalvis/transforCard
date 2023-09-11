import { ButtonOptions, Buttons, ContainTable, Table, Tbody, Td, Th, Thead, Tr } from "./styledTableClient";


const TableClient = ({id_employee, name, email, phone, address, editUser, createVehicle, deleteUser}) => {
  return (
    <>
    {/* Contenedor de tabla */}

    <ContainTable>
          <Table>
            <Thead>
              <Tr>
                <Th>ID_Cliente</Th>
                <Th>Nombre</Th>
                <Th>Email</Th>
                <Th>Celular</Th>
                <Th>Dirección</Th>
                <Th>Opciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{id_employee}</Td>
                <Td>{name}</Td>
                <Td>{email}</Td>
                <Td>{phone}</Td>
                <Td>{address}</Td>
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
            </Tbody>
          </Table>
        </ContainTable>
    </>
  );
}

export default TableClient;