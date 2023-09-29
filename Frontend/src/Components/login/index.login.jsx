import {
  ContenLogin,
  ContainLogin,
  ContenForm,
  ContainFooterLogin,
  ContenTittle,
  Form,
  TittleLogin,
  ContenFooterLogin,
  Paragrafh,
  ContainLogo,
  ContainInputs,
  LogoLogin,
  TittleInputs,
  ContenInputs,
  ContainButton,
  ButtonLogin,
  InputBox,
  Label,
  Input,
} from "./styled.login";
import Logologin from "../../assets/svg/transforCars-01.svg";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const handleEmailChange = (e) => {
    const newEmail = e.target.value.toLowerCase().replace(/[^a-z.@]/g, "");
    setCorreo(newEmail);
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+{}[\]?~\\/-]/g, "");
    setContraseña(newPassword);
  };
  const handleKeyDownLogin = (e) => {
    if (e.key === "Enter") {
      Log();
    }
  };

  const Log = async () => {
    let result = null;
    if (correo && !contraseña) {
      alert("Por favor llenar el campo de contraseña");
    } else if (contraseña && !correo) {
      alert("Por favor llenar el campo de correo");
    } else if (correo && contraseña) {
      try {
        const response = await axios.post(
          "http://localhost:3005/postLoginEmployees",
          {
            correo: correo,
            contraseña: contraseña,
          }
        );
        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem("user", JSON?.stringify(token));
          setTimeout(() => {
            window.location.href = "http://localhost:5173/admin";
          }, 300);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert(
            "Correo y/o contraseña incorrecta. Por favor, inténtelo de nuevo."
          );
        } else {
          alert(
            "Correo y/o contraseña incorrecta. Por favor, inténtelo de nuevo."
          );
        }
      }
    } else {
      alert("Por favor, complete los campos requeridos.");
    }
    return result;
  };

  return (
    <>
    {showAlert && (
        <ContainAlert>
        <Alert severity="success" color="success">
          ¡Cliente registrado!
          </Alert>
        </ContainAlert>
      )}
      
      <ContainLogin>
        <ContenLogin>
          <ContenTittle>
            <TittleLogin>
              <Paragrafh>Sunday 9 de Septiembre-2023-1:30 AM</Paragrafh>
            </TittleLogin>
          </ContenTittle>
          <ContenForm>
            <Form>
              <ContainLogo>
                <LogoLogin src={Logologin} alt="Logologin" />
              </ContainLogo>
              <ContainInputs>
                <TittleInputs className="titulo">
                  Bienvenidos de nuevo
                </TittleInputs>
                <ContenInputs>
                  <InputBox>
                    <i className="fa-solid fa-envelope"></i>
                    <Input
                      type="email"
                      value={correo}
                      onChange={handleEmailChange}
                      autoComplete="on"
                      onKeyDown={handleKeyDownLogin}
                      required
                    />
                    <Label>Email</Label>
                  </InputBox>
                  <InputBox>
                    <i className="fa-solid fa-lock"></i>
                    <Input
                      type="password"
                      value={contraseña}
                      onChange={handlePasswordChange}
                      maxLength={20}
                      onKeyDown={handleKeyDownLogin}
                      required
                    />
                    <Label>Contraseña</Label>
                  </InputBox>
                </ContenInputs>
                <ContainButton>
                  <ButtonLogin onClick={Log}>INGRESAR</ButtonLogin>
                </ContainButton>
              </ContainInputs>
            </Form>
          </ContenForm>
          <ContainFooterLogin>
            <ContenFooterLogin>
              <Paragrafh>
                Copyright &copy; 2023 transforCAR. All Rights
              </Paragrafh>
            </ContenFooterLogin>
          </ContainFooterLogin>
        </ContenLogin>
      </ContainLogin>

    </>
  );
};

export default Login;

export const Log = async (correo, contraseña) => {
  let result = null;

  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  console.log(apiBaseBack, "😎😎😎😎😎😎🧰🧰🧰");
  const apiBaseFront = import.meta.env.VITE_URL_FRONTEND;

  if (correo && contraseña) {
    try {
      const response = await axios.post(`${apiBaseBack}/postLoginEmployees`, {
        correo: correo,
        contraseña: contraseña,
      });

      console.log(response.data, "😎😎😎");
      result = response.data;
      if (response.data === "") {
        alert("El usuario no existe");
      } else {
        localStorage.setItem("user", JSON?.stringify(result));
        setTimeout(() => {
          window.location.href = `${apiBaseFront}/admin`;
        }, 300);
      }
    } catch (error) {
      console.error(error);
      alert("Usuario y/o contraseña no válidos");
    }
  } else {
    alert(
      "Usuario y/o contraseña no ingresados, por favor ingrese los campos requeridos"
    );
  }

  return result;
};
