import { ButtonNarbar1 } from "./archive/arrayNavbar";
import {
  ButtonLog,
  Circle,
  ContaiSidebar,
  ContainAll,
  ContainLogo,
  ContentCircle,
  ContentLogout,
  ContentName,
  ContentProfile,
  Image,
  LogoSidebar,
  NavConten,
  NavIcon,
  NavLinks,
  NavTittle,
  Navbar,
  NavbarContain,
  P,
} from "./styled.sidebar";
import Logo from "../../../assets/svg/transforCars-01.svg";
import jwt_decode from "jwt-decode"
import { useLocation  } from "react-router-dom";
import { useEffect } from "react"
import profile from '../../../assets/img/Imagen de WhatsApp 2023-09-26 a las 15.23.58.jpg'


const Sidebar = () => {

 

  const { pathname } = useLocation();
  const useData = jwt_decode (localStorage.getItem("user"));
  console.log(useData)
  var apiBaseFront = import.meta.env.VITE_URL_FRONTEND;

  const logOut = () => { 
    console.log(apiBaseFront, '😎😎😎😎😎😎🧰🧰🧰');
    localStorage.removeItem("user"); 
    window.location.href =`${apiBaseFront}`
    console.log();
  }
  useEffect(() => {
    if (!useData){
      console.log(apiBaseFront, '😎😎😎😎😎😎🧰🧰🧰');
      window.location.href =`${apiBaseFront}/admin`
    }
  },[useData]);
  return (
    <ContaiSidebar>
      <ContainAll>
        <ContainLogo>
          <LogoSidebar src={Logo} alt="logo-sidebar" />
        </ContainLogo>

        <Navbar>
          <NavbarContain>
            {ButtonNarbar1.map((item) => (
              <NavConten key={item.id} $isactive={pathname === item.to}>
                <NavLinks to={item.to} $isactive={pathname === item.to}>
                  <NavIcon> {item.icon} </NavIcon>
                  <NavTittle>{item.title}</NavTittle>
                </NavLinks>
              </NavConten>
            ))}
          </NavbarContain>

          <ContentProfile>

            <ContentCircle>
            <Circle>
              <Image src={profile} alt="" />
            </Circle>
            </ContentCircle>

            <ContentName>
              <P>{useData.nombre} {useData.apellido}</P>
              <P className="rol">{useData.rol}</P>
            </ContentName>

            <ContentLogout onClick={logOut}>
              <ButtonLog>Cerrar sesión</ButtonLog>
            </ContentLogout>
          </ContentProfile>
        </Navbar>
      </ContainAll>
    </ContaiSidebar>
  );
};

export default Sidebar;
