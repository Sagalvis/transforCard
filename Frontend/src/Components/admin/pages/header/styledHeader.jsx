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
`;

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;

// Contenedor y boton para crear un cliente.
export const ContainButtons = styled.div`
  /* background-color: purple; */
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

export const ContainInfoModal = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const ButtonRegister = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 2%;
  padding-right: 5px;
`;

export const BtnRegister = styled.button`
  display: inline-block;
  padding: 8px 30px;
  background-color: #041737;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #172b4c;
  }
  &:active {
    background-color: #041737;
  }
`;