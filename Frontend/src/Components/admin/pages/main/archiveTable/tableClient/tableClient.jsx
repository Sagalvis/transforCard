/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {ButtonHandle, ButtonOptions, Buttons, ContainCheck, ContainControls, ContainHandlePage, ContainMaxData, ContainSearch,ContainTable, ContainTextHandle, ControlHandle, Input, Label, Li, Option, Select, Table, Tag_P_Handle, Tbody, Td, Th, Thead, Tr, Ul, } from "./styledTableClient";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal } from "../../../header/styledHeader";
import TableVehicle from "../tableVehicle/tableVehicle";
import FormVehicle, {BtnRegister, ButtonRegister} from "../../../header/archiveInputs/formVehicle";
import EditFormClient from "../../../header/archiveInputs/editForms/editFormClient";

const TableClient = ({ editUser, createVehicle, deleteUser }) => {
  /* Variable de estado para traer clientes */
  const [customer, setCustomer] = useState([]);

  // Variable de estado para abrir y cerrar modal de tabla vehiculo
  const [handleCloseVehicle, setHandleCloseVehicle] = useState(false);
  const [handleOpenFormVehicle, setHandleOpenFormVehicle] = useState(false);
  const [handleEdit, setHandleEdit] = useState(false);


  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState('');

  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //Metodo de filtrado (en espera...)

  const getCustomer = async () => {
    try {
      const res = await axios.get("http://localhost:3005/customer");
      setCustomer(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para eliminar cliente de la tabla
  const deleteClient = async (item) => {
    try {
      const result = await axios.delete(
        `http://localhost:3005/deletecustomer/${item.identificacion}`
      );
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomer();
  }, [setCustomer]);

  return (
    <>
      <ContainCheck>
        <Label type="checkbox">Empresas</Label>
        <Input type="checkbox" />
        <Label type="checkbox">Personas</Label>
      </ContainCheck>

      {/* Controladores */}

      <ContainControls>
        {/* Control "CANTIDAD DE REGISTROS" */}
        <ContainMaxData>
          <Label type="select">Cantidad de registros</Label>
          <Select>
            <Option value="option1">10</Option>
            <Option value="option2">25</Option>
            <Option value="option3">50</Option>
            <Option value="option4">100</Option>
          </Select>
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
              <Th>ID_Cliente</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Email</Th>
              <Th>Celular</Th>
              <Th>Dirección</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customer.map((item, i) => (
              <Tr key={i}>
                <Td>{item.identificacion}</Td>
                <Td>{item.nombre}</Td>
                <Td>{item.apellido}</Td>
                <Td>{item.correo}</Td>
                <Td>{item.direccion}</Td>
                <Td>{item.tel}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons onClick={() => setHandleEdit(!handleEdit)} title="Editar cliente">
                      <i className={editUser}></i>
                    </Buttons>
                    <Buttons
                      onClick={() => setHandleCloseVehicle(!handleCloseVehicle)}
                      title="Vehículos"
                    >
                      <i className={createVehicle}></i>
                    </Buttons>
                    <Buttons
                      onClick={() => deleteClient(item)}
                      title="Eliminar cliente"
                    >
                      <i className={deleteUser}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContainTable>

      {/* Contenedor manejo de paginas */}

      <ContainHandlePage>
        <ContainTextHandle>
          <Tag_P_Handle>
            Mostrando registros del 1 al 2 de un total de 2 registros
          </Tag_P_Handle>
        </ContainTextHandle>

        {/* Manejo de paginas */}
        <ControlHandle>
          <Ul>
            <Li>
              <ButtonHandle>Anterior</ButtonHandle>
            </Li>
            <Li title="Pagina actual" className="button-li">
              <a href="/">1</a>
            </Li>
            <Li>
              <ButtonHandle>Siguiente</ButtonHandle>
            </Li>
          </Ul>
        </ControlHandle>
      </ContainHandlePage>

      {/* MODALES  */}
      
      <Modals
        status={handleCloseVehicle}
        changeStatus={setHandleCloseVehicle}
        titleModal={"Tus vehículos"}
        changePosition={"start"}
      >
        <ContainInfoModal>
          {/* Tabla de vehiculos registrados */}
          <TableVehicle
            editVehicleTable={"fa-solid fa-pen-to-square"}
            deleteVehicleTable={"fa-solid fa-trash-can"}
          />
          <ButtonRegister>
            <BtnRegister
              className="color-red"
              onClick={() => setHandleCloseVehicle(!handleCloseVehicle)}
            >
              Cancelar
            </BtnRegister>

            <BtnRegister
              onClick={() => setHandleOpenFormVehicle(!handleOpenFormVehicle)}
            >
              Crear vehículo
            </BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>

      {/* Ventana modal para el formulario de vehículos */}
      <Modals
        status={handleOpenFormVehicle}
        changeStatus={setHandleOpenFormVehicle}
        titleModal={"Crear vehículo nuevo"}
        changePosition={"start"}
      >
        <ContainInfoModal>
          {/* Formaulario para registro de vehículos */}
          <FormVehicle />
        </ContainInfoModal>
      </Modals>

      {/* Modal para editar clientes  */}
      <Modals
        status={handleEdit}
        changeStatus={setHandleEdit}
        titleModal={"Editar cliente"}
        changePosition={"start"}
      >
        <ContainInfoModal>
          {/* Formaulario para editar clientes */}

          <EditFormClient />
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableClient;
