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
import { AddPlus, Button, CardService, ContainInfoModal, ContainPrice, ContainServices, Cuadro, Img, Paragraph, Price, Time, Title, TitleService } from "../../../header/styledHeader";
import TableVehicle from "../tableVehicle/tableVehicle";
import FormVehicle, { BtnRegister, ButtonRegister } from "../../../header/archiveInputs/formVehicle";
import EditFormClient from "../../../header/archiveInputs/editForms/editFormClient";
import { toast, ToastContainer } from "react-toastify";

const TableClient = ({ editUser, createVehicle, deleteUser, orderService}) => {
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
  const [ordServicio, setOrdService] = useState([])
  const [idOrden, setIdOrden] = useState([]);
  const [todo, setTodo] = useState([]);
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

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
  const getServices = async () =>{
    try {
      const res = await axios.get(`${apiBaseBack}/getService`);
      setOrdService(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  //funcion para trarer servicio_cliente para poder validar si ya existe 
  const getServiCliente = async () => {
    try {
      const getAll = await axios.get(`${apiBaseBack}/getAllServicesClient`);
      setTodo(getAll.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getServiCliente()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setTodo])

  //Metodo para mostrar los vehiculos por la cedula
  const CapVehiculo = (item) => {
    setId2(item);
    setId3(item);
    if (item) {
      setHandleCloseVehicle(!handleCloseVehicle);
    } else {
      toast.error('Error');
    }
  };
  //funcion para capturar los datos
  const handleAddOrdenService = (item) => {
    setIdOrden(item.id_orden);
  };

  useEffect(() => {
    if (idOrden) {
      postOrdenServiceCliente();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idOrden]);

  //Funcion para enviar los servicios del cliente
  const postOrdenServiceCliente = async () =>{ 
    try {
      await axios.post(`${apiBaseBack}/postOrdenServiceCliente`,{
        identificacion: id4,
        id_orden: idOrden
      });
      console.log("registrado con exito")
    } catch (error) {
      console.log(error)
    }
  }

  // Funcion para eliminar cliente de la tabla
  const deleteClient = async () => {
    try {
      await axios.delete(
        `${apiBaseBack}/deletecustomer/${selectedItem}`
      );
      setCustomer(customer.filter((c)=>c.identificacion !== selectedItem))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomer();
    getServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCustomer, setOrdService]);

  // Funciones que contienen Alertas 
  const handleAlert = () => {
    toast.success('Cliente eliminado con éxito');
  };

  const handleAlertService = () => {
    toast.success('Se añadio el servicio al cliente seleccionado.');
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
                <Td>{item.identificacion}</Td>
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
                        if(todo.identificacion == id4 && todo.id_orden == idOrden){
                          toast.info('Actualmente se encuentra registrado.');
                        }else{
                          setHandleOrders(!handleOrders)
                        setId4(item.identificacion)
                        }
                        
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
              onClick={() => setHandleOpenFormVehicle(!handleOpenFormVehicle)}>
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
          <Paragraph>¿Estás seguro de que quieres eliminar este cliente?</Paragraph>
          <ButtonDelete>
            <Btn_Delete onClick={() => {setHandleDelete(!handleDelete); handleAlert(); deleteClient()}}>Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>

      {/* Modal de orden de servicio */}
      <Modals
      status={handleOrders}
      changeStatus={setHandleOrders}
      titleModal={'Selecciona el servicio requerido por el cliente'}
      showCloseButton={true}
      showHeader={true}
      changeposition={'start'}
      changewidth={'850px'}
      >
            <TitleService>
              <Paragraph>Mantenimientos rápidos.</Paragraph>
              <Paragraph>Servicios rápidos para mantener el buen estado del vehículo.</Paragraph>
            </TitleService>
        <ContainInfoModal>
          <ContainServices>
          {ordServicio.map((item, index) => (
            <CardService key={index}>
              <Cuadro>
                <Img src={`http://localhost:3005/uploads/${item.ruta_img}`}/>
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
                  <Paragraph className="precio">$ {item.precio.toLocaleString()}</Paragraph>
                </Price>
                <AddPlus>
                <Button
                onClick={()=>{handleAddOrdenService(item); handleAlertService();}}
                className="no-margin"><i className="fa-solid fa-square-plus"></i></Button>
                </AddPlus>
              </ContainPrice>
            </CardService>
          ))}
          
          </ContainServices>
        </ContainInfoModal>        
      </Modals>

      <ToastContainer
      autoClose='1000'
      hideProgressBar='true'/>
    </>
  );
};

export default TableClient;
