/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonHandle, ButtonOptions, Buttons, ContainCheck, ContainControls, ContainHandlePage, ContainMaxData, ContainSearch, ContainTable, ContainTextHandle, ControlHandle, Input, Label, Li, Option, Select, Table, Tag_P_Handle, Tbody, Td, Th, Thead, Tr, Ul  } from "./styledTableStaff";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal } from "../../../header/styledHeader";
import EditFormStaff from "../../../header/archiveInputs/editForms/editFormStaff";
import AdvDelete from "../advdelete";

const TableStaff = ({editUser, deleteUser}) => {
  const [employees, setEmployees] = useState([]);

  // Variable de estado para modal de eliminar empleado
  const [handleAdvDelete, setHandleAdvDelete] = useState(false)

  // Variable de estado para modal de editar empleado
  const [handleEditEmployee, setHandleEditEmployee] = useState(false);

  //Variable de estado para capturar empleado
  const [empleadoId, setEmpleadoId] = useState(null)
  //Funcion para pasar la variable de estado como parametro al componente
  const CapturaEmpleado = (item) => {
    setHandleEditEmployee(!handleEditEmployee)
    setEmpleadoId(item)
  }
  const getEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3005/employees");
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

/*   const deleteStaff = async (item) => {
    try {
      const result = await axios.delete(
        `http://localhost:3005/deleteemployees/${item.id_empleado}`
      );
      console.log(result);
      alert("empleado eliminado");
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  } */
  useEffect(() => {
    getEmployees();
  }, [setEmployees]);
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
              <Th>ID_Empleado</Th>
              <Th>Rol</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Email</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((item, i) => (
              <Tr key={i}>
              <Td>{item.id_empleado}</Td>
              <Td>{item.rol}</Td>
              <Td>{item.nombre}</Td>
              <Td>{item.apellido}</Td>
              <Td>{item.correo}</Td>
              <Td>
                <ButtonOptions>
                  <Buttons onClick={() => CapturaEmpleado(item)} title="Editar cliente">
                    <i className={editUser}></i>
                  </Buttons>
                  <Buttons onClick={() => setHandleAdvDelete(!handleAdvDelete)} title="Eliminar cliente">
                    <i className={deleteUser}></i>
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
      changePosition={"center"}
      showHeader={false}
      showCloseButton={false}
      >
        <ContainInfoModal>
          <AdvDelete/>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableStaff;
/* onClick={()=> deleteStaff(item)} */