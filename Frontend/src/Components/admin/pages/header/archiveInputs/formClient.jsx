import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const FormClient = () => {
  const [identification, setIdentificacion] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [barrio, setBarrio] = useState("");
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  /* Funcion para crear clientes */
  const handletSumit = async () => {
    const emptyFields = [];

  if (identification === "") {
    emptyFields.push("Documento");
  }

  if (nombres === "") {
    emptyFields.push("Nombres");
  }

  if (apellidos === "") {
    emptyFields.push("Apellidos");
  }

  if (correo === "") {
    emptyFields.push("E-mail");
  }

  if (direccion === "") {
    emptyFields.push("Dirección");
  }

  if (barrio === "") {
    emptyFields.push("Barrio");
  }

  if (telefono === "") {
    emptyFields.push("Teléfono");
  }

  if (emptyFields.length > 0) {
    const emptyFieldsMessage = `El campo (${emptyFields.join(", ")}) se encuentra vacio.`;
    toast.warning(emptyFieldsMessage);
    } else {
      await axios.post(`${apiBaseBack}/postcustomer`, {
        identificacion: identification,
        nombre: nombres,
        apellido: apellidos,
        correo: correo,
        direccion: direccion,
        barrio: barrio,
        tel: telefono,
      });
      handleAlert();
      setTimeout(() => {
        window.location.reload();
      }, 900);
    }
  };

  const handleAlert = () => {
    toast.success("Cliente registrado con éxito.");
  };
  return (
    <>
      <ContainForm>
        <Form>
          <ContentInput>
            <Input
              type="text"
              value={nombres}
              onChange={(e) =>
                setNombres(
                  e.target.value.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
                )
              }
              placeholder="Nombres"
              autoComplete="off"
              required
              maxLength={20}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) =>
                setApellidos(
                  e.target.value.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
                )
              }
              autoComplete="off"
              required
              maxLength={20}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Documento"
              value={identification}
              onChange={(e) =>
                setIdentificacion(e.target.value.replace(/[^0-9]/g, ""))
              }
              maxLength={10}
              autoComplete="off"
              required
            />
          </ContentInput>

          <ContentInput className="display">
            <Input
              className="input-display"
              type="tel"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) =>
                setTelefono(e.target.value.replace(/[^0-9]/g, ""))
              }
              maxLength={10}
              autoComplete="off"
              required
            />
            <Input
              className="input-display"
              type="text"
              placeholder="Barrio"
              value={barrio}
              onChange={(e) =>
                setBarrio(
                  e.target.value
                    .replace(/[^a-z0-9\s#.,-ñáéíóúü]/g, "")
                    .toLowerCase()
                )
              }
              autoComplete="off"
              required
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) =>
                setDireccion(
                  e.target.value
                    .replace(/[^a-z0-9\s#.,-ñáéíóúü]/g, "")
                    .toLowerCase()
                )
              }
              autoComplete="off"
              required
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="email"
              placeholder="E-mail"
              autoComplete="off"
              value={correo}
              onChange={(e) => setCorreo(e.target.value.toLowerCase())}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </ContentInput>
        </Form>
      </ContainForm>

      <ButtonRegister>
        <BtnRegister onClick={handletSumit}>Registrar</BtnRegister>
      </ButtonRegister>

      <ToastContainer
      autoClose={1000}
      hideProgressBar={true}
      />
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
  overflow-y: auto;
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
