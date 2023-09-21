/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Btn_Delete,
  ButtonDelete,
  /* ButtonHandle, */ ButtonOptions,
  Buttons,
  /* ContainCheck,
 */  ContainControls,
  /* ContainHandlePage,
 */  ContainMaxData,
  ContainSearch,
  ContainTable,
  /* ContainTextHandle,
  ControlHandle, */
  Input,
  Label,
  /* Li,
  Option,
  Select, */
  Table,
  /* Tag_P_Handle, */
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  /* Ul, */
} from "./styledTableClient";
import axios from "axios";
import Modals from "../../../archive/modals";
import { AddPlus, Button, CardService, ContainInfoModal, ContainPrice, ContainServices, Cuadro, Img, P, Price, Time, Title, TitleService } from "../../../header/styledHeader";
import TableVehicle from "../tableVehicle/tableVehicle";
import FormVehicle, { BtnRegister, ButtonRegister } from "../../../header/archiveInputs/formVehicle";
import EditFormClient from "../../../header/archiveInputs/editForms/editFormClient";
import aceite from '../../../../../../assets/img/ALINEAMIENTO.jpg'

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
      const res = await axios.get("http://localhost:3005/customer");
      setCustomer(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //Funcion para trae los servicios
  const getServices = async () =>{
    try {
      const res = await axios.get("http://localhost:3005/getService");
      setOrdService(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  //Metodo para mostrar los vehiculos por la cedula
  const CapVehiculo = (item) => {
    setId2(item);
    setId3(item);
    if (item) {
      setHandleCloseVehicle(!handleCloseVehicle);
    } else {
      alert("Error");
    }
  };

  //Funcion para enviar los servicios del cliente
  const postOrdenServiceCliente = async () =>{
    try {
      const res = await axios.post("http://localhost:3005/postOrdenServiceCliente",{
        identificacion: id4,
        id_orden: ordServicio.id_orden
      });
    } catch (error) {
      console.log(error)
    }
  }

  // Funcion para mostrar los servicios disponibles


  // Funcion para eliminar cliente de la tabla
  const deleteClient = async () => {
    try {
      const result = await axios.delete(
        `http://localhost:3005/deletecustomer/${selectedItem.identificacion}`
      );
      console.log(result);
      setCustomer(customer.filter((c)=>c.identificacion !== selectedItem.identificacion))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomer();
    getServices();
  }, [setCustomer, setOrdService]);

  return (
    <>
      {/* <ContainCheck>
        <Label type="checkbox">Empresas</Label>
        <Input type="checkbox" />
        <Label type="checkbox">Personas</Label>
      </ContainCheck> */}

      {/* Controladores */}

      <ContainControls>
        {/* Control "CANTIDAD DE REGISTROS" */}
        <ContainMaxData>
          <Label type="select">Cantidad de registros</Label>
          {/* <Select>
            <Option value="option1">10</Option>
            <Option value="option2">25</Option>
            <Option value="option3">50</Option>
            <Option value="option4">100</Option>
          </Select> */}
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
                        setSelectedItem(item);
                        setHandleDelete(!handleDelete);
                      }}
                      title="Eliminar cliente"
                    >
                      <i className={deleteUser}></i>
                    </Buttons>

                    <Buttons
                      onClick={() => {
                        setHandleOrders(!handleOrders)
                        setId4(item.identificacion)
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

      {/* Contenedor manejo de paginas */}

      {/* <ContainHandlePage>
        <ContainTextHandle>
          <Tag_P_Handle>
            Mostrando registros del 1 al 2 de un total de 2 registros
          </Tag_P_Handle>
        </ContainTextHandle> */}

      {/* Manejo de paginas */}
      {/* <ControlHandle>
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
      </ContainHandlePage> */}

      {/* MODALES  */}

      <Modals
        status={handleCloseVehicle}
        changeStatus={setHandleCloseVehicle}
        titleModal={"Tus vehículos"}
        changePosition={"start"}
        showHeader={true}
        showCloseButton={true}
        changeWidth={"1200px"}
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
        titleModal={"Eliminar cliente"}
        changePosition={"start"}
        showHeader={true}
        showCloseButton={true}
        changePadding={"0px"}
      >
        <ContainInfoModal>
          <P>¿Estas seguro de querer eliminar este cliente?</P>
          <ButtonDelete>
            <Btn_Delete onClick={() => {setHandleDelete(!handleDelete); deleteClient()}}>Eliminar</Btn_Delete>
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
      changePosition={'start'}
      changeWidth={'800px'}
      >
            <TitleService>
              <P>Mantenimientos rapidos servicios rápidos para mantener el buen estado de mi carro.</P>
            </TitleService>
        <ContainInfoModal>
          <ContainServices>
          {ordServicio.map((item, index) => (
            <CardService key={index}>
              <Cuadro>
                <Img src={aceite} alt="hh" />
              </Cuadro>
              <Title>
                <P className="size">{item.nombre_serv}</P>
              </Title>
              <Time>
              <P className="time">T.E:</P>
              <P className="time">{item.tiempo_estimado}</P>
              </Time>
              <ContainPrice>
                <Price>
                  <P className="desde">Desde</P>
                  <P className="precio">$ {item.precio}</P>
                </Price>
                <AddPlus>
                <Button onClick={postOrdenServiceCliente} className="no-margin" ><i className="fa-solid fa-square-plus"></i></Button>
                </AddPlus>
              </ContainPrice>
            </CardService>
          ))}

          </ContainServices>
        </ContainInfoModal>        
      </Modals>
    </>
  );
};

export default TableClient;
