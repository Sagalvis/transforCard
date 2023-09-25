/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"; // Importa React
import { ButtonOptions, Buttons, ContainControls, ContainMaxData, ContainSearch, ContainTable, Input, Label, Table, Tbody, Td, Th, Thead, Tr, ButtonPdf, BtnPdf/* , ContainServices */ } from "./styledTableInvoice";
import axios from "axios";
import Modals from "../../../archive/modals";
import { ContainInfoModal } from "../../../header/styledHeader";
import { PDFDocument, rgb } from 'pdf-lib';
import moment from 'moment';

const createPDF = async (data1) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([400, 400]);
  const font = page.drawText("");
  // Utiliza CustomFontText como fuente personalizada
  // Organiza los datos como deseas en el PDF
  const content = `
    Id factura: ${data1.id_factura}
    Identificacion: ${data1.identificacion}
    Id orden: ${data1.id_orden}
    Fecha de emision: ${data1.fecha_emision}
    Cantidad pagada: ${data1.cantidad_pagada}
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
  window.location.reload();
};

const ModalContent = ({ data1 }) => {
  console.log("clg modals", data1);
  return (
    <div>
      <>
        <h4>Modal</h4>
        <div>
          <p>Id factura: {data1.id_factura}</p>
          <p>Identificacion: {data1.identificacion}</p>
          <p>Id orden: {data1.id_orden}</p>
          <p>Fecha de emision: {data1.fecha_emision}</p>
          <p>Cantidad pagada: {data1.cantidad_pagada}</p>
          <p>Estado de pago: {data1.estado_pago}</p>
        </div> 
        <BtnPdf onClick={() => createPDF(data1)}>Crear PDF</BtnPdf>
      </>
    </div>
  );
};

const TableInvoice = ({ editInvoice, deleteInvoice, printInvoice }) => {
  // Variable de estado para traer toda la tabla inventario
  const [invoice, setInvoice] = useState([]);
  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState("");
  const [handleFormInvoice, setHandleFormInvoice] = useState(false);
  const [handlePdfInvoice, setHandlePdfInvoice] = useState(false);
  const [save, setSave] = useState([])

  //Funcion para traer los datos de la factura
  const getInvoice = async () => {
    try {
      const res = await axios.get("http://localhost:3005/factura");
      setInvoice(res.data);
      console.log("factura",res.data)
    } catch (error) {
      console.log(error);
    }
  };

  //Funcion para elimiar la factura
  /* const DeleteFactura = () =>{
    try {
      await axios.delete()
    } catch (error) {
      
    }
  } */


  //Función de busqueda
  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //Metodo de filtrado tabla facturación
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


  useEffect(() => {
    getInvoice();
  }, [setSave]);

  return (
    <>
      {/* Controladores */}

      <ContainControls>
        {/* Control "CANTIDAD DE REGISTROS" */}
        <ContainMaxData>
          <Label type="select">Cantidad de registros</Label>
        </ContainMaxData>

        {/* BUSCADOR */}
        <ContainSearch>
          <Label className="search">Buscar: </Label>
          <Input
            value={search}
            onChange={searching}
            type="text"
            title="Buscar cliente"
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
              <Th>ID Orden</Th>
              <Th>Fecha de emision</Th>
              <Th>Cantidad pagada</Th>
              <Th>Estado de pago</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resultsInvoice.map((item, i) => (
              <Tr key={i}>
                <Td>{item.id_factura}</Td>
                <Td>{item.identificacion}</Td>
                <Td>{item.id_orden}</Td>
                <Td>{moment(item.fecha_emision).format("YYYY-MM-DD")}</Td>
                <Td>{item.cantidad_pagada}</Td>
                <Td>{item.estado_pago}</Td>

                <Td>
                  <ButtonOptions>
                    <Buttons
                      onClick={() => setHandleFormInvoice(!handleFormInvoice)}
                      title="Editar producto"
                    >
                      <i className={editInvoice}></i>
                    </Buttons>
                    <Buttons title="Eliminar producto"
                    /* onClick={DeleteFactura} */
                    >
                      <i className={deleteInvoice}></i>
                    </Buttons>
                    <Buttons title="Ver factura">
                      <i
                        className={printInvoice}
                        onClick={() => {
                          setHandlePdfInvoice(true);
                          createPDF(item);
                          ModalContent(item);
                        }}
                      ></i>
                    </Buttons>
                  </ButtonOptions>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContainTable>

      <Modals
        status={handleFormInvoice}
        changeStatus={setHandleFormInvoice}
        titleModal={"Editar item"}
        changePosition={'start'}
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          <h5>aqui va el formulario de edit.</h5>
        </ContainInfoModal>
      </Modals>

      <Modals
        status={handlePdfInvoice}
        changeStatus={setHandlePdfInvoice}
        titleModal={"Generar Pdf"}
        changePosition={'start'}
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          <ModalContent data1={save} />
          <ButtonPdf></ButtonPdf>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default TableInvoice;
