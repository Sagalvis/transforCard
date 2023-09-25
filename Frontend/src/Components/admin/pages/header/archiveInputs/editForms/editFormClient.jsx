/* eslint-disable react/prop-types */
import {  useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { ContainAlert } from "../formClient";
import Alert from "@mui/material/Alert";

const EditFormClient = ({getCustomer}) => {
  const [nombre, setNombres] = useState("");
  const [apellido, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tel, setTelefono] = useState("");
  const [showAlert, setShowAlert] = useState(false);


//TREAE LOS DATOS DEL GET EN TABLACLIENT Y LOS MUESTRA EN LOS INPUTS DEL MODAL
  useEffect(() => {
    if (getCustomer) {
      setNombres(getCustomer.nombre);
      setApellidos(getCustomer.apellido);
      setCorreo(getCustomer.correo);
      setDireccion(getCustomer.direccion);
      setTelefono(getCustomer.tel)
    }
}, [getCustomer]);
  /* Funcion para crear clientes */
  const handletSumit = async (e) => {
    if (
      nombre === "" ||
      apellido === "" ||
      correo === "" ||
      direccion === "" ||
      tel === "" 
    ) {
      e.preventDefault();
      alert("Por favor llenar todos los campos");
    } else {
      await axios
        .patch(`http://localhost:3005/patchcustomer/${getCustomer.identificacion}`, {
          // eslint-disable-next-line no-undef
          nombre,
          apellido,
          correo,
          direccion,
          tel
        })
        .then((Response) => {
          console.log("actualizador",Response.data);
          setShowAlert(true)
        });
        window.location.reload();
    }

    /* Funcion que limpa los inputs */
    setNombres("");
    setApellidos("");
    setCorreo("");
    setDireccion("");
    setTelefono("");
    
  };

  return (
    <>
          <>
      {showAlert && (
        <ContainAlert>
        <Alert severity="success" color="success">
          ¡Cliente actualizado!
          </Alert>
        </ContainAlert>

      )}
      </>
      <ContainForm>
        <Form>
          <ContentInput className="display">
            <Input
              type="text"
              value={nombre}
              onChange={(e) => setNombres(e.target.value.replace(/[^a-zA-Z\s]/g, '').toLowerCase())}
              placeholder="Nombres"
              autoComplete="off"
            />
            <Input
              type="text"
              placeholder="Apellidos"
              value={apellido}
              onChange={(e) => setApellidos(e.target.value.replace(/[^a-zA-Z\s]/g, '').toLowerCase())}
              autoComplete="off"
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value.replace(/[^a-z0-9\s#.,-ñáéíóúü]/g, '').toLowerCase())}
              autoComplete="off"
            />
          </ContentInput>

          <ContentInput className="display">
            <Input
              type="tel"
              placeholder="Teléfono"
              value={tel}
              onChange={(e) => setTelefono(e.target.value.replace(/[^0-9]/g, ''))}
              maxLength={10}
              autoComplete="off"
              required
            />
          </ContentInput>
          
          <ContentInput>
            <Input
              type="email"
              placeholder="Correo electronico"
              autoComplete="off"
              value={correo}
              onChange={(e) => setCorreo(e.target.value.toLowerCase())}
              required
              maxLength={32}
            />
          </ContentInput>
        </Form>
      </ContainForm>

      <ButtonRegister>
        <BtnRegister onClick={handletSumit}>Actualizar datos</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default EditFormClient;

// Estilos de los inputs

export const ContainForm = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2%;
  border-bottom: solid 1px #e5e4e4;
`;

export const Form = styled.form`
  width: 100%;
`;

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;

  &.display {
    display: flex;
    flex-direction: row;
    gap: 3px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 2px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 15px;
  font-family: "Outfit";

  &.select-display {
    width: 50%;
  }
`;

export const Option = styled.option`
  background-color: red;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-family: "Outfit";

  &::placeholder {
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 0;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  font-family: "Outfit";
  font-size: 15px;
`;

export const ButtonRegister = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 2%;
  padding-right: 5px;
`;

export const BtnRegister = styled.button`
  display: inline-block;
  padding: 8px 30px;
  background-color: #041737;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #172b4c;
  }
  &:active {
    background-color: #041737;
  }
  &.btn_cancel {
    background-color: #dc3545;
  }
`;
