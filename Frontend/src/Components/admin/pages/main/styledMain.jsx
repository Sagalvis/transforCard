import styled from 'styled-components';

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

// Manejo de paginas <<-------------------

export const ContainHandlePage = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;

export const ContainTextHandle = styled.div`
  /* background-color: yellow; */
`;

export const Tag_P_Handle = styled.p`
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