import { ContainFooter, Copyright, FootText, Tag_P_Copy } from "./styledFooter";


const Footer = () => {
  return (
    <>
    <ContainFooter>
      {/* Contenedor text Copyright */}
      <Copyright>
        <Tag_P_Copy>Copyright &copy; 2023 Transfor CARS. All Rights</Tag_P_Copy>
      </Copyright>

      <FootText>
        <Tag_P_Copy>Te damos la bienvenida en transforCar 💚</Tag_P_Copy>
      </FootText>
    </ContainFooter>
    </>
  );
}

export default Footer;
