/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr } from "./styledTableStaff";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import EditFormStaff from "../../../header/archiveInputs/editForms/editFormStaff";
import { Btn_Delete, ButtonDelete } from "../tableClient/styledTableClient";
import { toast, ToastContainer} from 'react-toastify'

const TableStaff = ({editStaff, deletStaff}) => {
  const [employees, setEmployees] = useState([]);
  const [idempleado, setIdEmpleado] = useState("")
  // Variable de estado para modal de eliminar empleado
  const [handleAdvDelete, setHandleAdvDelete] = useState(false)
  const [search, setSearch] = useState("");
  // Variable de estado para modal de editar empleado
  const [handleEditEmployee, setHandleEditEmployee] = useState(false);

  //Variable de estado para capturar empleado
  const [empleadoId, setEmpleadoId] = useState(null)
  //Funcion para pasar la variable de estado como parametro al componente
  const CapturaEmpleado = (item) => {
    setHandleEditEmployee(!handleEditEmployee)
    setEmpleadoId(item)
  }
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  const getEmployees = async () => {
    try {
      
      const res = await axios.get(`${apiBaseBack}/employees`);
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Función de busqueda
  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  
  //Metodo de filtrado tabla empleado
  let resultsStaff = [];

  if (!search) {
    resultsStaff = employees || [];
  } else {
    resultsStaff = employees.filter(
      (dato) =>
        dato.id_empleado &&
        dato.id_empleado.toString().includes(search.toString())
    );
  }

  const deleteStaff = async () => {
    try {
      
      const result = await axios.delete(
        `${apiBaseBack}/deleteemployees/${idempleado.id_empleado}`
      );
      console.log(result);

      setTimeout(() => {
        window.location.reload()        
      }, 1000);
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getEmployees();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setEmployees]);

  const handleAlertDeleteStaff = () => {
    toast.success('Empleado eliminado con éxito');
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
          placeholder="ID Empleado"/>
        </ContainSearch>
      </ContainControls>

      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID Empleado</Th>
              <Th>Rol actual</Th>
              <Th>Nombres</Th>
              <Th>Apellidos</Th>
              <Th>E-mail</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resultsStaff.map((item, i) => (
              <Tr key={i}>
              <Td>{item.id_empleado}</Td>
              <Td className="rol">{item.rol}</Td>
              <Td>{item.nombre}</Td>
              <Td>{item.apellido}</Td>
              <Td className="email">{item.correo}</Td>
              <Td>
                <ButtonOptions>
                  <Buttons onClick={() => CapturaEmpleado(item)} title="Editar empleado">
                    <i className={editStaff}></i>
                  </Buttons>
                  <Buttons onClick={() => {
                    setHandleAdvDelete(!handleAdvDelete)
                    setIdEmpleado(item)
                    }} title="Eliminar empleado">
                    <i className={deletStaff}></i>
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

      {/* Modal editar empleado  */}
      <Modals
      status={handleEditEmployee}
      changeStatus={setHandleEditEmployee}
      titleModal={"Editar empleado"}
      changePosition={"start"}
      showHeader={true}
      showCloseButton={true}
      >
        <ContainInfoModal>
          <EditFormStaff
            getEmpleado = {empleadoId}
          />
        </ContainInfoModal>
      </Modals>

      <Modals
      status={handleAdvDelete}
      changeStatus={setHandleAdvDelete}
      titleModal={'Eliminar empleado'}
      changePosition={'start'}
      showHeader={true}
      showCloseButton={true}
      changePadding={"0px"}
      >
        <ContainInfoModal>
          <Paragraph>¿Estás seguro de que quieres eliminar este cliente?</Paragraph>
          <ButtonDelete>
          <Btn_Delete onClick={() => {deleteStaff(); handleAlertDeleteStaff();}}>Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableStaff;