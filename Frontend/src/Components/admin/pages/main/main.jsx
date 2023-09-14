/* eslint-disable react/prop-types */
import TableClient from "./archiveTable/tableClient/tableClient";
import TableInventory from "./archiveTable/tableInventory/tableInventory";
import TableServiceOrder from "./archiveTable/tableServiceOrder/tableServiceOrder";
import TableStaff from "./archiveTable/tableStaff/tableStaff";
import TableVehicleControl from "./archiveTable/tableVehicleControl/tableVehicleControl";
import {ContainMain} from "./styledMain";

const Main = ({showTableClient, showTableStaff, showTableVehicle,showTableVehicleControl, showTableInventory, showTableServiceOrder}) => {
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
          editStaff={"fa-solid fa-pen-to-square"}
          deletStaff={"fa-solid fa-trash-can"}
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
        {showTableInventory && (
        <TableInventory
        editProduct={"fa-solid fa-pen-to-square"}
        deleteProduct={"fa-solid fa-trash-can"}
        />
        )}

        {/* Tabla de Orden de servicio */}
        {showTableServiceOrder && (
          <TableServiceOrder 
          editOrder={"fa-solid fa-pen-to-square"}
          deleteOrder={"fa-solid fa-trash-can"}
          />
        )}
      </ContainMain>
    </>
  );
};

export default Main;
