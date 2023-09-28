import styled, { keyframes } from "styled-components";
import {Link} from "react-router-dom"

export const ContainerTableHome = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 100vh;
`;

/* Este componente esta creado para más adelante hacerle un scroll */
export const HomeConten = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: #15ff00; */
`;

export const ContainCards = styled.div`
  /* background-color: #17cddb; */
  width: 25%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const right = keyframes`
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(0)
  }
`;

export const CardsContain = styled.div`
  /* background-color: aliceblue; */
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
`

export const Cards = styled(Link)`
  width: 98%;
  height: 20%;
  background-color: #041737;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.732);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  perspective: 1000px;
  color: white;
  &:hover {
    transform: rotateY(12deg);
  }
`;

export const TittleCardsContain = styled.div`
  /* background-color: #5eff00; */
  height: 30px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const TittleCards = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 300;
  font-family: "Outfit";
  margin-left: 5px;

  @media ( max-width: 1039px ) {
    font-size: 1rem;
  }
`;

export const ContenCards = styled.div`
  /* background-color: blue; */
  height: 70%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsParagraft = styled.p`
  margin: 0;
  font-size: 4.6rem;

  &.size {
    font-size: 1.5rem;
  }
  @media ( max-width: 1039px ) {
    font-size: 3rem;
  }
  animation: ${right} .5s ease;
`;

export const SmallGraphicsCards = styled.div`
  width: 100%;
  height: 50%;
  background-color: #041737;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.732);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  perspective: 1000px;
  color: white;
`;

export const LargeGraphicsCards = styled.div`
  width: 97.5%;
  height: 50%;
  background-color: #041737;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.732);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  perspective: 1000px;
  color: white;
`;