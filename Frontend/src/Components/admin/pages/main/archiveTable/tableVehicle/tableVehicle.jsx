/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonOptions, Buttons, ContainTable, Table, Tbody, Td, Th, Thead, Tr } from "./styledTableVehicle";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import EditFormVehicle from "../../../header/archiveInputs/editForms/editFormVehicle";
import { Btn_Delete, ButtonDelete, ContainControls, ContainMaxData, Label } from "../tableClient/styledTableClient";
import { TextArea } from "../../../header/archiveInputs/formVehicle";


const TableVehicle = ({editVehicleTable, deleteVehicleTable, showRemarks, getCustomer2}) => {
  /* Consulta para traer la tabla clientes */
  const [vehicle, setVehicle] = useState([]);
  // Variable de estado para filtrar busqueda
  //Variable de estado modal
  const [handleEditVehicle, setHandleEditVehicle] = useState(false)
  const [handleDeleteVehicle, setHandleDeleteVehicle] = useState(false)
  const [delIdVehicle, setDelIdVehicle] = useState(null)
  //Variable de estado para capturar vehiculo 
  const [idVehicle, setIdVehicle] = useState(null);
  const [observacion, setObservacion] = useState(null)
  // Variable de estado para abrir modal de observacion vehiculo.
  const [handleRemarks, setHandleRemarks] = useState(false);

  
  //Metodo para captura la placa en el modal
  const CapturaVehicle = (item) => {
    setIdVehicle(item)
    setHandleEditVehicle(!handleEditVehicle)
  }

  const getVehicle = async () => {
    try {
      const res = await axios.get(`http://localhost:3005/vehicle/${getCustomer2}`);
      setVehicle(res.data);
      console.log("res vehiculo",res)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVehicle = async () => {
    try {
      const result = await axios.delete(`http://localhost:3005/deletevehicle/${delIdVehicle.matricula}`);
      console.log(result);
      setVehicle(vehicle.filter((v) => v.matricula !== delIdVehicle.matricula));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVehicle();
  }, [setVehicle]);
  return (
    <>
    <ContainControls>
        {/* CONTROL "CANTIDAD DE REGISTROS" */}
        <ContainMaxData>
          <Label type="select">Cantidad de registros</Label>
        </ContainMaxData>

      </ContainControls>
      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID Vehículo</Th>
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
                <Td className="matricula">{item.matricula}</Td>
                <Td>{item.vin}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons title="Editar vehículo" onClick={() => CapturaVehicle(item)}>
                      <i className={editVehicleTable}></i>
                    </Buttons>
                    <Buttons title="Observaciones" onClick={() => {setObservacion(item.observacion); setHandleRemarks(!handleRemarks)}}>
                      <i className={showRemarks}></i>
                    </Buttons>
                    <Buttons onClick={() => {setHandleDeleteVehicle(!handleDeleteVehicle); setDelIdVehicle(item)}} title="Eliminar vehículo">
                      <i className={deleteVehicleTable}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContainTable>

      <Modals
      status={handleEditVehicle}
      changeStatus={setHandleEditVehicle}
      titleModal={"Actualizar vehículo actual"}
      showHeader={true}
      showCloseButton={true}
      changePosition={"start"}
      >
        <ContainInfoModal>
          <EditFormVehicle getVehicle={idVehicle}/>
        </ContainInfoModal>
      </Modals>
      
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
          <TextArea>{observacion}</TextArea>
          <ButtonDelete>
          <Btn_Delete onClick={() => setHandleRemarks(!handleRemarks)}>Cerrar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>

      <Modals
      status={handleDeleteVehicle}
      changeStatus={setHandleDeleteVehicle}
      titleModal={'Eliminar vehículo'}
      changePosition={'start'}
      showHeader={true}
      showCloseButton={true}
      >
        <ContainInfoModal>
          <Paragraph>¿Estas seguro de querer eliminar este vehículo?</Paragraph>
          <ButtonDelete>
          <Btn_Delete onClick={() => {setHandleDeleteVehicle(!handleDeleteVehicle); deleteVehicle()}}>Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableVehicle;