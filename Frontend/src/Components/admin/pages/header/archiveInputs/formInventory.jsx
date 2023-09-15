import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Alert from '@mui/material/Alert'

const FormInventory = () => {
  const [showAlert, setShowAlert] = useState(false);

  /* Funcion para crear item */

    /* Funcion que limpa los inputs */

  return (
    <>
      {showAlert && (
        <ContainAlert>
        <Alert severity="success" color="success">
          ¡Cliente registrado!
          </Alert>
        </ContainAlert>

      )}


      <ContainForm>
        <Form>
          <ContentInput>
            <Select>
              <Option value="0">-Seleccione tipo de item-</Option>
              <Option value="product">Producto</Option>
              <Option value="service">Servicio</Option>
            </Select>
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Nombre del item"
              autoComplete="off"
              required={true}
              maxLength={20}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Código"
              autoComplete="off"
              required={true}
              maxLength={20}
            />
          </ContentInput>

          <ContentInput>
            <Select>
              <Option value="0">-Seleccione tipo de medida-</Option>
              <Option value="unit">Unidad</Option>
              <Option value="service">Servicio</Option>
              <Option value="part">Pieza</Option>
              <Option value="milliliter">Mililitro</Option>
              <Option value="gallon">Galón</Option>
              <Option value="gram">Gramo</Option>
              <Option value="kilogram">Kilogramo</Option>
              <Option value="pound">Libra</Option>
              <Option value="9">1/4</Option>
            </Select>
          </ContentInput>

          <ContentInput className="display">
          <Input className="width"
              type="text"
              placeholder="Costo(Sin impuesto)"
              autoComplete="off"
              required={true}
              maxLength={20}
            />
            <Input
              className="input-display"
              type="tel"
              placeholder="Precio venta(Sin impuesto)"
              maxLength={10}
              autoComplete="off"
              required={true}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Impuesto"
              autoComplete="off"
              required={true}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="email"
              placeholder="Precio de venta final"
              autoComplete="off"
              required={true}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </ContentInput>

          <ContentInput>
            <TextArea
            placeholder="Descripcion del item">
            </TextArea>
          </ContentInput>
        </Form>
      </ContainForm>

      <ButtonRegister className="gap">
        <BtnRegister className="btn_red">Cancelar</BtnRegister>
        <BtnRegister>Registrar</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default FormInventory;

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
  padding: 10px;
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
  /* background-color: red; */
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

  &.input-display {
    width: 50%;
  }
  &.width {
    width: 50%;
  }

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
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 2%;
  padding-right: 5px;
  &.gap {
    display: flex;
    gap: 4px;
    margin-top: 2%;
  }
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

  &.btn_red {
    background-color: #dc3545;
    &:hover {
      background-color: #c74753;
    }
  }
  &:hover {
    background-color: #172b4c;
  }
  &:active {
    background-color: #041737;
  }
`;

export const ContainAlert = styled.div`
  position: absolute;
  bottom: 86%;
  left: 25%;

`
