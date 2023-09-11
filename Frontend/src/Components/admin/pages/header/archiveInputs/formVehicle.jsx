import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const FormVehicle = () => {
  const [matricula, setMatricula] = useState("");
  const [tarjetaPropiedad, setTarjetaPropiedad] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");
  const [color, setColor] = useState("");
  const [vin, setVin] = useState("");
  const [observacion, setObservacion] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [tipo_vehiculo, setTipo_vehiculo] = useState("");
  
  /* Funcion para crear vehiculos */
  const handletSumit = async (e) => {
    if (
      matricula === "" ||
      tarjetaPropiedad === "" ||
      marca === "" ||
      modelo === "" ||
      año === "" ||
      color === "" ||
      vin === "" ||
      observacion === "" ||
      identificacion === "" ||
      tipo_vehiculo === ""
    ) {
      e.preventDefault();
      alert("Por favor llenar todos los campos");
    } else {
      await axios
        .post("http://localhost:3005/postvehicle", {
          matricula: matricula,
          tarjetaPropiedad: tarjetaPropiedad,
          marca: marca,
          modelo: modelo,
          año: año,
          color: color,
          vin: vin,
          observacion: observacion,
          identificacion: identificacion,
          id_tipo_vehiculo: tipo_vehiculo 
        })
        .then((Response) => {
          console.log(Response.data);
          alert("Vehiculo registrado");
        });
      window.location.reload();
    }

    /* Funcion que limpa los inputs */
  };

  return (
    <>
      <ContainForm>
        <Form>
          <ContentInput>
            <Select>
              <Option value="0">-Seleccione el tipo del vehiculo-</Option>
              <Option value="bike">Moto</Option>
              <Option value="car">Carro</Option>
            </Select>
          </ContentInput>

          <ContentInput>
            <Input type="text" 
            placeholder="Cedula"
            value={identificacion}
            onChange={(e)=>setIdentificacion(e.target.value)}
            autoComplete="off" />
          </ContentInput>

          <ContentInput className="display">
            <Input type="text" 
            placeholder="Marca" 
            value={marca}
            onChange={(e)=>setMarca(e.target.value)}
            autoComplete="off" />
            <Input type="text" 
            placeholder="Modelo"
            value={modelo}
            onChange={(e)=>setModelo(e.target.value)}
            autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" 
            placeholder="Año" 
            value={año}
            onChange={(e)=>setAño(e.target.value)}
            autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Placa del vehículo"
              autoComplete="off"
              value={matricula}
              onChange={(e)=>setMatricula(e.target.value)}
              required
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="text"
              placeholder="Tarjeta de propiedad"
              autoComplete="off"
              value={tarjetaPropiedad}
              onChange={(e)=>setTarjetaPropiedad(e.target.value)}
              required
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Color del vehículo"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              autoComplete="off"
              required
            />
          </ContentInput>

          <ContentInput>
            <Input type="tel" 
            placeholder="VIN"
            value={vin}
            onChange={(e)=>setVin(e.target.value)}
            autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" 
            placeholder="tipo vehiculo"
            value={tipo_vehiculo}
            onChange={(e)=>setTipo_vehiculo(e.target.value)}
            autoComplete="off" />
          </ContentInput>
          <ContentInput>
            <TextArea
              cols={30}
              rows={5}
              value={observacion}
              onChange={(e)=>setObservacion(e.target.value)}
              placeholder="Observaciones (Estado entrante del vehículo)"
            ></TextArea>
          </ContentInput>


        </Form>
      </ContainForm>

      <ButtonRegister>
        <BtnRegister onClick={handletSumit}>Registrar</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default FormVehicle;

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

  &.age-gender {
    display: flex;
    flex-direction: row;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 2px;
  border-radius: 3px;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 15px;
  font-family: "Outfit";
`;

export const Option = styled.option``;

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
`;
