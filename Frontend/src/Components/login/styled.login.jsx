import styled from 'styled-components';
import fondologin from "../../assets/img/fondologin.jpg"

export const ContainLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${fondologin});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
`;

export const ContainForm = styled.div`
  /* background-color: aqua; */
  width: 100%;
  height: 90%;

`

export const ContenTittle = styled.div`
  background-color: red;
  width: 100%;
  height: 20%;
`

export const ContenForm = styled.div`
  background-color: #63cf0b;
  width: 100%;
  height: 60%;
`

export const ContenFotter = styled.div`
    background-color: #0059ff;
  width: 100%;
  height: 20%;
`