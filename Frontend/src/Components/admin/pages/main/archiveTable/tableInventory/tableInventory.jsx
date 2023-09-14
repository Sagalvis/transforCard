/* eslint-disable react/prop-types */
import { useState } from "react";
import { Btn_Create_Product, ButtonOptions, Buttons, ContainCheck, ContainControls, ContainMaxData, ContainSearch,ContainTable, Input, Label, Table,  Tbody, Td, Th, Thead, Tr} from "./styledTableInventory";

const TableInventory = ({ editProduct, deleteProduct}) => {
  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState('');

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
          <Input value={search} onChange={searching} type="text" title="Buscar cliente"></Input>
        </ContainSearch>
      </ContainControls>

      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Tipo</Th>
              <Th>Codigo</Th>
              <Th>Costo</Th>
              <Th>Precio/Venta</Th>
              <Th>Cant/Disponible</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
              <Tr>
                <Td>...en espera</Td>
                <Td>...en espera</Td>
                <Td>...en espera</Td>
                <Td>...en espera</Td>
                <Td>...en espera</Td>
                <Td>...en espera</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons title="Editar producto">
                      <i className={editProduct}></i>
                    </Buttons>
                    <Buttons onClick={() => deleteVehicle(item)} title="Eliminar producto">
                      <i className={deleteProduct}></i>
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

export default TableInventory;
