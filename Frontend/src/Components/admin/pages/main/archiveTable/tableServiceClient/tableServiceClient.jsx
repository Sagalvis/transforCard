/* eslint-disable react/prop-types */
import { ContainControls, ContainMaxData, ContainTable, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableServiceClient";

const TableServiceClient = () => {
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
