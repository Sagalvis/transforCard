import styled from "styled-components";

export const ContainHome = styled.div`
  width: 100%;
  height: 100%;
  background-color: #609cd1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px; /* Ancho del scroll */
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color de fondo del track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Color del scroll */
    border-radius: 4px; /* Radio de los bordes del scroll */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color del scroll al pasar el cursor por encima */
  }
`;

export const HomeConten = styled.div`
  width: 99%;
  height: auto;
  background-color: red;
`;

export const  ContainCards = styled.div`
  background-color: antiquewhite;
  width: 250px;
  height: 150px;
  border-radius: 10px;
`;

export const TittleCardsContain = styled.div`
  background-color: #5eff00;
  height: 30px;
  width: 100%;
  border-radius: 10px;
` ;


export const TittleCards = styled.h1`
  margin: 0;
`;

export const ContenCards = styled.div`
  background-color: blue;
  height: 80%;
  width: 100%;
  border-radius: 10px;
`;

export const CardsParagraft = styled.p`
  margin: 0;
`

