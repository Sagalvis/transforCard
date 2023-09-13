/* eslint-disable react/prop-types */
import TableClient from "./archiveTable/tableClient/tableClient";
import TableInventory from "./archiveTable/tableInventory/tableInventory";
import TableStaff from "./archiveTable/tableStaff/tableStaff";
import TableVehicleControl from "./archiveTable/tableVehicleControl/tableVehicleControl";
import {ContainMain} from "./styledMain";

const Main = ({showTableClient, showTableStaff, showTableVehicle,showTableVehicleControl, showTableInventory}) => {
  return (
    <>
      {/* Contenedor principal de la pagina */}
      <ContainMain>
        {/* Tabla de clientes */}
        {showTableClient && (
        <TableClient
          editUser={"fa-solid fa-pen-to-square"}
          createVehicle={"fa-solid fa-car"}
          deleteUser={"fa-solid fa-trash-can"}
        />
        )}

        {/* Tabla de empleados */}
        {showTableStaff && (
        <TableStaff
          editUser={"fa-solid fa-pen-to-square"}
          deleteUser={"fa-solid fa-trash-can"}
        />
        )}

        {/* Tabla de control de vehiculos */}
        {showTableVehicleControl && (
        <TableVehicleControl
          editVehicleTable={"fa-solid fa-pen-to-square"}
          deleteVehicleTable={"fa-solid fa-trash-can"}
        />
        )}
        {/* Tabla de inventarios */}
        {showTableInventory &&
        <TableInventory
        editVehicleTable={"fa-solid fa-pen-to-square"}
        deleteVehicleTable={"fa-solid fa-trash-can"}
        />
        }
      </ContainMain>
    </>
  );
};

export default Main;
