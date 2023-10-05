/* eslint-disable react/prop-types */
import TableClient from "./archiveTable/tableClient/tableClient";
import TableHome from "./archiveTable/tableHome/tableHome";
import TableInventory from "./archiveTable/tableInventory/tableInventory";
import TableInvoice from "./archiveTable/tableInvoice/tableInvoice";
import TableProfile from "./archiveTable/tableProfile/tableProfile";
import TableServiceOrder from "./archiveTable/tableServiceOrder/tableServiceOrder";
import TableStaff from "./archiveTable/tableStaff/tableStaff";
import TableVehicleControl from "./archiveTable/tableVehicleControl/tableVehicleControl";
import {ContainMain} from "./styledMain";

const Main = ({showTableProfile, showTableClient,showTableHome, showTableStaff,showTableVehicleControl, showTableInventory, showTableServiceOrder, showTableInvoice}) => {
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
          orderService={"fa-solid fa-clipboard-check"}
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
          deleteOrder={"fa-solid fa-trash-can"}
          createServiceOrder={"fa-solid fa-file-invoice-dollar"}
          showServiceOrder={"fa-solid fa-folder-open"}
          />
        )}

        {/* Tabla de Facturación */}
        {showTableInvoice && (
          <TableInvoice 
          deletInvoice={"fa-solid fa-trash-can"}
          printInvoice={"fa-solid fa-eye"}
          payPayu={"fa-solid fa-money-bill-1-wave"}
          />
        )}
        {showTableHome && (
          <TableHome/>
        )}
        {showTableProfile && (
          <TableProfile/>
        )}
      </ContainMain>
    </>
  );
};

export default Main;
