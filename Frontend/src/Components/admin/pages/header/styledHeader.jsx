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
`;

export const H2 = styled.h2`
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

export const Btn_Create_Order = styled.button`
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

export const ContainInfoModal = styled.div`
  /* background-color: green; */
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const P = styled.p`
  margin: 5px;
  font-size: 17px;
  &.size {
    font-size: 15px;
  }
  &.desde {
    font-size: 14px;
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
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  width: 100%;
  height: 230px;
`;

export const TitleService = styled.div`
  
`;

export const CardService = styled.div`
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 10px;
  width: 20%;
  height: 100%;
`;

export const Cuadro = styled.div`
  background-color: #fff;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

export const Title = styled.div`
  /* background-color: pink; */
`;

export const ContainPrice = styled.div`
  /* background-color: orange; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2px;
  margin-top: 1rem;
  height: 30%;
  box-sizing: border-box;
  /* padding: 0 8px; */
`;

export const Price = styled.div`
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  height: 100%;
`;

export const AddPlus = styled.div`
  /* background-color: #fff; */
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;