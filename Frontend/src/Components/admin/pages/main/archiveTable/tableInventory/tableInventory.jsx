/* eslint-disable react-hooks/exhaustive-deps */
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
import { ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import { Btn_Delete, ButtonDelete } from "../tableClient/styledTableClient";

const TableInventory = ({ editProduct, deleteProduct }) => {
  const [invetario, setInventario] = useState([]);
  const [ordenService, setOrdenService] = useState([]);
  const [search, setSearch] = useState("");
  const [handleFormInventory, setHandleFormInventory] = useState(false);
  const [showProduct, setShowProduct] = useState(true);
  // Variable de estado de eliminar producto
  const [handleDeleteProduct, setHandleDeleteProduct] = useState(false);
  const [delProduct, setDelProduct] = useState(null);
  // Variable de estado de eliminar servicio
  const [handleDeleteService, setHandleDeleteService] = useState(false);
  const [delService, setDelService] = useState(null);
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

  const getOrdenService = async () => {
    try {
      const res = await axios.get(`${apiBaseBack}/getService`);
      setOrdenService(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getInventario = async () => {
    try {
      const res = await axios.get(`${apiBaseBack}/inventario`);
      setInventario(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };


  //Metodo de filtrado tabla producto
  let resultsInventory = [];

  if (!search) {
    resultsInventory = invetario || [];
  } else {
    resultsInventory = invetario.filter(
      (dato) =>
        dato.nombre &&
        dato.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }

  //Metodo de filtrado tabla servicio
  let resultsService = [];

    if (!search) {
      resultsService = ordenService || [];
    } else {
      resultsService = ordenService.filter(
        (dato) =>
          dato.nombre_serv &&
          dato.nombre_serv.toLowerCase().includes(search.toLowerCase())
      );
    }
  useEffect(() => {
    getInventario();
    getOrdenService();
  }, []);

  const handleButtonClick = (value) => {
    if (value === "producto") {
      setShowProduct(false);
    } else if (value === "servicio") {
      setShowProduct(true);
    }
  };

  // Funcion para eliminar producto de inventario
  const deleteProductInventory = async () => {
    try {
      await axios.delete(`${apiBaseBack}/deleteproduct/${delProduct.id_inventario}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para eliminar servicio...
  const deleteServiceInventory = async () => {
    try {
      const result = await axios.delete(`${apiBaseBack}/deleteservice/${delService.id_orden}`);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <ButtonInventory>

      <Button onClick={() => handleButtonClick("servicio")}>Servicio</Button>
      <Button className="producto" onClick={() => handleButtonClick("producto")}>Producto</Button>
    </ButtonInventory>

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
                placeholder="Nombre del producto"
              />
            </ContainSearch>
          </ContainControls>
          <ContainTable>
            <Table>
              <Thead>
                <Tr>
                  <Th>ID Producto</Th>
                  <Th>Tipo producto</Th>
                  <Th>Nombre del producto</Th>
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
                        <Buttons onClick={() => {setHandleDeleteProduct(!handleDeleteProduct); setDelProduct(item)}} title="Eliminar producto">
                          <i className={deleteProduct}></i>
                        </Buttons>
                      </ButtonOptions>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ContainTable>

          {/* Modal de eliminar producto */}
          <Modals
          status={handleDeleteProduct}
          changeStatus={setHandleDeleteProduct}
          titleModal={"Eliminar producto"}
          changeposition={"start"}
          showHeader={true}
          showCloseButton={true}
          changepadding={'0px'}

          >
            <ContainInfoModal>
              <Paragraph>¿Estás seguro de que quieres eliminar este cliente?</Paragraph>
              <ButtonDelete>
                <Btn_Delete onClick={() => {setHandleDeleteProduct(!handleDeleteProduct); deleteProductInventory()}} >Eliminar</Btn_Delete>
              </ButtonDelete>
            </ContainInfoModal>
          </Modals>

          {/* Modal de ditar producto */}
          <Modals
            status={handleFormInventory}
            changeStatus={setHandleFormInventory}
            titleModal={"Editar item"}
            changeposition={"start"}
            showHeader={true}
            showCloseButton={true}
          >
            <ContainInfoModal>
              <h5>aqui va el formulario de edit.</h5>
            </ContainInfoModal>
          </Modals>
        </>
      )}

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
              placeholder="ID Orden"
            />
          </ContainSearch>
        </ContainControls>
        <ContainTable>
          <Table>
            <Thead>
              <Tr>
                <Th>ID Orden</Th>
                <Th>Nombre del servicio</Th>
                <Th>Descripción</Th>
                <Th>Precio</Th>
                <Th>Tiempo estimado</Th>
                <Th>Opciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {resultsService.map((item, i) => (
                <Tr key={i}>
                  <Td>{item.id_orden}</Td>
                  <Td>{item.nombre_serv}</Td>
                  <Td>{item.descripcion}</Td>
                  <Td>{item.precio.toLocaleString()}</Td>
                  <Td>{item.tiempo_estimado}</Td>

                  <Td>
                    <ButtonOptions>
                      {/* <Buttons
                        onClick={() =>
                          setHandleFormInventory(!handleFormInventory)
                        }
                        title="Editar producto"
                      >
                        <i className={editProduct}></i>
                      </Buttons> */}
                      <Buttons onClick={() => {setHandleDeleteService(!handleDeleteService); setDelService(item)}} title="Eliminar producto">
                        <i className={deleteProduct}></i>
                      </Buttons>
                    </ButtonOptions>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </ContainTable>

        {/* Modal de eliminar producto */}
        <Modals
          status={handleDeleteService}
          changeStatus={setHandleDeleteService}
          titleModal={"Eliminar servicio"}
          changeposition={"start"}
          showHeader={true}
          showCloseButton={true}
          changepadding={'0px'}
          >
            <ContainInfoModal>
              <Paragraph>¿Estás seguro de que quieres eliminar este cliente?</Paragraph>
              <ButtonDelete>
                <Btn_Delete onClick={() => {setHandleDeleteService(!handleDeleteService); deleteServiceInventory()}} >Eliminar</Btn_Delete>
              </ButtonDelete>
            </ContainInfoModal>                                                                              
          </Modals>

        <Modals
          status={handleFormInventory}
          changeStatus={setHandleFormInventory}
          titleModal={"Editar item"}
          changeposition={"start"}
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