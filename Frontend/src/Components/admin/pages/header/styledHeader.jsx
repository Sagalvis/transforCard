import styled from 'styled-components';

export const ContainHeader = styled.div`
  /* background-color: green; */
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin: 0 0 15px 0;
  border-bottom: solid 1px #e5e4e4;
`;

export const ContainInfo = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  .fa-user-group {
    font-size: 25px;
    margin-right: 5px;
  }
  .fa-people-group {
    font-size: 25px;
    margin-right: 5px;
  }
  .fa-car {
    font-size: 25px;
    margin-right: 5px;
  }
  .fa-boxes-stacked {
    font-size: 25px;
    margin-right: 5px;
  }
  .fa-clipboard-check {
    font-size: 25px;
    margin-right: 5px;
  }
  .fa-file-invoice {
    font-size: 25px;
    margin-right: 5px;
  }
  .fa-chart-line{
    font-size :27px ;
    margin-right: 5px;
  }
`;
export const ContainTitleHeader = styled.div`
/*   background-color: red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`
export const TitleH2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;

// Contenedor y boton para crear un cliente.
export const ContainButtons = styled.div`
  /* background-color: purple; */
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all .4s ease;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    background: #d3d3d3;
    border-radius: 4px;
    
  }

  .fa-plus {
    font-size: 25px;
    color: #222;
  }
`;

export const ExptButton = styled.button`
  background: none;
  padding: 10px 20px;
  font-weight: 500;
  font-family: 'Outfit';
  border: none;
  border-radius: 1px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: .3s ease;
  text-transform: uppercase;
  
  &:hover {
    background: #e8e8e8;
  }
`;

/* export const BtnCreateOrder = styled.button`
  background: none;
  padding: 10px 20px;
  font-weight: 500;
  font-family: 'Outfit';
  border: none;
  border-radius: 1px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: .3s ease;
  text-transform: uppercase;
  
  &:hover {
    background: #e8e8e8;
  }
`; */

export const ContainInfoModal = styled.div`
  /* background-color: #008026; */
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  overflow-x: auto;
`;

export const Paragraph = styled.p`
  margin: 5px;
  font-size: 17px;
  &.size {
  margin: 0;
  font-size: 14px;
  line-height: 1.2;
  }
  &.time {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  }
  &.desde {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  }
  &.precio {
    font-size: 15px;
  }
  .fa-square-plus {
    font-size: 25px;
  }
  &.no-margin {
    margin: 0;
  }
`;


export const ContainServices = styled.div`
  /* background-color: red; */
  width: 850px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  height: 230px;
`;

export const TitleService = styled.div`
  
`;

export const CardService = styled.div`
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 5px;
  width: 165px;
  height: 100%x;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Cuadro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

export const Title = styled.div`
  /* background-color: pink; */
  /* text-align: center; */
`;

export const Time = styled.div`
  display: flex;
  gap: 5px;
`;
export const ContainPrice = styled.div`
  /* background-color: orange; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div`
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const AddPlus = styled.div`
  /* background-color: #fff; */
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  cursor: pointer;
  .fa-square-plus {
    font-size: 25px
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;