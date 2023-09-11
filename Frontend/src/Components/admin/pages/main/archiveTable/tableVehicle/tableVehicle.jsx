import { ButtonOptions, Buttons, ContainTable, Table, Tbody, Td, Th, Thead, Tr } from "./styledTableVehicle";


const TableVehicle = ({id_vehicle, vehicle_type, brand, model, color, year, patent, vin, editUser, deleteUser}) => {
  return (
    <>
    {/* Contenedor de tabla */}

    <ContainTable>
          <Table>
            <Thead>
              <Tr>
                <Th>ID_Vehículo</Th>
                <Th>Tipo</Th>
                <Th>Marca</Th>
                <Th>Modelo</Th>
                <Th>Año</Th>
                <Th>Color</Th>
                <Th>Placa</Th>
                <Th>VIN</Th>
                <Th>Opciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{id_vehicle}</Td>
                <Td>{vehicle_type}</Td>
                <Td>{brand}</Td>
                <Td>{model}</Td>
                <Td>{year}</Td>
                <Td>{color}</Td>
                <Td>{patent}</Td>
                <Td>{vin}</Td>
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

export default TableVehicle;