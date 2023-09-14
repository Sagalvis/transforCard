/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr} from "./styledTableVehicleControl";
import axios from "axios";

const TableVehicleControl = ({deleteVehicleTable, getCustomer2}) => {
  /* Consulta para traer la tabla clientes */
  console.log("componente de otro lado",getCustomer2)
  const [vehicle, setVehicle] = useState([]);
  const [search, setSearch] = useState('');
  
    //Función de busque
    const searching = (e) => {
      setSearch(e.target.value);
      console.log(e.target.value);
    };
  
    //Metodo de filtrado tabla cliente
    let resultsVehicle = []
  
    if(!search){
      resultsVehicle = vehicle || []
    }else{
      resultsVehicle = vehicle.filter((dato) => 
      dato.identificacion && dato.identificacion.toString().includes(search.toString())
      )
    }
  
  const getVehicle = async () => {
    try {
      const res = await axios.get(`http://localhost:3005/vehicle`);
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
      {/* Controladores */}

      <ContainControls>
        {/* Control "CANTIDAD DE REGISTROS" */}
        <ContainMaxData>
          <Label type="select">Cantidad de registros</Label>
        </ContainMaxData>

        {/* BUSCADOR */}
        <ContainSearch>
          <Label value={search} onClick={searching} className="search">Buscar: </Label>
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
            {resultsVehicle.map((item, i) => (
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
    </>
  );
};

export default TableVehicleControl;
