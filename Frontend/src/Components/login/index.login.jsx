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
import { Log } from "../../contexts/authcontexts";

// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  
  const handleLogin = (evt) => {
    evt.preventDefault();
    Log(correo, contraseña);
  };
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
              <TittleInputs>Bienvenidos de nuevo</TittleInputs>
              <ContenInputs>
                <InputBox>
                  <i className="fa-solid fa-envelope"></i>
                  <Input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                  <Label>Email</Label>
                </InputBox>
                <InputBox>
                  <i className="fa-solid fa-lock"></i>
                  <Input
                    type="password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    required
                  />
                  <Label>Contraseña</Label>
                </InputBox>
              </ContenInputs>
              <ContainButton>
                <ButtonLogin onClick={handleLogin}>Ingresar</ButtonLogin>
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

