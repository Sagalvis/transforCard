import { ButtonHandle, ButtonOptions, Buttons, ContainCheck, ContainControls, ContainHandlePage, ContainMain, ContainMaxData, ContainSearch, ContainTable, ContainTextHandle, ControlHandle, Input, Label, Li, Option, Select, Table, Tag_P_Handle, Tbody, Td, Th, Thead, Tr, Ul } from "./styledMain";


const Main = ({name, id, email, phone, address, options}) => {
  return (
    <>
    {/* Contenedor principal de la pagina */}
    <ContainMain>
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
                <Th>Nombre</Th>
                <Th>ID</Th>
                <Th>Email</Th>
                <Th>Celular</Th>
                <Th>Dirección</Th>
                <Th>Opciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{name}</Td>
                <Td>{id}</Td>
                <Td>{email}</Td>
                <Td>{phone}</Td>
                <Td>{address}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons title="Editar cliente">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Buttons>
                    <Buttons title="Vehículos">
                      <i className="fa-solid fa-car"></i>
                    </Buttons>
                    <Buttons title="Eliminar cliente">
                      <i className="fa-solid fa-trash-can"></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </ContainTable>

        {/* Contenedor manejo de paginas */}

        <ContainHandlePage>
          {/* Texto numero de registros */}
          <ContainTextHandle>
          <Tag_P_Handle>Mostrando registros del 1 al 2 de un total de 2 registros</Tag_P_Handle>
          </ContainTextHandle>

          {/* Manejo de paginas */}
          <ControlHandle>
            <Ul>
              <Li><ButtonHandle>Anterior</ButtonHandle></Li>
              <Li title='Pagina actual'className="button-li"><a href="/">1</a></Li>
              <Li><ButtonHandle>Siguiente</ButtonHandle></Li>
            </Ul>
          </ControlHandle>
        </ContainHandlePage>
      </ContainMain>
    </>
  );
}

export default Main;
