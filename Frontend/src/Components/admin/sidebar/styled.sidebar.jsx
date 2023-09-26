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
  height: 78%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
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

export const NavIcon = styled.div`
  margin: 0 10px 0 0;
`

export const NavTittle = styled.p`
  &.user-name {
    text-transform: capitalize;
  }
`;

export const ContentProfile = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 19%;
  padding: 10px;
  box-sizing: border-box;
`;

export const ContentCircle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom:10px;
`;

export const Circle = styled.div`
  /* background-color: red; */
  border: solid 1px #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;

  .fa-user {
    font-size: 15px;
    font-weight: 200;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ContentName = styled.div`
  margin-bottom:10px;
`;

export const P = styled.p`
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: 'Outfit';
  text-transform: capitalize;

  &.rol {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const ContentLogout = styled.div`
  display: flex;
  justify-content: center;
  /* background: red; */
  width: auto;
`;

export const ButtonLog = styled(Link)`
  background: none;
  /* background: blue; */
  padding: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  font-family: 'Outfit';
  font-size: 11px;
  border: solid 1px #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  text-decoration: none;
  
  &:hover{
    border: solid 1px red;
    color: red;
  }
`;