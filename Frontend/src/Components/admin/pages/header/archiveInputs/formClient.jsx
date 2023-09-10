import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormClient = () => {
  const [identificacion, setIdentificacion] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  const handletSumit = async (e) => {
    if (
      identificacion === "" ||
      nombres === "" ||
      apellidos === "" ||
      correo === "" ||
      direccion === "" ||
      telefono === ""
    ) {
      e.preventDefault();
      alert("Por favor llenar todos los campos");
    } else {
      await axios
        .post("http://localhost:3005/postcustomer", {
          identificacion: identificacion,
          name: nombres,
          last_name: apellidos,
          email: correo,
          adress: direccion,
          phone: telefono,
        })
        .then((Response) => {
          console.log(Response.data);
          alert("Cliente registrado");
        });
    }
  };
  return (
    <>
      <ContainForm>
        <Form>
          <ContentInput>
            <Select>
              <Option value="0">-Seleccione tipo de persona-</Option>
              {/* <Option value="company">EMPRESA</Option> */}
              <Option value="person">PERSONA</Option>
            </Select>
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Nombres" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Apellidos" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Documento" autoComplete="off" />
          </ContentInput>

          <ContentInput className="input-display">
            <Select className="select-display">
              <Option value="0">-Seleccione su país-</Option>
            </Select>
            <Input
              className="input-display"
              type="tel"
              placeholder="Telefono"
              autoComplete="off"
            />
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Dirección" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input
              type="email"
              placeholder="Correo electronico"
              autoComplete="off"
              required
            />
          </ContentInput>

          {/* <ContentInput>
<TextArea cols={30} rows={5} placeholder="Observaciones"></TextArea>
</ContentInput> */}
        </Form>
      </ContainForm>

      <ButtonRegister>
        <BtnRegister onClick={handletSumit}>Registrar</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default FormClient;

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

  &.input-display {
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

  &.select-display {
    width: 50%;
  }
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
