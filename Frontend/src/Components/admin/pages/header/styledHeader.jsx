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
`;

export const ContainServices = styled.div`
  background-color: red;
  display: flex;
  gap: 10px;
  width: 100%;
  height: auto;
`;

export const TitleService = styled.div`
  
`;

export const CardService = styled.div`
  background-color: green;
  width: 160px;
  height: 190px;
  
`;