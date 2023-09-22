/*Para crear un PDF a partir del contenido de un modal en React utilizando la biblioteca pdf-lib, primero debes seguir estos pasos generales:

Diseña el contenido del modal: Asegúrate de tener el contenido que deseas incluir en el PDF dentro del modal.

Captura el contenido del modal: Utiliza JavaScript para capturar el contenido del modal. Esto implica obtener los valores de los elementos dentro del modal y organizarlos en una estructura de datos que puedas utilizar para crear el PDF.

Utiliza pdf-lib para crear el PDF: Utiliza pdf-lib para crear un nuevo documento PDF y agregar el contenido capturado del modal a ese documento.

Descarga o muestra el PDF: Puedes ofrecer al usuario la opción de descargar el PDF o mostrarlo en una nueva ventana del navegador.

A continuación, te proporcionaré un ejemplo simplificado de cómo realizar estos pasos utilizando pdf-lib:*/


import React, { useEffect, useState } from "react";
import axios from "axios";
import Modals from "../../../archive/modals";
import { PDFDocument, rgb } from 'pdf-lib';

// Función para crear un PDF a partir de los datos
const createPDF = async (data) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([400, 400]);
  const font = await pdfDoc.embedFont(PDFDocument.StandardFonts.Helvetica);

  // Organiza los datos como deseas en el PDF
  const content = `
    Id factura: ${data.id_factura}
    Identificacion: ${data.identificacion}
    Id orden: ${data.id_orden}
    Fecha de emision: ${data.fecha_emision}
    Cantidad pagada: ${data.cantidad_pagada}
    Estado de pago: ${data.estado_pago}
  `;

  page.drawText(content, {
    x: 50,
    y: 350,
    size: 14,
    font: font,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, '_blank');
};

const ModalContent = ({ data }) => {
  return (
    <div>
      <h4>Contenido del Modal</h4>
      <div>
        <p>Id factura: {data.id_factura}</p>
        <p>Identificacion: {data.identificacion}</p>
        <p>Id orden: {data.id_orden}</p>
        <p>Fecha de emision: {data.fecha_emision}</p>
        <p>Cantidad pagada: {data.cantidad_pagada}</p>
        <p>Estado de pago: {data.estado_pago}</p>
      </div>
      <button onClick={() => createPDF(data)}>Crear PDF</button>
    </div>
  );
};

const TableInvoice = ({ editInvoice, deleteInvoice, printInvoice }) => {
  const [invoice, setInvoice] = useState([]);
  const [search, setSearch] = useState("");
  const [handleFormInvoice, setHandleFormInvoice] = useState(false);
  const [handlePdfInvoice, setHandlePdfInvoice] = useState(false);
  const [invoiceId, setInvoiceId] = useState([]);
  const [save, setSave] = useState({});

  const getInvoice = async () => {
    try {
      const res = await axios.get("http://localhost:3005/factura");
      setInvoice(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getInvoiceId = async () => {
    try {
      const res = await axios.get(`http://localhost:3005/factura/${invoiceId}`);
      setSave(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getInvoice();
    getInvoiceId();
  }, [setInvoice, setSave]);

  return (
    <>
      {/* Resto de tu componente */}
      <Modals
        status={handlePdfInvoice}
        changeStatus={setHandlePdfInvoice}
        titleModal={"Generar Pdf"}
        changePosition={"start"}
        changeWidth={'800px'}
        showHeader={true}
        showCloseButton={true}
      >
        <ModalContent data={save} />
      </Modals>
    </>
  );
};

export default TableInvoice;


/*En este ejemplo, la función createPDF crea un documento PDF usando pdf-lib, agrega contenido de ejemplo (el contenido del modal) y luego muestra el PDF en una nueva ventana del navegador. Puedes personalizar esto según tus necesidades y estilos de diseño. Asegúrate de incluir la biblioteca pdf-lib en tu proyecto antes de utilizarla.
*/