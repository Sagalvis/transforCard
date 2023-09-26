
const Forbidden = () => {
  return ( 
    <>
    <NotFound title='403'>
      <Pf className='_404'>403</Pf>
      <Pf className='text'>
        No tienes los permisos suficientes para acceder a esta ruta
        inicia sesion para continuar 
      
      </Pf>
      <NavLink to="/">
        <BottoForbidden>Iniciar sesion</BottoForbidden>
      </NavLink>
      {/* <Pf className='text'>No se encontro la pagina esperada</Pf> */}
    </NotFound>
    </>
  );
}

export default Forbidden;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #131313;
  font-family: "Outfit", sans-serif;
`;

export const Pf = styled.p`
  &._404 {
    letter-spacing: 20px;
    margin: 0;
    font-size: 200px;
    color: #fff;
  }
  &.text {
    margin: 0;
    font-size: 16px;
    letter-spacing: .5px;
    color: #fff;
  }
`;

export const NavLink = styled(Link)`
background-color: red;
width: 100px;
height: 50px;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const BottoForbidden = styled.button`
  background-color: white;
  color: black;
` 