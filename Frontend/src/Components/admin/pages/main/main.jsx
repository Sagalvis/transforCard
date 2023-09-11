/* eslint-disable react/prop-types */
/* import { useState } from "react"; */
// import Modals from "../archive/modals";
import TableClient from "./archiveTable/tableClient/tableClient";
import TableStaff from "./archiveTable/tableStaff/tableStaff";
import TableVehicle from "./archiveTable/tableVehicle/tableVehicle";
import {
  ButtonHandle,
  ContainCheck,
  ContainControls,
  ContainHandlePage,
  ContainMain,
  ContainMaxData,
  ContainSearch,
  ContainTextHandle,
  ControlHandle,
  Input,
  Label,
  Li,
  Option,
  Select,
  Tag_P_Handle,
  Ul,
} from "./styledMain";

const Main = ({showTableClient, showTableStaff, showTableVehicle}) => {
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

        {/* Tabla de clientes */}

        {showTableClient && (
        <TableClient
          id_employee={"0001"}
          name="Sergio"
          email={"dev.sershcodes@gmail.com"}
          phone={"+57 300 000 0000"}
          address={"Av. Kalet St Toronto 256"}
          editUser={"fa-solid fa-pen-to-square"}
          createVehicle={"fa-solid fa-car"}
          deleteUser={"fa-solid fa-trash-can"}
        />
        )}

        {/* Tabla de empleados */}

        {showTableStaff && (
        <TableStaff
          id_employee={'1143168571'}
          name={"Johan"}
          lastname={'Díaz'}
          gender={'Masculino'}
          age={'23'}
          phone={"+57 304 526 4366"}
          address={"Av. Kalet St Toronto 256"}
          email={"dev.beecodes@gmail.com"}
          editUser={"fa-solid fa-pen-to-square"}
          deleteUser={"fa-solid fa-trash-can"}
        />
        )}

        {/* Tabla de vehiculos */}

        {showTableVehicle && (
        <TableVehicle
          id_vehicle={'0001'}
          vehicle_type={"Moto"}
          brand={"Boxer"}
          model={'CT KS'}
          color={'Negro'}
          year={'2022'}
          patent={"AEP41G"}
          vin={"1HG8902JJNS9S"}
          editUser={"fa-solid fa-pen-to-square"}
          deleteUser={"fa-solid fa-trash-can"}
        />
        )}

        {/* Contenedor manejo de paginas */}

        <ContainHandlePage>
          {/* Texto numero de registros */}
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
      </ContainMain>
    </>
  );
};

export default Main;
