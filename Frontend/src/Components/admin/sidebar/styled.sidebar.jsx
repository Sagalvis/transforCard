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
  /* background-color: red; */
  width: 100%;
  height: 10%;
  border-bottom: 1px solid  #12213b;

`
export const LogoSidebar = styled.img`
  width: 200px;
  height: 100%;
`
export const Navbar = styled.div`
/* background-color: #b7ff00; */
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#f1f0f3;
`

export const NavbarContain = styled.div`
  /* background-color: black; */
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid  #12213b;
`

export const NavConten = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px 0;
  :hover {
    color: #64CCC5;
  }
  transition: all .5s ease;
`;
export const NavLinks = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ $isactive }) => $isactive ? '#64CCC5' : 'white'};
  text-decoration: none;

`

export const NavIcon = styled.p`
  margin: 0 10px 0 0;
`

export const NavTittle = styled.p`

`

export const ContainPerfil = styled.div`
  /* background-color: rebeccapurple; */
  width: 100%;
  height: 15%;

`
export const ContenPerfil = styled.div`
  /* background-color: red; */
  width: 100%;
  color: #64CCC5;
  display: flex;
  align-items: center;
`