
const Forbidden = () => {
  return ( 
    <>
    <Forbid title='403'>
      <Pf className='http'>403</Pf>
      <Pf className='text'>
        No tienes los permisos suficientes para acceder a esta ruta,
        inicia sesion para continuar.
      
      </Pf>
      <NavLink to="/">
        <BottoForbidden>
          <i className="fa-solid fa-arrow-right"></i>
        </BottoForbidden>
      </NavLink>
    </Forbid>
    </>
  );
}

export default Forbidden;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Forbid = styled.div`
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
  &.http {
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
/* background-color: red; */
width: auto;
height: auto;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;

`
export const BottoForbidden = styled.button`
  /* background-color: white; */
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;

  .fa-arrow-right {
    font-size: 75px;

  }
` ;