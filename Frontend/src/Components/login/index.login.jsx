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
  ButtonPassword,
} from "./styled.login";
import Logologin from "../../assets/svg/transforCars-01.svg";
import { useState } from "react";
import axios from "axios";
import Modals from '../admin/pages/archive/modals'
import { ContainInfoModal, Paragraph } from "../admin/pages/header/styledHeader";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [handleOpenForgetPassword, setHandleOpenForgetPassword] = useState(false);
  const handleEmailChange = (e) => {
    const newEmail = e.target.value.toLowerCase().replace(/[^a-z.@]/g, "");
    setCorreo(newEmail);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      Log();
    }
  };
  const Log = async () => {
    
    let result = null;
  
    if (correo && contraseña) {
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
          alert("Correo y/o contraseña incorrecta. Por favor, inténtelo de nuevo.");
        } else {
          alert(
            "Correo y/o contraseña incorrecta. Por favor, inténtelo de nuevo."
          );
        }
      }
    } else {
      alert(
        "Correo y/o contraseña no ingresados. Por favor, complete los campos requeridos."
      );
    }
    return result;
  };
  return (
    <>
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
                    onChange={handleEmailChange}
                    autoComplete="on"
                    onKeyDown={handleKeyDown}
                    required
                  />
                  <Label>Email</Label>
                </InputBox>
                <InputBox>
                  <i className="fa-solid fa-lock"></i>
                  <Input
                    type="password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value.replace(/[^0-9]/g, ''))}
                    onKeyDown={handleKeyDown}
                    required
                  />
                  <Label>Contraseña</Label>
                </InputBox>
              </ContenInputs>
              <ContainButton>
                  <ButtonLogin
                        onClick={Log}>INGRESAR
                  </ButtonLogin>
              </ContainButton>
            </ContainInputs>
            <ContenParagrafh>
              <ButtonPassword onClick={() => setHandleOpenForgetPassword(!handleOpenForgetPassword)}>
                ¿Problemas para acceder?
              </ButtonPassword>
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

    {/* Modal para el boton de olvido su contraseña */}

    <Modals
    status={handleOpenForgetPassword}
    changeStatus={setHandleOpenForgetPassword}
    showCloseButton={true}
    showHeader={true}
    titleModal={'Ayuda de soporte'}
    >
      <ContainInfoModal>
        <Paragraph>[Aqui texto]</Paragraph>
      </ContainInfoModal>
    </Modals>
  </>
  );
};

export default Login;



