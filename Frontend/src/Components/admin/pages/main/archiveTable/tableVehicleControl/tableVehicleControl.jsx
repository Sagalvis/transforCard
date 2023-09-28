/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableVehicleControl";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import { Btn_Delete, ButtonDelete } from "../tableClient/styledTableClient";
import { ContainAlert } from "../../../header/archiveInputs/formClient";
import Alert from '@mui/material/Alert'

const TableVehicleControl = ({deleteVehicleTable, getCustomer2}) => {
  /* Consulta para traer la tabla clientes */
  console.log("componente de otro lado",getCustomer2)
  const [vehicle, setVehicle] = useState([]);
  const [search, setSearch] = useState("");
  // Variables de estado, modal eliminar
  const [delVehicle, setDelVehicle] = useState(null);
  const [handleDeleteControlVehicle, setHandleDeleteControlVehicle] = useState(false);
  const [showAlertDeleteVehicle, setShowAlertDeleteVehicle] = useState(false);
  
  //Función de busqueda
  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  
  //Metodo de filtrado tabla control de vehiculos
  let resultsVehicleControl = [];

  if (!search) {
    resultsVehicleControl = vehicle || [];
  } else {
    resultsVehicleControl = vehicle.filter(
      (dato) =>
        dato.tarjetaPropiedad &&
        dato.tarjetaPropiedad.toString().includes(search.toString())
    );
  }
  
  const getVehicle = async () => {
    try {
      const res = await axios.get(`http://localhost:3005/vehicle`);
      setVehicle(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVehicle = async () => {
    try {
      await axios.delete(`http://localhost:3005/deletevehicle/${delVehicle.matricula}`);
      setShowAlertDeleteVehicle(true);
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
          title="Buscar vehículo"
          placeholder="Lic. Tránsito" />
        </ContainSearch>
      </ContainControls>

      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID Vehículo</Th>
              <Th>ID Cliente</Th>
              <Th>Tipo</Th>
              <Th>Marca</Th>
              <Th>Modelo</Th>
              <Th>Año</Th>
              <Th>Color</Th>
              <Th>Lic. Tránsito</Th>
              <Th>Matrícula</Th>
              <Th>VIN</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resultsVehicleControl.map((item, i) => (
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
                    <Buttons onClick={() => {setHandleDeleteControlVehicle(!handleDeleteControlVehicle); setDelVehicle(item)}} title="Eliminar vehículo">
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
      status={handleDeleteControlVehicle}
      changeStatus={setHandleDeleteControlVehicle}
      titleModal={'Eliminar vehículo'}
      changePosition={'start'}
      showHeader={true}
      showCloseButton={true}
      >
      {showAlertDeleteVehicle && (
        <ContainAlert>
        <Alert severity="success" color="success">
          ¡Vehículo eliminado con exito!
          </Alert>
        </ContainAlert>
      )}
        <ContainInfoModal>
          <Paragraph>¿Estas seguro de querer eliminar este vehículo?</Paragraph>
          <ButtonDelete>
            <Btn_Delete onClick={() => {setHandleDeleteControlVehicle(!handleDeleteControlVehicle); deleteVehicle()}} >Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableVehicleControl;
