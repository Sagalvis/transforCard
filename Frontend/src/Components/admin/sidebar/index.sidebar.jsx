import { ButtonNarbar1 } from "./archive/arrayNavbar";
import {
  ContaiSidebar,
  ContainAll,
  ContainLogo,
  ContainPerfil,
  ContenPerfil,
  LogoSidebar,
  NavConten,
  NavIcon,
  NavLinks,
  NavTittle,
  Navbar,
  NavbarContain,
} from "./styled.sidebar";
import Logo from "../../../assets/svg/transforCars-01.svg";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const {pathname} = useLocation();
  return (
    <ContaiSidebar>
      <ContainAll>
        <ContainLogo>
          <LogoSidebar src={Logo} alt="logo-sidebar" />
        </ContainLogo>

        <Navbar>
          <NavbarContain>
            {ButtonNarbar1.map((item) => (
              <NavConten key={item.id}
              $isactive={pathname === item.to}
              >
                <NavLinks to={item.to} 
                $isactive={pathname === item.to}>
                  <NavIcon> {item.icon} </NavIcon>
                  <NavTittle>{item.title}</NavTittle>
                </NavLinks>
              </NavConten>
            ))}
          </NavbarContain>
          <ContainPerfil>
            <ContenPerfil>
              <NavIcon>
                <i className="fa-solid fa-user"></i>
              </NavIcon>
              <NavTittle>Sergio Andrés Galvis Smith</NavTittle>
            </ContenPerfil>
            <ContenPerfil style={{ display: "flex", justifyContent: "center" }}>
              <NavIcon style={{color:"red"}}>
                <i className="fa-solid fa-power-off"></i>
              </NavIcon>
              <NavTittle>Administrador</NavTittle>
            </ContenPerfil>
          </ContainPerfil>
        </Navbar>
      </ContainAll>
    </ContaiSidebar>
  );
};

export default Sidebar;
