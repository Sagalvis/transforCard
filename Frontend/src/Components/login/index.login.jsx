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
/*   ButtonPassword, */
} from "./styled.login";
import Logologin from "../../assets/svg/transforCars-01.svg";
import { useState } from "react";
import axios from "axios";
/* import Modals from "../admin/pages/archive/modals";
import { ContainInfoModal } from "../admin/pages/header/styledHeader"; */
/* import {
  BtnRegister,
  ContentInput,
} from "../admin/pages/header/archiveInputs/formStaff"; */
/* import emailjs from "@emailjs/browser"; */
const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
/*   const [handleOpenSupport, setHandleOpenSupport] = useState(false); */
/*   const [validationCorreo, setValidationCorreo] = useState(""); */
  const handleEmailChange = (e) => {
    const newEmail = e.target.value.toLowerCase().replace(/[^a-z.@]/g, "");
    setCorreo(newEmail);
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
/*   const handleKeyDownSuport = (e) => {
    if (e.key === "Enter") {
      ValidationCorreoSoporte();
    }
  }; */
/*   const ValidationCorreoSoporte = async () => {
    if (!validationCorreo) {
      alert("Por favor llenar los campos requeridos");
    } else {
      try {
        const results = await axios.post(
          "http://localhost:3005/validacioncorreo",
          {
            correo: validationCorreo,
          }
        );
        if (results.status === 200) {
          alert("El correo sí existe");
          sendEmail(validationCorreo);
        }
      } catch (error) {
        alert("No se encuentra registrado");
      }
    }
  }; */

/*   const sendEmail = (user_name) => {
    const templateParams = {
      to_email: user_name,
    };

    emailjs.send("service_i2vcjs8","template_awfdivp",templateParams,"1xoGXbVmimfJFEmQ-")
      .then((response) => {
        console.log("Correo electrónico enviado con éxito:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
  }; */

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
                      onChange={(e) =>
                        setContraseña(e.target.value)}
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
              <ContenParagrafh>
{/*                 <ButtonPassword
                  onClick={() => setHandleOpenSupport(!handleOpenSupport)}
                >
                  ¿Problemas para acceder?
                </ButtonPassword> */}
              </ContenParagrafh>
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

      {/* Modal para el boton de pedir soporte */}

{/*       <Modals
        status={handleOpenSupport}
        changeStatus={setHandleOpenSupport}
        showCloseButton={true}
        showHeader={true}
        titleModal={"Ayuda de soporte"}
      >
        <ContainInfoModal>
          <ContentInput>
            <Paragrafh>
              Ingresar correo electronico para solicitar ayuda de soporte
            </Paragrafh>
            <Input
              className="soporte"
              name="user_email"
              value={validationCorreo}
              onChange={(e) => setValidationCorreo(e.target.value)}
              onKeyDown={handleKeyDownSuport}
              placeholder="Correo electronico"
            />
          </ContentInput>
          <BtnRegister onClick={ValidationCorreoSoporte}>Enviar</BtnRegister>
        </ContainInfoModal>
      </Modals> */}
    </>
  );
};

export default Login;
