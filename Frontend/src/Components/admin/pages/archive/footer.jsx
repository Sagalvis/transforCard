import { ContainFooter, Copyright, FootText, Tag_P_Copy } from "./styledFooter";


const Footer = ({copyright, welcome}) => {
  return (
    <>
    <ContainFooter>
      {/* Contenedor text Copyright */}
      <Copyright>
        <Tag_P_Copy>{copyright}</Tag_P_Copy>
      </Copyright>

      <FootText>
        <Tag_P_Copy>{welcome}</Tag_P_Copy>
      </FootText>
    </ContainFooter>
    </>
  );
}

export default Footer;
