/* eslint-disable react/prop-types */
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableServiceOrder";


const TableServiceOrder = ({ editOrder, deleteOrder, createServiceOrder}) => {
  //Función de busqueda
  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
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
              <Tr>
                <Td>...</Td>
                <Td>...</Td>
                <Td>...</Td>
                <Td>...</Td>
                <Td>...</Td>
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
          </Tbody>
        </Table>
      </ContainTable>
    </>
  );
};

export default TableServiceOrder;
