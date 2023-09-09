import {
  Button,
  ContainButtons,
  ContainHeader,
  ContainInfo,
  ContainMain,
  H2,
  Label,
  Input,
  ContainCheck,
  ContainControls,
  ContainMaxData,
  Option,
  Select,
  ContainSearch,
  ContainTable,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tdbuttons,
  Buttons,
} from "./styles/styledClient";

const Client = () => {
  return (
    <>
      {/* Contenedor principal HEADER*/}
      <ContainHeader>
        {/* Info de vista */}
        <ContainInfo>
          <i className="fa-solid fa-user-group"></i>
          <H2>Clientes</H2>
        </ContainInfo>

        {/* Botones */}

        <ContainButtons>
          <Button title="Crear nuevo cliente">
            <i className="fa-solid fa-plus"></i>
          </Button>
        </ContainButtons>
      </ContainHeader>

      {/* Contenedor principal MAIN */}

      <ContainMain>
        <ContainCheck>
          <Label htmlFor="checkbox">Empresas</Label>
          <Input type="checkbox" />
          <Label htmlFor="checkbox">Personas</Label>
        </ContainCheck>

        {/* Controladores */}

        <ContainControls>
          {/* Control "CANTIDAD DE REGISTROS" */}
          <ContainMaxData>
            <Label htmlFor="select">Cantidad de registros</Label>
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
                <Td>Johan</Td>
                <Td>0001</Td>
                <Td>dev.beecodes@gmail.com</Td>
                <Td>+57 304 526 4366</Td>
                <Td>KR 8C # 45- 71</Td>
                <Td>
                  <Tdbuttons>
                    <Buttons title="Editar cliente">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Buttons>
                    <Buttons title="Vehículos">
                      <i class="fa-solid fa-car"></i>
                    </Buttons>
                    <Buttons title="Eliminar cliente">
                      <i class="fa-solid fa-trash-can"></i>
                    </Buttons>
                  </Tdbuttons>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </ContainTable>
      </ContainMain>
    </>
  );
};

export default Client;
