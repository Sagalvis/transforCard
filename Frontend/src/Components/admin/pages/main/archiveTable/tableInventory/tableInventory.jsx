/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import {
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
import { toast, ToastContainer } from 'react-toastify'

const TableInventory = ({ editProduct, deleteProduct }) => {
  const [ordenService, setOrdenService] = useState([]);
  const [search, setSearch] = useState("");
  const [handleFormInventory, setHandleFormInventory] = useState(false);
  // Variable de estado de eliminar servicio
  const [handleDeleteService, setHandleDeleteService] = useState(false);
  const [delService, setDelService] = useState(null);
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const token = localStorage.getItem("user")
  const limpio = token.replace(/"/g,"")

  const getOrdenService = async () => {
    try {
      const res = await axios.get(`${apiBaseBack}/getService`);
      setOrdenService(res.data)
    } catch (error) {
      console.log("error");
    }
  }

  const searching = (e) => {
    setSearch(e.target.value);
  };
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
    getOrdenService();
  }, []);
  // Funcion para eliminar producto de inventario

  // Funcion para eliminar servicio...
  const deleteServiceInventory = async () => {
    try {
      await axios.delete(`${apiBaseBack}/deleteservice/${delService.id_orden}`, {
        headers: {
          Authorization: `${limpio}`
        }
      });
      handleAlertDeleteInventory();
      setOrdenService(ordenService.filter((c) => c.id_orden !== delService.id_orden));
    } catch (error) {
      console.log("error");
    }
  };

  const handleAlertDeleteInventory = () => {
    toast.success('Servicio eliminado con éxito.');
  };
  return (
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
                      <Buttons
                        onClick={() =>
                          setHandleFormInventory(!handleFormInventory)
                        }
                        title="Editar producto"
                      >
                        <i className={editProduct}></i>
                      </Buttons> 
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


        <ToastContainer 
        autoClose="1000" 
        hideProgressBar={false}
        theme="dark"
        pauseOnHover/>
      </>
  );
};

export default TableInventory;