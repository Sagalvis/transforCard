/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Btn_Delete, ButtonDelete, ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableServiceOrder";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, P } from "../../../header/styledHeader";
import TableVehicle from "../tableVehicle/tableVehicle";
import FormVehicle, { BtnRegister, ButtonRegister } from "../../../header/archiveInputs/formVehicle";
import EditFormClient from "../../../header/archiveInputs/editForms/editFormClient";

const TableServiceOrder = ({ editOrder, deleteOrder, createVehicle}) => {
  /* Variable de estado para traer clientes */
  // ...PENDIENTE SERGIO
  const [customer, setCustomer] = useState([]);  

  // Variable de estado para abrir y cerrar modal de tabla vehiculo
  const [handleCloseVehicle, setHandleCloseVehicle] = useState(false);
  const [handleOpenFormVehicle, setHandleOpenFormVehicle] = useState(false);
  const [handleEdit, setHandleEdit] = useState(false);
  const [handleDelete, setHandleDelete] = useState(false);
  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState("");
  // Variable de estado para capturar id del usuario y eliminarlo
  const [selectedItem, setSelectedItem] = useState(null);

  //funcion para traer los datos de la tabla a buscar

  //Función de busqueda
  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //Metodo de filtrado tabla cliente
  let resultsCustomer = [];

  if (!search) {
    resultsCustomer = customer || [];
  } else {
    resultsCustomer = customer.filter(
      (dato) =>
        dato.identificacion &&
        dato.identificacion.toString().includes(search.toString())
    );
  }

  // Variable de estado para capturar al cliente
  const [id, setId] = useState(null);
  const [id2, setId2] = useState(null);
  const [id3, setId3] = useState(null);

  //Metodo para capturar al cliente en modal edit
  const Captura = (item) => {
    setId(item);
    setHandleEdit(!handleEdit);
  };

  // Funcion para traer toda la tabla clientes
  const getCustomer = async () => {
    try {
      const res = await axios.get("http://localhost:3005/customer");
      setCustomer(res.data);
      console.log("get usuario", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para eliminar cliente de la tabla
  const deleteClient = async () => {
    try {
      const result = await axios.delete(
        `http://localhost:3005/deletecustomer/${selectedItem.identificacion}`
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
              <Th>ID_Cliente</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Email</Th>
              <Th>Dirección</Th>
              <Th>Celular</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resultsCustomer.map((item, i) => (
              <Tr key={i}>
                <Td>{item.identificacion}</Td>
                <Td>{item.nombre}</Td>
                <Td>{item.apellido}</Td>
                <Td>{item.correo}</Td>
                <Td>{item.direccion}</Td>
                <Td>{item.tel}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons
                      onClick={() => Captura(item)}
                      title="Editar orden"
                    >
                      <i className={editOrder}></i>
                    </Buttons>

                    <Buttons
                      onClick={() => {
                        setSelectedItem(item);
                        setHandleDelete(!handleDelete);
                      }}
                      title="Eliminar orden"
                    >
                      <i className={deleteOrder}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContainTable>

      {/* MODALES  */}

      <Modals
        status={handleCloseVehicle}
        changeStatus={setHandleCloseVehicle}
        titleModal={"Tus vehículos"}
        changePosition={"start"}
        showHeader={true}
        showCloseButton={true}
        changeWidth={"1100px"}
      >
        <ContainInfoModal>
          {/* Tabla de vehiculos registrados */}
          <TableVehicle
            getCustomer2={id2}
            editVehicleTable={"fa-solid fa-pen-to-square"}
            deleteVehicleTable={"fa-solid fa-trash-can"}
            showRemarks={"fa-regular fa-clipboard"}
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
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          {/* Formaulario para registro de vehículos */}
          <FormVehicle getCustomer3={id3} />
        </ContainInfoModal>
      </Modals>

      {/* Modal para editar clientes  */}
      <Modals
        status={handleEdit}
        changeStatus={setHandleEdit}
        titleModal={"Editar cliente actual"}
        changePosition={"start"}
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          {/* Formaulario para editar clientes */}
          <EditFormClient getCustomer={id} />
        </ContainInfoModal>
      </Modals>

      <Modals
      status={handleDelete}
      changeStatus={setHandleDelete}
      titleModal={'Eliminar cliente'}
      changePosition={'start'}
      showHeader={true}
      showCloseButton={true}
      changePadding={"0px"}
      >
        <ContainInfoModal>
          <P>¿Estas seguro que quieres eliminar este cliente?</P>
          <ButtonDelete>
          <Btn_Delete onClick={deleteClient}>Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableServiceOrder;
