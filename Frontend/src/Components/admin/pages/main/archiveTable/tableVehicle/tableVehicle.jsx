/* eslint-disable react-hooks/exhaustive-deps */
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
} from "./styledTableVehicle";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal } from "../../../header/styledHeader";

const TableVehicle = ({editVehicleTable, showRemarks, deleteVehicleTable, getCustomer2}) => {
  /* Consulta para traer la tabla clientes */
  console.log("componente de otro lado",getCustomer2)
  const [vehicle, setVehicle] = useState([]);
  // Variable de estado para filtrar busqueda
  // Variable de estado para abrir modal de observacion vehiculo.
  const [handleRemarks, setHandleRemarks] = useState(false);



  const getVehicle = async () => {
    try {
      const res = await axios.get(`http://localhost:3005/vehicle/${getCustomer2}`);
      setVehicle(res.data);
      console.log("res vehiculo",res)
    } catch (error) {
      console.log(error);
    }
  };

  /* const UpdateVehicle = async () => {
    try {
      const result = await axios.patch(`http://localhost:3005/patchvehicle/${}`);
    } catch (error) {
      console.log(error)
    }
  } */

  const deleteVehicle = async (item) => {
    try {
      const result = await axios.delete(`http://localhost:3005/deletevehicle/${item.matricula}`);
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVehicle();
  }, [setVehicle]);
  return (
    <>
      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID_Vehículo</Th>
              <Th>Cedula</Th>
              <Th>Tipo</Th>
              <Th>Marca</Th>
              <Th>Modelo</Th>
              <Th>Año</Th>
              <Th>Color</Th>
              <Th>T_Propiedad</Th>
              <Th>Placa</Th>
              <Th>VIN</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {vehicle.map((item, i) => (
              <Tr key={i}>
                <Td>{i+100}</Td>
                <Td>{item.identificacion}</Td>
                <Td>{item.tipoVehiculo}</Td>
                <Td>{item.marca}</Td>
                <Td>{item.modelo}</Td>
                <Td>{item.año}</Td>
                <Td>{item.color}</Td>
                <Td>{item.tarjetaPropiedad}</Td>
                <Td>{item.matricula}</Td>
                <Td>{item.vin}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons title="Editar vehículo">
                      <i className={editVehicleTable}></i>
                    </Buttons>
                    <Buttons onClick={() => setHandleRemarks(!handleRemarks)} title="Editar vehículo">
                      <i className={showRemarks}></i>
                    </Buttons>
                    <Buttons onClick={() => deleteVehicle(item)} title="Eliminar vehículo">
                      <i className={deleteVehicleTable}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContainTable>

      {/* Modal de Observaciones del vehículo */}
      <Modals
      status={handleRemarks}
      changeStatus={setHandleRemarks}
      titleModal={"Observaciones del vehículo"}
      changePosition={"start"}
      showHeader={true}
      showCloseButton={true}
      >
        <ContainInfoModal>
          Vehículo con una falla en la culata del motor.
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableVehicle;
