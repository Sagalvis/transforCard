/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Alert from '@mui/material/Alert'
import { ContainAlert } from "./formClient";

const FormVehicle = ({getCustomer3}) => {
  const [matricula, setMatricula] = useState("");
  const [tarjetaPropiedad, setTarjetaPropiedad] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");
  const [color, setColor] = useState("");
  const [vin, setVin] = useState("");
  const [observacion, setObservacion] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [tipoVehiculo, setTipo_vehiculo] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectVehicle, setSelectVehicle] = useState(0);
  
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
      selectVehicle === ""
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
          id_tipo_vehiculo: selectVehicle 
        })
        .then((Response) => {
          console.log(Response.data);
          setShowAlert(true);
        });
      window.location.reload();
    }

    /* Funcion que limpa los inputs */
    setSelectVehicle(0);
  };

  useEffect(() => {
    if (getCustomer3) {
      setIdentificacion(getCustomer3)
    }
}, [getCustomer3]);

  useEffect(()=>{
    const fetchdata = async () =>{
      const responseVehicle = await axios.get(
        "http://localhost:3005/tipovehicle"
      );
      setTipo_vehiculo(responseVehicle.data)
    }
    fetchdata();
  },[])

  return (
    <>
          {showAlert && (
        <ContainAlert>
        <Alert severity="success" color="success">
          ¡Vehiculo creado!
          </Alert>
        </ContainAlert>

      )}
      <ContainForm>
        <Form>
          <ContentInput>
            <Select value={selectVehicle}
            onChange={(e)=>setSelectVehicle(e.target.value)}
            >
              <Option>-Seleccione el tipo del vehículo-</Option>
              {tipoVehiculo.map((item, i) => (
                <Option key={i} value={item.id_tipo_vehiculo}>{item.tipoVehiculo}</Option>
              ))}
            </Select>
          </ContentInput>

          <ContentInput>
            <ShowCedula 
            value={identificacion} 
            onChange={(e)=>setIdentificacion(e.target.value)}>{identificacion}</ShowCedula>
          </ContentInput>

          <ContentInput className="display">
            <Input
            type="text" 
            placeholder="Marca" 
            value={marca}
            onChange={(e)=>setMarca(e.target.value.replace(/[^a-zA-Z\s]/g, '').toLowerCase())}
            autoComplete="off"
            maxLength={10}
            required="true"
            />

            <Input type="text" 
            placeholder="Modelo"
            value={modelo}
            onChange={(e)=>setModelo(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
            autoComplete="off" 
            maxLength={10}
            required="true"
            />
          </ContentInput>

          <ContentInput>
            <Input type="text" 
            placeholder="Año" 
            value={año}
            onChange={(e)=>setAño(e.target.value.replace(/[^0-9]/g, ''))}
            autoComplete="off"
            maxLength={4}
            required="true"
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Placa del vehículo"
              autoComplete="off"
              value={matricula}
              onChange={(e)=>setMatricula(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
              maxLength={6}
              required="true"
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="text"
              placeholder="Lic. Tránsito"
              autoComplete="off"
              value={tarjetaPropiedad}
              onChange={(e)=>setTarjetaPropiedad(e.target.value.replace(/[^0-9]/g, ''))}
              maxLength={12}
              required="true"
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Color del vehículo"
              value={color}
              onChange={(e) => setColor(e.target.value.replace(/[^a-zA-Z\s]/g, '').toLowerCase())}
              autoComplete="off"
              required="true"
              maxLength={20}
            />
          </ContentInput>

          <ContentInput>
            <Input type="text" 
            placeholder="VIN"
            value={vin}
            onChange={(e)=>setVin(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
            autoComplete="off" 
            required="true"
            maxLength={17}
            />
          </ContentInput>

          <ContentInput>
            <TextArea
              cols={50}
              rows={3}
              value={observacion}
              onChange={(e)=>setObservacion(e.target.value)}
              placeholder="Observaciones, (Estado entrante del vehículo)"
              maxLength={250}
            ></TextArea>
          </ContentInput>
        </Form>
      </ContainForm>

      <ButtonRegister>
        <BtnRegister onClick={handletSumit}>Crear vehículo</BtnRegister>
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
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 15px;
  font-family: "Outfit";
`;
export const ShowCedula = styled.div`
  /* background-color: red; */
  width: 100%;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f1f0f3;
  color: #041737;
  font-size: 17px;
  font-family: "Outfit";
  letter-spacing: 10px;
`
export const Option = styled.option``;

export const Input = styled.input`
  width: 100%;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  font-family: "Outfit";
  font-size: 15px;
  overflow-y: auto;
`;

export const ButtonRegister = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 2%;
  padding-right: 5px;
  gap: 2px;
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

  &.color-red {
    background-color: #dc3545;

    &:hover {
      background-color: #b83240;
    }
  }

  &:hover {
    background-color: #172b4c;
  }
  &:active {
    background-color: #041737;
  }
`;
