/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonHandle, ButtonOptions, Buttons, ContainCheck, ContainControls, ContainHandlePage, ContainMaxData, ContainSearch, ContainTable, ContainTextHandle, ControlHandle, Input, Label, Li, Option, Select, Table, Tag_P_Handle, Tbody, Td, Th, Thead, Tr, Ul} from "./styledTableVehicleControl";
import axios from "axios";

const TableVehicleControl = ({editVehicleTable, deleteVehicleTable, getCustomer2}) => {
  /* Consulta para traer la tabla clientes */
  console.log("componente de otro lado",getCustomer2)
  const [vehicle, setVehicle] = useState([]);

  const getVehicle = async () => {
    try {
      const res = await axios.get(`http://localhost:3005/vehicle/${getCustomer2}`);
      setVehicle(res.data);
      console.log("res vehiculo",res)
    } catch (error) {
      console.log(error);
    }
  };

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
          <Input type="text" title="Buscar cliente"></Input>
        </ContainSearch>
      </ContainControls>

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
    </>
  );
};

export default TableVehicleControl;
