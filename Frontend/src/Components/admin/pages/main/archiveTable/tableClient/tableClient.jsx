/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  ButtonOptions,
  Buttons,
  ContainTable,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./styledTableClient";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal } from "../../../header/styledHeader";
import TableVehicle from "../tableVehicle/tableVehicle";
import FormVehicle, { BtnRegister, ButtonRegister } from "../../../header/archiveInputs/formVehicle";

const TableClient = ({ editUser, createVehicle, deleteUser}) => {
  /* Variable de estado para traer clientes */
  const [customer, setCustomer] = useState([]);

  // Variable de estado para abrir y cerrar modal de tabla vehiculo 
  const [handleCloseVehicle, setHandleCloseVehicle] = useState(false);
  const [handleOpenFormVehicle, setHandleOpenFormVehicle] = useState(false);

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
    const result = await axios.delete(`http://localhost:3005/deletecustomer/${item.identificacion}`
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
                    <Buttons title="Editar cliente">
                      <i className={editUser}></i>
                    </Buttons>
                    <Buttons onClick={() => setHandleCloseVehicle(!handleCloseVehicle)} title="Vehículos">
                      <i className={createVehicle}></i>
                    </Buttons>
                    <Buttons onClick={() => deleteClient(item)} title="Eliminar cliente">
                      <i className={deleteUser}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContainTable>

      <Modals
      status={handleCloseVehicle}
      changeStatus={setHandleCloseVehicle}
      titleModal={'Tus vehículos'}
      changePosition={"start"}
      >
        <ContainInfoModal>
          {/* Tabla de vehiculos registrados */}
          <TableVehicle 
            editVehicleTable={"fa-solid fa-pen-to-square"}
            deleteVehicleTable={"fa-solid fa-trash-can"}
          />
          <ButtonRegister>
            <BtnRegister className="color-red" onClick={() => setHandleCloseVehicle(!handleCloseVehicle)}>Cancelar</BtnRegister>
            <BtnRegister onClick={() => setHandleOpenFormVehicle(!handleOpenFormVehicle)}>Crear vehículo</BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>

      {/* Ventana modal para el formulario de vehículos */}
      <Modals
      status={handleOpenFormVehicle}
      changeStatus={setHandleOpenFormVehicle}
      titleModal={'Crear vehículo nuevo'}
      changePosition={"start"}
      >
        <ContainInfoModal>
          {/* Formaulario para registro de vehículos */}
          <FormVehicle />
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableClient;
