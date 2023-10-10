/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const EditFormVehicle = ({ getVehicle }) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");
  const [color, setColor] = useState("");
  const [tarjetaPropiedad, setTpropiedad] = useState("");
  const [placa, setPlaca] = useState("");
  const [vin, setVin] = useState("");

  //TREAE LOS DATOS DEL GET EN TABLACLIENT Y LOS MUESTRA EN LOS INPUTS DEL MODAL
  useEffect(() => {
    if (getVehicle) {
      setPlaca(getVehicle.matricula);
      setTpropiedad(getVehicle.tarjetaPropiedad);
      setMarca(getVehicle.marca);
      setModelo(getVehicle.modelo);
      setAño(getVehicle.año);
      setColor(getVehicle.color);
      setVin(getVehicle.vin);
    }
  }, [getVehicle]);
  /* Funcion para crear clientes */
  const handletSumit = async () => {
    if (
      marca === "" ||
      modelo === "" ||
      año === "" ||
      color === "" ||
      tarjetaPropiedad === ""
    ) {
      // e.preventDefault();
      toast.warning('Favor llenar todos los campos requeridos.');
    } else {
      await axios
        .patch(`http://localhost:3005/patchvehicle/${getVehicle.matricula}`, {
          // eslint-disable-next-line no-undef
          tarjetaPropiedad,
          marca,
          modelo,
          año,
          color,
          vin,
        })
        .then((Response) => {
          console.log("actualizador", Response.data);
        });
        setTimeout(() => {
          window.location.reload();          
        }, 1000);
    }
  };

  const handleAlertUpdate = () => {
    toast.success('Vehículo actualizado con éxito.')
  };

  return (
    <>
      <ContainForm>
        <Form>
          <ContentInput className="display">
            <Input
              className="matricula"
              type="text"
              placeholder="Placa del vehículo"
              value={placa}
              onChange={(e) =>
                setPlaca(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))
              }
              autoComplete="off"
              maxLength={6}
              required="true"
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="text"
              placeholder="Tarjeta propiedad"
              value={tarjetaPropiedad}
              onChange={(e) =>
                setTpropiedad(e.target.value.replace(/[^0-9]/g, ""))
              }
              autoComplete="off"
              maxLength={12}
              required="true"
            />
          </ContentInput>
          <ContentInput className="display">
            <Input
              type="text"
              placeholder="Marca"
              value={marca}
              onChange={(e) =>
                setMarca(
                  e.target.value.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
                )
              }
              maxLength={10}
              autoComplete="off"
              required="true"
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="text"
              placeholder="Modelo"
              autoComplete="off"
              value={modelo}
              onChange={(e) =>
                setModelo(
                  e.target.value.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
                )
              }
              required="true"
              maxLength={10}
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="text"
              placeholder="Año"
              autoComplete="off"
              value={año}
              onChange={(e) => setAño(e.target.value.replace(/[^0-9]/g, ""))}
              required="true"
              maxLength={4}
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="text"
              placeholder="Color del vehículo"
              autoComplete="off"
              value={color}
              onChange={(e) =>
                setColor(
                  e.target.value.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
                )
              }
              required="true"
              maxLength={20}
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="text"
              placeholder="VIN"
              autoComplete="off"
              value={vin}
              onChange={(e) =>
                setVin(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))
              }
              required="true"
              maxLength={17}
            />
          </ContentInput>
        </Form>
      </ContainForm>
      <ButtonRegister>
        <BtnRegister onClick={() => {handletSumit(); handleAlertUpdate();}}>Actualizar datos</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default EditFormVehicle;

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
  text-transform: uppercase;

  &::placeholder {
    font-size: 15px;
    text-transform: none;
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
