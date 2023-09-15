/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  /* Btn_Create_Product, */ ButtonOptions,
  Buttons,
  /* ContainCheck, */ ContainControls,
  ContainMaxData,
  ContainSearch,
  ContainTable,
  Input,
  Label,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./styledTableInventory";
import axios from "axios";

const TableInventory = ({ editProduct, deleteProduct }) => {
  // Variable de estado para traer toda la tabla inventario
  const [invetario, setInventario] = useState([]);
  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState("");

  const getInventario = async () => {
    try {
      const res = await axios.get("http://localhost:3005/inventario");
      setInventario(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //Función de busqueda
  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getInventario();
  }, [setInventario]);
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
              <Th>Id_producto</Th>
              <Th>Tipo producto</Th>
              <Th>nombre</Th>
              <Th>Costo</Th>
              <Th>Cantidad comprada</Th>
              <Th>Precio unitario</Th>
              <Th>Cantidad en stock</Th>
              <Th>Cantidad vendida</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {invetario.map((item, i) => (
              <Tr key={i}>
                <Td>{item.id_producto}</Td>
                <Td>{item.tipo_producto}</Td>
                <Td>{item.nombre}</Td>
                <Td>{item.costo}</Td>
                <Td>{item.cantidad_comprada}</Td>
                <Td>{item.precio_unitario}</Td>
                <Td>{item.cantidad_en_stock}</Td>
                <Td>{item.cantidad_vendida}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons title="Editar producto">
                      <i className={editProduct}></i>
                    </Buttons>
                    <Buttons title="Eliminar producto">
                      <i className={deleteProduct}></i>
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

export default TableInventory;
