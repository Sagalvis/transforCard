/* eslint-disable react/prop-types */
import TableClient from "./archiveTable/tableClient/tableClient";
import TableInventory from "./archiveTable/tableInventory/tableInventory";
import TableStaff from "./archiveTable/tableStaff/tableStaff";
// import TableVehicle from "./archiveTable/tableVehicle/tableVehicle";
import {ContainMain} from "./styledMain";

const Main = ({showTableClient, showTableStaff, /* showTableVehicle, */ showTableInventory}) => {
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

        {/* Tabla de vehiculos ***VISTA***, NO MUESTRA ICONOS EN EL MODAL */}
        {/* Componente temporal cuando este al 100% el modal de vehiculos */}

        {/* {showTableVehicle && (
        <TableVehicle
          editVehicleTable={"fa-solid fa-pen-to-square"}
          deleteVehicleTable={"fa-solid fa-trash-can"}
        />
        )} */}

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
