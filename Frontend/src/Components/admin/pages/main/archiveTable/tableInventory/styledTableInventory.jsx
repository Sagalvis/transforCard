import styled from 'styled-components';

// FILA DE PERSONA Y EMPRESA <<-----------------

export const ContainCheck = styled.div`
  padding-left: 1rem;
  display: flex;
  justify-content: flex-end;
  /* background-color: yellow; */
  margin-bottom: 1.55rem;
`;

export const BtnCreate = styled.button`
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
  margin-bottom: 15px;
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
`;

// Manejo de paginas <<-------------------

export const ContainHandlePage = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;

export const ContainTextHandle = styled.div`
  /* background-color: yellow; */
`;

export const TagPHandle = styled.p`
  margin: 0;
`;

export const ControlHandle = styled.div`
  /* background-color: green; */
`;

export const Ul = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`;

export const Li = styled.li`

&.button-li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #041737;
  border-radius: 2px;
  cursor: pointer;
  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background: #0c244e;
    border-radius: 2px;
  }
}
`;

export const ButtonHandle = styled.button`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'outfit';
  font-weight: 500;
  font-size: 14px;
  border: none;
  width: 80px;
  height: 30px;
  cursor: pointer;
  transition: all .4s ease;

  &:hover {
    background: #d3d3d3;
    border-radius: 4px;
    
  }
`;

export const ButtonInventory = styled.div`
  display: flex;
/*   background-color: red; */
  width: 15%;
  height: 40px;
  justify-content: space-around;
  margin-bottom: 1%;
`;

export const Button = styled.div`
  background: none;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Outfit';
  border: none;
  border-radius: 1px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: .3s ease;
  text-transform: uppercase;
  
  &:hover {
    background: #cfcfcf;
  }
`