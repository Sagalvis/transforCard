const NotFound = () => {
  return ( 
    <>
    <ContainNotfound title='404'>
      <Pf className='http'> 404</Pf>
      <Pf className='text'>No se encontro la pagina esperada</Pf>
    </ContainNotfound>
    </>
  );
}

export default NotFound;

import styled from "styled-components";
import { Pf } from "./Forbidden";

export const ContainNotfound = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #131313;
  font-family: "Outfit", sans-serif;
`;