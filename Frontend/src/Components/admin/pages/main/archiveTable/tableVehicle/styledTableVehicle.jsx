import styled from 'styled-components';

// Contenedor de TABLA

export const ContainTable = styled.div`
  background-color: #fff;
  width: 100%;
  max-height: 75%;
  margin-bottom: 15px;
  overflow-y: auto;
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
  text-transform: uppercase;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &.matricula {
    font-weight: 600;
    color: red;
  }
`;


//Contenedor y botones para editar, eliminar y crear vehiculo.
export const ButtonOptions = styled.div`
  .fa-pen-to-square {
    font-size: 15px;
  }

  .fa-car {
    font-size: 15px;
  }

  .fa-trash-can {
    font-size: 15px;
  }
`;

// Boton de Opciones independiente del de crear un cliente.
export const Buttons = styled.button`
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all .4s ease;

  &:hover {
    background: #d3d3d3;
    border-radius: 4px;
    
  }
  .fa-clipboard {
    font-size: 15px;
  }
`;