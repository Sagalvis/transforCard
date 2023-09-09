import { ContainFooter, Copyright, FootText, Tag_P_Copy } from "./styledFooter";


const Footer = () => {
  return (
    <>
    <ContainFooter>
      {/* Contenedor text Copyright */}
      <Copyright>
        <Tag_P_Copy>Aqui va el texto de copyright</Tag_P_Copy>
      </Copyright>

      <FootText>
        <Tag_P_Copy>Bienvenido a transforCar 💚</Tag_P_Copy>
      </FootText>
    </ContainFooter>
    </>
  );
}

export default Footer;
