import { Button, ContainInp, ContainRoute, ContentNav, HHHe2, Infovehiculo, Input, Label, Nav, Span, TitleDocument, TitleP } from "./styledCheckClient";
import Footer from '../../admin/pages/footer/footer'
import { ContainMain } from "../../admin/pages/main/styledMain";

const CheckClient = () => {

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, '');
}

  return (
    <>
    <ContentNav>
      <Nav>
        <HHHe2><Span>Transfor</Span>CARS</HHHe2>
        <TitleP className="trust">tu taller de confianza</TitleP>
      </Nav>
    </ContentNav>

      <ContainMain>

      <ContainRoute>
        <Infovehiculo>
          <TitleDocument>
            <TitleP>Ingrese por favor el número de documento</TitleP>
          </TitleDocument>

          <ContainInp>
            <Label htmlFor="documento">Documento:</Label>
            <Input
              type="text"
              required
              autoComplete='off'
              onInput={(evt) => acceptNum(evt)}
              minLength={4}
              maxLength={15}
              placeholder="Ingrese su documento"
            />
          </ContainInp>
            <Button>Buscar</Button>
        </Infovehiculo>
      </ContainRoute>

      <TitleP className="red">NOTA: Para conocer el estado de tu vehículo puedes ingresar tu numero de identificación.</TitleP>
      
      </ContainMain>

      {/* <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'
      /> */}
    </>
  );
}

export default CheckClient;