import styled from "styled-components";

export const ContainHome = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #609cd1; */
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
  display: grid;
  flex-direction: column;
  gap: 10px;
  /* background-color: red; */
`;

export const Cards = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const  ContainCards = styled.div`
  background-color: #041737;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TittleCardsContain = styled.div`
  /* background-color: #5eff00; */
  height: 30px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

` ;

export const TittleCards = styled.h2`
  margin: 0;
  font-weight: 400;
  font-family: 'Outfit';
  margin-top: 5px;
  &.service-order{
    text-align: center;
    font-size: 20px;
  }
`;

export const ContenCards = styled.div`
  /* background-color: blue; */
  height: 80%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsParagraft = styled.p`
  margin: 0;
  font-size: 3.3rem;
`;

export const ContainCardsGraphics = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const GraphicsCards = styled.div`
  width: 300px;
  background-color: red;
`

