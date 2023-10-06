/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Btn_Delete,
  ButtonDelete,
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
} from "./styledTableClient";
import axios from "axios";
import Modals from "../../../archive/modals";
import {
  AddPlus,
  Button,
  CardService,
  ContainInfoModal,
  ContainPrice,
  ContainServices,
  Cuadro,
  Img,
  Paragraph,
  Price,
  Time,
  Title,
  TitleService,
} from "../../../header/styledHeader";
import TableVehicle from "../tableVehicle/tableVehicle";
import FormVehicle, {
  BtnRegister,
  ButtonRegister,
} from "../../../header/archiveInputs/formVehicle";
import EditFormClient from "../../../header/archiveInputs/editForms/editFormClient";
import { toast, ToastContainer } from "react-toastify";

const TableClient = ({ editUser, createVehicle, deleteUser, orderService }) => {
  /* Variable de estado para traer clientes */
  const [customer, setCustomer] = useState([]);
  // Variable de estado para abrir y cerrar modal de tabla vehiculo
  const [handleCloseVehicle, setHandleCloseVehicle] = useState(false);
  const [handleOpenFormVehicle, setHandleOpenFormVehicle] = useState(false);
  const [handleEdit, setHandleEdit] = useState(false);
  const [handleDelete, setHandleDelete] = useState(false);
  // Variable de estado para abrir modal de ordenes de servicio.
  const [handleOrders, setHandleOrders] = useState(false);
  // Variable de estado para capturar id del usuario y eliminarlo
  const [selectedItem, setSelectedItem] = useState(null);
  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState("");
  //Variable para guardar el servicio y mostrarlo
  const [ordServicio, setOrdService] = useState([]);

  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

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
  const [id4, setId4] = useState(null);

  //Metodo para capturar al cliente en modal edit
  const Captura = (item) => {
    setId(item);
    setHandleEdit(!handleEdit);
  };

  // Funcion para traer toda la tabla clientes
  const getCustomer = async () => {
    try {
      const res = await axios.get(`${apiBaseBack}/customer`);
      setCustomer(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  //Funcion para trae los servicios
  const getServices = async () => {
    try {
      const res = await axios.get(`${apiBaseBack}/getService`);
      setOrdService(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Metodo para mostrar los vehiculos por la cedula
  const CapVehiculo = (item) => {
    setId2(item);
    setId3(item);
    if (item) {
      setHandleCloseVehicle(!handleCloseVehicle);
    } else {
      toast.error("Error");
    }
  };

  // Función para enviar los servicios del cliente
  const postOrdenServiceCliente = async (item) => {
    try {
      const res = await axios.post(`${apiBaseBack}/postOrdenServiceCliente`, {
        identificacion: id4,
        id_orden: item.id_orden,
      });
      if (res.status === 200) {
        toast.success("Servicio agregado con exito");
      }
    } catch (error) {
      toast.error("Error. Servicio ya fue agregado");
    }
  };
  // Funcion para eliminar cliente de la tabla
  const deleteClient = async () => {
    try {
      await axios.delete(`${apiBaseBack}/deletecustomer/${selectedItem}`); 
      handleAlert();
      setCustomer(customer.filter((c) => c.identificacion !== selectedItem));
    } catch (err) {
      toast.error(
        "No se pudo eliminar el cliente porque contiene un vehículo registrado, factura y/o servicio activo."
      );
    }
  };
  useEffect(() => {
    getCustomer();
    getServices();
  }, [setCustomer, setOrdService]);

  // Funciones que contienen Alertas
  const handleAlert = () => {
    toast.success("Cliente eliminado con éxito");
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
            value={search}
            onChange={searching}
            type="text"
            title="Buscar cliente"
            placeholder="ID Cliente"
          ></Input>
        </ContainSearch>
      </ContainControls>

      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Tipo</Th>
              <Th>ID Cliente</Th>
              <Th>Nombres</Th>
              <Th>Apellidos</Th>
              <Th>E-mail</Th>
              <Th>Dirección</Th>
              <Th>Teléfono</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resultsCustomer.map((item, i) => (
              <Tr key={i}>
                <Td>
                  {(resultsCustomer.length - i).toString().padStart(2, "0")}
                </Td>
                <Td>{item.tipoDocumento}</Td>
                <Td>{item.identificacion.toLocaleString()}</Td>
                <Td>{item.nombre}</Td>
                <Td>{item.apellido}</Td>
                <Td className="email">{item.correo}</Td>
                <Td>{item.direccion}</Td>
                <Td>{item.tel}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons
                      onClick={() => Captura(item)}
                      title="Editar cliente"
                    >
                      <i className={editUser}></i>
                    </Buttons>

                    <Buttons
                      onClick={() => CapVehiculo(item.identificacion)}
                      title="Vehículos"
                    >
                      <i className={createVehicle}></i>
                    </Buttons>

                    <Buttons
                      onClick={() => {
                        setSelectedItem(item.identificacion);
                        setHandleDelete(!handleDelete);
                      }}
                      title="Eliminar cliente"
                    >
                      <i className={deleteUser}></i>
                    </Buttons>

                    <Buttons
                      onClick={() => {
                        setHandleOrders(!handleOrders);
                        setId4(item.identificacion);
                      }}
                      title="Crear orden de servicio"
                    >
                      <i className={orderService}></i>
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
        changeposition={"start"}
        showHeader={true}
        showCloseButton={true}
        changewidth={"1340px"}
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
              Cerrar
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
        changeposition={"start"}
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
        changeposition={"start"}
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
        titleModal={"Eliminar cliente"}
        changeposition={"start"}
        showHeader={true}
        showCloseButton={true}
        changepadding={"0px"}
      >
        <ContainInfoModal>
          <Paragraph>
            ¿Estás seguro de que quieres eliminar este cliente?
          </Paragraph>
          <ButtonDelete>
            <Btn_Delete
              onClick={() => {
                setHandleDelete(!handleDelete);
                deleteClient("customer-delete");
              }}
            >
              Eliminar
            </Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>

      {/* Modal de orden de servicio */}
      <Modals
        status={handleOrders}
        changeStatus={setHandleOrders}
        titleModal={"Selecciona el servicio requerido por el cliente"}
        showCloseButton={true}
        showHeader={true}
        changeposition={"start"}
        changewidth={"850px"}
      >
        <TitleService>
          <Paragraph>Mantenimientos rápidos.</Paragraph>
          <Paragraph>
            Servicios rápidos para mantener el buen estado del vehículo.
          </Paragraph>
        </TitleService>
        <ContainInfoModal>
          <ContainServices>
            {ordServicio.map((item, index) => (
              <CardService key={index}>
                <Cuadro>
                  <Img src={`${apiBaseBack}/uploads/${item.ruta_img}`} />
                </Cuadro>
                <Title>
                  <Paragraph className="size">{item.nombre_serv}</Paragraph>
                </Title>
                <Time>
                  <Paragraph className="time">T.E:</Paragraph>
                  <Paragraph className="time">{item.tiempo_estimado}</Paragraph>
                </Time>
                <ContainPrice>
                  <Price>
                    <Paragraph className="desde">Desde</Paragraph>
                    <Paragraph className="precio">
                      $ {item.precio.toLocaleString()}
                    </Paragraph>
                  </Price>
                  <AddPlus>
                    <Button
                      className="no-margin"
                      onClick={() => postOrdenServiceCliente(item)}
                    >
                      <i className="fa-solid fa-square-plus"></i>
                    </Button>
                  </AddPlus>
                </ContainPrice>
              </CardService>
            ))}
          </ContainServices>
        </ContainInfoModal>
      </Modals>

      <ToastContainer
        autoClose="1000"
        hideProgressBar={false}
        theme="dark"
        pauseOnHover
      />
    </>
  );
};

export default TableClient;
