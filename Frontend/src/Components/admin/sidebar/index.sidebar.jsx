import { ButtonNarbar1 } from "./archive/arrayNavbar";
import {
  ContaiSidebar,
  ContainAll,
  ContainLogo,
  NavConten,
  NavIcon,
  NavLinks,
  NavTittle,
  Navbar,
  NavbarContain,
} from "./styled.sidebar";

const Sidebar = () => {
  return (
    <ContaiSidebar>
      <ContainAll>

      
      <ContainLogo></ContainLogo>

      <Navbar>
        <NavbarContain>
          {ButtonNarbar1.map((item) => (
            <NavConten key={item.id}>
              <NavLinks to={item.to}>
                <NavIcon> {item.icon} </NavIcon>
                <NavTittle>{item.title}</NavTittle>
              </NavLinks>
            </NavConten>
          ))}
        </NavbarContain>
      </Navbar>
      </ContainAll>
    </ContaiSidebar>
  );
};

export default Sidebar;
