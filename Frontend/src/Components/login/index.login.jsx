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

const Login = () => {
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
              <TittleInputs>Bienvenido de nuevo</TittleInputs>
              <ContenInputs>
                <InputBox>
                  <i className="fa-solid fa-envelope"></i>
                  <Input type="email" required />
                  <Label>Email</Label>
                </InputBox>
                <InputBox>
                  <i className="fa-solid fa-lock"></i>
                  <Input type="password" required />
                  <Label>Contraseña</Label>
                </InputBox>
              </ContenInputs>
              <ContainButton>
                <ButtonLogin>Ingresar</ButtonLogin>
              </ContainButton>
            </ContainInputs>
            <ContenParagrafh>
              <Paragrafh style={{color:"white"}}>¿Olvidaste tu contraseña ?</Paragrafh>
            </ContenParagrafh>
          </Form>
        </ContenForm>
        <ContainFooterLogin>
          <ContenFooterLogin>
            <Paragrafh>Copyright 2023 Todos los derechos reservados</Paragrafh>
          </ContenFooterLogin>
        </ContainFooterLogin>
      </ContenLogin>
    </ContainLogin>
  );
};

export default Login;
