/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableVehicleControl";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import { Btn_Delete, ButtonDelete } from "../tableClient/styledTableClient";
import { ToastContainer, toast } from "react-toastify";

const TableVehicleControl = ({deleteVehicleTable}) => {
  /* Consulta para traer la tabla clientes */
  const [vehicle, setVehicle] = useState([]);
  const [search, setSearch] = useState("");
  // Variables de estado, modal eliminar
  const [delVehicle, setDelVehicle] = useState(null);
  const [handleDeleteControlVehicle, setHandleDeleteControlVehicle] = useState(false);
  
  //Función de busqueda
  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  
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
      const res = await axios.get(`${apiBaseBack}/vehicle`);
      setVehicle(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVehicle = async () => {
    try {
      await axios.delete(`${apiBaseBack}/deletevehicle/${delVehicle.matricula}`);

      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVehicle();
  }, [setVehicle]);

  const handleAlerteVehicleControl = () => {
    toast.success('Vehículo eliminado con éxito.');
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
                <Td>{(i + 1).toString().padStart(2, '0')}</Td>
                <Td>{item.identificacion.toLocaleString()}</Td>
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

      <ToastContainer
      autoClose={1000}
      hideProgressBar={true}
      />

      <Modals
      status={handleDeleteControlVehicle}
      changeStatus={setHandleDeleteControlVehicle}
      titleModal={'Eliminar vehículo'}
      changeposition={'start'}
      showHeader={true}
      showCloseButton={true}
      >
        <ContainInfoModal>
          <Paragraph>¿Estas seguro de querer eliminar este vehículo?</Paragraph>
          <ButtonDelete>
            <Btn_Delete onClick={() => {setHandleDeleteControlVehicle(!handleDeleteControlVehicle); handleAlerteVehicleControl(); deleteVehicle()}} >Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableVehicleControl;
