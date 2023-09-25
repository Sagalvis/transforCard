
const NotFount = () => {
  return ( 
    <>
    <NotFound title='404'>
      <P className='_404'>404</P>
      <P className='text'>No se encontro la pagina esperada</P>
    </NotFound>
    </>
  );
}

export default NotFount;

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

export const P = styled.p`
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