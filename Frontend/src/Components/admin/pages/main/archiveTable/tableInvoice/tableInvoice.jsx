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
  BtnPdf
} from "./styledTableInvoice";
import axios from "axios";
import Modals from "../../../archive/modals";
import { Button, ContainInfoModal, Paragraph } from "../../../header/styledHeader";
import { PDFDocument, rgb } from "pdf-lib";
import moment from "moment";
import { Btn_Delete, ButtonDelete } from "../tableClient/styledTableClient";


const ModalContent = ({ data1 }) => {

  return (
    <div>
      <>
        <h4>Modal</h4>
        <div>
          <p>Id factura: {data1.id_factura}</p>
          <p>Identificacion: {data1.identificacion}</p>
          <p>Id orden: {data1.id_orden}</p>
          <p>Fecha de emision: {moment(data1.fecha_emision).format("YYYY-MM-DD")}</p>
          <p>Estado de pago: {data1.estado_pago}</p>
          {value.map((value, i) =>{
           <div key={i}>
            <p>Servicios: {value.servicios}</p>
            <p>Precio: {value.precio}</p>
           </div>
         })}
          <p>Total pagado: {data1.cantidad_pagada}</p>
        </div>

        <BtnPdf onClick={() => createPDF(data1)}>Crear PDF</BtnPdf>
      </>
    </div>
  );
};

const TableInvoice = ({ deletInvoice, printInvoice }) => {
  const [invoice, setInvoice] = useState([]);
  // Variable de estado para filtrar busqueda
  const [search, setSearch] = useState("");
  const [handlePdfInvoice, setHandlePdfInvoice] = useState(false);
  const [save, setSave] = useState([])
  const [value, setValue] = useState([])
  const [id, setId] = useState()
  const [handleDeleteInvoice, setHandleDeleteInvoice] = useState(false)

  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  
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
      Id orden: ${data1.id_orden}
      Productos y Servicios:
      ${value.map((item) =>`   
      servicios: ${item.nombre_serv}  precios: $ ${item.precio} 
      `)}
      _________________________________________________________
      Cantidad pagada: ${data1.cantidad_pagada} $
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

  const getInvoice = async () => {
    try {
      
      const res = await axios.get(`${apiBaseBack}/factura`);
      setInvoice(res.data);
      console.log("factura",res.data[0].identificacion)
      
    } catch (error) {
      console.log(error);
    }
  };

  const getServicesClient = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3005/getServiceCliente/${item.identificacion}`)
      setValue(res.data);
      console.log("aqui vienen los servicios",res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
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
      const result = await axios.delete(`http://localhost:3005/deleteinvoice/`);
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getInvoice();
  /*   lookVal(); */
  }, [setInvoice, setSave]);

 /*  console.log(lookVal);

  const lookServices = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3005/getCallService/${id}`);
      console.log(res.data, "esto es el res");
      setValue(res.data);
     } catch (error) {
       console.log(error);
     }
  }  */

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
                        setHandleDeleteInvoice(!handleDeleteInvoice); 
                      }}
                    >
                      <i className={deletInvoice}></i>
                    </Buttons>
                    <Buttons title="Ver factura">
                      <i
                        className={printInvoice}
                        onClick={() => {
                          setHandlePdfInvoice(true);
                          getServicesClient(item);
                          createPDF(item);
                          ModalContent(item);
                        }}
                      ></i>
                    </Buttons>

                    {/* <Buttons onClick={()=>{}}>
                    </Buttons> */}
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
          <ModalContent data1={save} />
          <ButtonPdf></ButtonPdf>
        </ContainInfoModal>
      </Modals>

      {/* Modal para el boton de eliminar */}
      <Modals
      status={handleDeleteInvoice}
      changeStatus={setHandleDeleteInvoice}
      changePosition={'start'}
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
    </>
  );
};

export default TableInvoice;