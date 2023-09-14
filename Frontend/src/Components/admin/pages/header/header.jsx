/* eslint-disable react/prop-types */

import { useState } from "react";
import Modals from "../archive/modals";
import {
  Button,
  ContainButtons,
  ContainHeader,
  ContainInfo,
  ContainInfoModal,
  ExptButton,
  H2,
} from "./styledHeader";
import FormClient from "./archiveInputs/formClient";
import FormStaff from "./archiveInputs/formStaff";
import FormVehicle from "./archiveInputs/formVehicle";
import axios from "axios";

const Header = ({indexIcon, index, titleButton, titleModalPages, showContentClient, showContentStaff, showContentVehicle, showPlusButton, exportButton, btnExport}) => {
  // Variable de estado para abrir y cerrar el modal de crear cliente
  const [handleClose, setHandleClose] = useState(false);

  
  
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
          {btnExport &&
          <ExptButton title={exportButton} onClick={handleDownloadCustomer}>Exportar</ExptButton>
        }
        </ContainButtons>
      </ContainHeader>

      {/* Modal reutilizable */}
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
    </>
  );
};

export default Header;
