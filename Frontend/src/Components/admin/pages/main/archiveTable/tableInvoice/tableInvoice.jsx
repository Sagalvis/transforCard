/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"; // Importa React
import {
  ButtonOptions,
  Buttons,
  ContainControls,
  ContainMaxData,
  ContainSearch,
  ContainTable,
  Input,
  Label,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  ButtonPdf,
} from "./styledTableInvoice";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import { PDFDocument, rgb } from "pdf-lib";
import moment from "moment";
import { Btn_Delete, ButtonDelete } from "../tableClient/styledTableClient";
import { toast, ToastContainer } from 'react-toastify'

const TableInvoice = ({ deletInvoice, printInvoice }) => {
  const [invoice, setInvoice] = useState([]);
  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState("");
  const [handlePdfInvoice, setHandlePdfInvoice] = useState(false);
  const [handleDeleteInvoice, setHandleDeleteInvoice] = useState(false)
  const [delInvoice, setDelInvoice] = useState(null);
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  //Variable de estado para pasarela de pago 
  const [payuPay, setPayuPay] = useState(false)
  
  //Funcion para traer los datos de la factura

  const createPDF = async (data1) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([400, 400]);
    const font = page.drawText("");
    // Utiliza CustomFontText como fuente personalizada
    // Organiza los datos como deseas en el PDF
    
    const content = `
      Transforcars
      Direccion: Calle 47 #21-63
      Telefono: 3254587894
      Id factura: ${data1.id_factura}
      Identificacion: ${data1.identificacion}
      Fecha de emision: ${moment(data1.fecha_emision).format("YYYY-MM-DD")} 
      ___________________________
      Cantidad pagada: $ ${data1.cantidad_pagada} 
      Estado de pago: ${data1.estado_pago}
    `;
  
    page.drawText(content, {
      x: 50,
      y: 350,
      size: 14,
      font: font,
      color: rgb(0, 0, 0),
    });
  
    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");

    setTimeout(() => {
      window.location.reload();
    }, 1000);

  };
  


  const getInvoice = async () => {
    try {
      
      const res = await axios.get(`${apiBaseBack}/factura`);
      setInvoice(res.data);
    } catch (error) {
      console.log("ERROR");
    }
  };

  const getServicesClient = async (item) => {
    try {
      await axios.get(`${apiBaseBack}/getServiceCliente/${item.identificacion}`)

    } catch (error) {
      console.log("ERROR");
    }
  };

  const searching = (e) => {
    setSearch(e.target.value);
  };

  //Metodo de filtrado tabla cliente
  let resultsInvoice = [];

  if (!search) {
    resultsInvoice = invoice || [];
  } else {
    resultsInvoice = invoice.filter(
      (dato) =>
        dato.identificacion &&
        dato.identificacion.toString().includes(search.toString())
    );
  }

  const deleteInvoice = async () => {
    try {
      await axios.delete(`${apiBaseBack}/deleteinvoice/${delInvoice.id_factura}`);
      // Alerta
      handleAlertDeleteInvoice();
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    getInvoice();
  }, [setInvoice]);

  const handleAlertDeleteInvoice = () => {
    toast.success('Factura eliminada con éxito.');
  };
  return (
    <>
      <ContainControls>
        <ContainMaxData>
          <Label type="select">Cantidad de registros</Label>
        </ContainMaxData>

        <ContainSearch>
          <Label className="search">Buscar: </Label>
          <Input
            value={search}
            onChange={searching}
            type="text"
            placeholder="ID Cliente"
          ></Input>
        </ContainSearch>
      </ContainControls>

      {/* Contenedor de tabla */}

      <ContainTable>
        <Table>
          <Thead>
            <Tr>
              <Th>ID Factura</Th>
              <Th>ID Cliente</Th>
              <Th>Nombres</Th>
              <Th>Apellidos</Th>
              <Th>ID Orden</Th>
              <Th>Fecha de emisión</Th>
              <Th>Total a pagar</Th>
              <Th>Estado de pago</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resultsInvoice.map((item, i) => (
              <Tr key={i}>
                <Td>{item.id_factura}</Td>
                <Td>{item.identificacion.toLocaleString()}</Td>
                <Td>{item.nombre}</Td>
                <Td>{item.apellido}</Td>
                <Td>{item.id_orden}</Td>
                <Td>{moment(item.fecha_emision).format("YYYY-MM-DD")}</Td>
                <Td>{item.cantidad_pagada.toLocaleString()}</Td>
                <Td>{item.estado_pago}</Td>
                <Td>
                  <ButtonOptions>
                    <Buttons
                      title="Eliminar producto"
                      onClick={() => {
                        setHandleDeleteInvoice(!handleDeleteInvoice); setDelInvoice(item);
                      }}
                    >
                      <i className={deletInvoice}></i>
                    </Buttons>
                    <Buttons 
                    title="Ver factura"
                    onClick={() => {
                      setHandlePdfInvoice(true);
                      getServicesClient(item);
                      createPDF(item);
                    }}
                    >
                      <i className={printInvoice}></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContainTable>

      <Modals
        status={handlePdfInvoice}
        changeStatus={setHandlePdfInvoice}
        titleModal={"Generar Pdf"}
        style={{ position: "start", width: "800px" }}
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          <ButtonPdf></ButtonPdf>
        </ContainInfoModal>
      </Modals>

      {/* Modal para el boton de eliminar */}
      <Modals
      status={handleDeleteInvoice}
      changeStatus={setHandleDeleteInvoice}
      changeposition={'start'}
      titleModal={'Elimnar factura'}
      showCloseButton={true}
      showHeader={true}
      >
        <ContainInfoModal>
          <Paragraph>¿Estás seguro de que quieres eliminar este cliente?</Paragraph>
          <ButtonDelete>
            <Btn_Delete onClick={() => {setHandleDeleteInvoice(!handleDeleteInvoice); deleteInvoice()}}>Eliminar</Btn_Delete>
          </ButtonDelete>
        </ContainInfoModal>
      </Modals>
      
      <Modals
      status={payuPay}
      changeStatus={setPayuPay}
      changeposition={'start'}
      titleModal={'Pagar factura'}
      showCloseButton={true}
      showHeader={true}
      >
        <ContainInfoModal>

        </ContainInfoModal>
      </Modals>


      <ToastContainer 
      autoClose={1000}
      hideProgressBar={true}
      />
    </>
  );
};

export default TableInvoice;