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
  ContenParagrafh,
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
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    Log(correo, contraseña, evt);
  }
  
  return (
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
              <TittleInputs className="titulo">Bienvenidos de nuevo</TittleInputs>
              <ContenInputs>
                <InputBox>
                  <i className="fa-solid fa-envelope"></i>
                  <Input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value.toLowerCase())}
                    autoComplete="off"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  />
                  <Label>Email</Label>
                </InputBox>
                <InputBox>
                  <i className="fa-solid fa-lock"></i>
                  <Input
                    type="password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value.replace(/[^0-9]/g, ''))}
                    required
                  />
                  <Label>Contraseña</Label>
                </InputBox>
              </ContenInputs>
              <ContainButton>
                  <ButtonLogin
                        onClick={handleSubmit}>INGRESAR
                  </ButtonLogin>
              </ContainButton>
            </ContainInputs>
            <ContenParagrafh>
              <Paragrafh style={{ color: "white" }}>
                ¿Olvidaste tu contraseña ?
              </Paragrafh>
            </ContenParagrafh>
          </Form>
        </ContenForm>
        <ContainFooterLogin>
          <ContenFooterLogin>
            <Paragrafh>Copyright &copy; 2023 transforCAR. All Rights</Paragrafh>
          </ContenFooterLogin>
        </ContainFooterLogin>
      </ContenLogin>
    </ContainLogin>
  );
};

export default Login;



export const Log = async (correo, contraseña) => {
  let result = null;

  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  console.log(apiBaseBack, '😎😎😎😎😎😎🧰🧰🧰'); 
  const apiBaseFront = import.meta.env.VITE_URL_FRONTEND; 

  if (correo && contraseña) {
    try {
      const response = await axios.post(
        `${apiBaseBack}/postLoginEmployees`,
        {
          correo: correo,
          contraseña: contraseña,
        }
      );

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