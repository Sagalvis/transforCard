import styled from 'styled-components';

// HEADER STYLES <<----------------------
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
`;

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;

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

  &:hover {
    background: #e7e7e7;
    border-radius: 4px;
    
  }

  .fa-plus {
    font-size: 25px;
    color: #222;
  }
`;


// MAIN STYLES <<----------------------

export const ContainMain = styled.div`
  display: block;
  box-sizing: border-box;
  /* background-color: #222; */
  width: 100%;
  height: 80%;
  padding: 24px;
`;

// FILA DE PERSONA Y EMPRESA <<-----------------

export const ContainCheck = styled.div`
  padding-left: 1rem;
  /* background-color: yellow; */
  margin-bottom: 1.55rem;
`;

export const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: #041737;
  }
`;

export const Label = styled.label`
  margin: 5px;
  font-weight: 500;

  .search {
    margin-right: 5px;
  }
`;


// CONTROLADORES CANTIDAD DE DATOS Y BUSCADOR <<-------------------

export const ContainControls = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

// Control "CANTIDAD DE REGISTROS"
export const ContainMaxData = styled.div`
  /* background-color: red; */
  width: 50%;
`;

export const Select = styled.select`
  
`;

export const Option = styled.option`
  
`;

// BUSCADOR
export const ContainSearch = styled.div`
  /* background-color: blue; */
  align-items: center;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  
`;

// Contenedor de TABLA

export const ContainTable = styled.div`
  background-color: #fff;
  width: 100%;
  max-height: 75%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #f9f9f9;
  color: #333;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #efefef;
  }
`;

export const Th = styled.th`
  background-color: #f9f9f9;
  color: #333;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

export const Tbody = styled.tbody`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;