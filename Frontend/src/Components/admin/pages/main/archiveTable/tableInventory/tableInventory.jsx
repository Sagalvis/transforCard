/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import {
  Button,
  ButtonInventory,
  ButtonOptions,
  Buttons,
  ContainControls,
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
import Modals from "../../../archive/modals";
import { ContainInfoModal } from "../../../header/styledHeader";

const TableInventory = ({ editProduct, deleteProduct }) => {
  const [invetario, setInventario] = useState([]);
  const [search, setSearch] = useState("");
  const [handleFormInventory, setHandleFormInventory] = useState(false);
  const [showProduct, setShowProduct] = useState(true);
/*   const [buttonInventory, setButtonInventory] = useState(0); */

  const getInventario = async () => {
    try {
      const res = await axios.get("http://localhost:3005/inventario");
      setInventario(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //Metodo de filtrado tabla cliente
  let resultsInventory = [];

  if (!search) {
    resultsInventory = invetario || [];
  } else {
    resultsInventory = invetario.filter(
      (dato) =>
        dato.identificacion &&
        dato.identificacion.toString().includes(search.toString())
    );
  }

  useEffect(() => {
    getInventario();
  }, []);

  const handleButtonClick = (value) => {
    if (value === "producto") {
      setShowProduct(true);
    } else if (value === "servicio") {
      setShowProduct(false);
    }
  };

  return (
    <>
    <ButtonInventory>

      <Button onClick={() => handleButtonClick("servicio")}>Servicio</Button>
      <Button onClick={() => handleButtonClick("producto")}>Producto</Button>
    </ButtonInventory>

      {showProduct && (
        <>
          <ContainControls>
            <ContainMaxData>
              <Label type="select">Cantidad de registros</Label>
            </ContainMaxData>
            <ContainSearch>
              <Label className="search">Buscar: </Label>
              <Input
                value={search}
                onChange={searching}
                type="text"
                title="Buscar cliente"
              />
            </ContainSearch>
          </ContainControls>
          <ContainTable>
            <Table>
              <Thead>
                <Tr>
                  <Th>Id_inventario</Th>
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
                {resultsInventory.map((item, i) => (
                  <Tr key={i}>
                    <Td>{item.id_inventario}</Td>
                    <Td>{item.tipo_producto}</Td>
                    <Td>{item.nombre}</Td>
                    <Td>{item.costo}</Td>
                    <Td>{item.cantidad_comprada}</Td>
                    <Td>{item.precio_unitario}</Td>
                    <Td>{item.cantidad_en_stock}</Td>
                    <Td>{item.cantidad_vendida}</Td>
                    <Td>
                      <ButtonOptions>
                        <Buttons
                          onClick={() =>
                            setHandleFormInventory(!handleFormInventory)
                          }
                          title="Editar producto"
                        >
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
            showCloseButton={true}
          >
            <ContainInfoModal>
              <h5>aqui va el formulario de edit.</h5>
            </ContainInfoModal>
          </Modals>
        </>
      )}

      {!showProduct && (
        <>
        <ContainControls>
          <ContainMaxData>
            <Label type="select">Cantidad de registros</Label>
          </ContainMaxData>
          <ContainSearch>
            <Label className="search">Buscar: </Label>
            <Input
              value={search}
              onChange={searching}
              type="text"
              title="Buscar cliente"
            />
          </ContainSearch>
        </ContainControls>
        <ContainTable>
          <Table>
            <Thead>
              <Tr>
                <Th>Id_orden</Th>
                <Th>Nombre del servicio</Th>
                <Th>Precio</Th>
                <Th>Tiempo estimado</Th>
                <Th>Opciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {invetario.map((item, i) => (
                <Tr key={i}>
                  <Td>{item.id_inventario}</Td>
                  <Td>{item.tipo_producto}</Td>
                  <Td>{item.nombre}</Td>
                  <Td>{item.costo}</Td>

                  <Td>
                    <ButtonOptions>
                      <Buttons
                        onClick={() =>
                          setHandleFormInventory(!handleFormInventory)
                        }
                        title="Editar producto"
                      >
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
          showCloseButton={true}
        >
          <ContainInfoModal>
            <h5>aqui va el formulario de edit.</h5>
          </ContainInfoModal>
        </Modals>
      </>
      )}
    </>
  );
};

export default TableInventory;