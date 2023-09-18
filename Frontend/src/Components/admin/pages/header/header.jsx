/* eslint-disable react/prop-types */

import { useState } from "react";
import Modals from "../archive/modals";
import {
  Btn_Create_Order,
  Button,
  CardService,
  ContainButtons,
  ContainHeader,
  ContainInfo,
  ContainInfoModal,
  ContainServices,
  Cuadro,
  ExptButton,
  H2,
  P,
  Title,
  TitleService,
} from "./styledHeader";
import FormClient from "./archiveInputs/formClient";
import FormStaff from "./archiveInputs/formStaff";
import FormVehicle from "./archiveInputs/formVehicle";
import axios from "axios";
import { BtnCreate } from "../main/archiveTable/tableInventory/styledTableInventory";
import FormInventory from "./archiveInputs/formInventory";

const Header = ({indexIcon, index, titleButton, titleModalPages, showContentClient, showContentStaff, showContentVehicle, showPlusButton, exportButton, btnExport, btnCreateProduct, btnCreateOrder, btnCreateInvoice}) => {
  // Variable de estado para abrir y cerrar el modal de crear cliente
  const [handleClose, setHandleClose] = useState(false);
  // Variable de estado para abrir modal de crear item de inventario
  const [handleFormInventory, setHandleFormInventory] = useState(false);
  // Variable de estado para abrir modal crear nueva factura
  const [handleFormInvoice, setHandleFormInvoice] = useState(false)
  // Variable de estado para abrir modal de ordenes de servicio.
  const [handleOrders, setHandleOrders] = useState(false);

  
  
  const handleDownloadCustomer = async () => {
    try {
      const response = await axios.get('http://localhost:3005/downdloadcustomer', { responseType: 'arraybuffer' });
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'customer.xlsx';
      link.click();
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
      {/* Contenedor principal HEADER*/}
      <ContainHeader>
        {/* Info de vista */}
        <ContainInfo>
          <i className={indexIcon}></i>
          <H2>{index}</H2>
        </ContainInfo>

        {/* Botones */}
        <ContainButtons>
        {showPlusButton &&
          <Button
            title={titleButton}
            onClick={() => setHandleClose(!handleClose)}
          >
            <i className="fa-solid fa-plus"></i>
          </Button>
        }
        {btnCreateProduct &&
        <BtnCreate onClick={() => setHandleFormInventory(!handleFormInventory)}>Crear producto</BtnCreate>
        }
        {btnCreateInvoice && 
        <BtnCreate onClick={() => setHandleFormInvoice(!handleFormInvoice)}>Crear factura</BtnCreate>
        }
          {btnExport &&
          <ExptButton title={exportButton} onClick={handleDownloadCustomer}>Exportar</ExptButton>
        }

        {btnCreateOrder &&
        <Btn_Create_Order title="Crear orden de servicio" onClick={() => setHandleOrders(!handleOrders)}>Crear orden</Btn_Create_Order>
        }
        </ContainButtons>
      </ContainHeader>

      {/* Modal reutilizable para el boton plus*/}
      <Modals
        status={handleClose}
        changeStatus={setHandleClose}
        titleModal={titleModalPages}
        changePosition={"start"}
        showHeader={true}
        showCloseButton={true}
      >
        
        {/* Aqui el contenido */}
        <ContainInfoModal>
          {/* FORMULARIOS DE TODAS LAS VISTAS */}
          {showContentClient && (
              <FormClient />
          )}

          {showContentStaff && (
              <FormStaff />
          )}

          { showContentVehicle && (
            <FormVehicle />
          )}
        </ContainInfoModal>
      </Modals>

      {/* Modal del boton crear producto */}
      <Modals
      status={handleFormInventory}
      changeStatus={setHandleFormInventory}
      titleModal={'Crear producto'}
      changePosition={"start"}
      showHeader={true}
      showCloseButton={true}
      >
        <ContainInfoModal>
          <FormInventory />
        </ContainInfoModal>
      </Modals>

      <Modals
      status={handleOrders}
      changeStatus={setHandleOrders}
      titleModal={'Selecciona el servicio requerido por el cliente'}
      showCloseButton={true}
      showHeader={true}
      changePosition={'start'}
      changeWidth={'1400px'}
      >
        <ContainInfoModal>
            <TitleService>
              <P>Mantenimientos rapidos servicios rápidos para mantener el buen estado de mi carro.</P>
            </TitleService>
          <ContainServices>

            <CardService>
              <Cuadro>

              </Cuadro>
              <Title>
                <P>Cambio de aceite</P>
              </Title>

            </CardService>
            <CardService>

            </CardService>
            <CardService>

            </CardService>
            <CardService>

            </CardService>
            <CardService>

            </CardService>
            <CardService>

            </CardService>
            <CardService>

            </CardService>
            <CardService>

            </CardService>
          </ContainServices>
        </ContainInfoModal>        
      </Modals>
    </>
  );
};

export default Header;