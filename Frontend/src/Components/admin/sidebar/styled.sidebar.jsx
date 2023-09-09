import styled from 'styled-components';
import {Link} from "react-router-dom"
export const ContaiSidebar = styled.div`
  width: 325px;
  height: 100%;
  background-color: #041737;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainAll = styled.div`
  /* background-color: black; */
  width: 85%;
  height: 100%;
`
export const ContainLogo = styled.div`
/*   background-color: red; */
  width: 100%;
  height: 10%;
  border-bottom: 1px solid  #e5e4e4;
`
export const Navbar = styled.div`
/* background-color: #b7ff00; */
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#f1f0f3;
`

export const NavbarContain = styled.div`
  background-color: black;
  width: 85%;
  height: 50%;
`
export const NavConten = styled.div`
  /* background-color: red; */
`
export const NavLinks = styled(Link)`
  
`

export const NavIcon = styled.p`
  
`

export const NavTittle = styled.p`
  
`