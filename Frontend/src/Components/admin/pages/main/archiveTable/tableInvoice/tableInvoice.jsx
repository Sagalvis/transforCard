/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr } from "./styledTableInvoice";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal } from "../../../header/styledHeader";

const TableInvoice = ({ editProduct, deleteProduct }) => {
  // Variable de estado para traer toda la tabla inventario
  const [invetario, setInventario] = useState([]);
  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState("");
  const [handleFormInventory, setHandleFormInventory] = useState(false);

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
                    <Buttons onClick={() => setHandleFormInventory(!handleFormInventory)} title="Editar producto">
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

      <Modals
        status={handleFormInventory}
        changeStatus={setHandleFormInventory}
        titleModal={"Editar item"}
        changePosition={"start"}
        showHeader={true}
        showCloseButton={true}>
        <ContainInfoModal>
          <h5>aqui va el formulario de edit.</h5>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableInvoice;
