import styled from 'styled-components';

export const ContainClient = styled.div`
  background-color: green;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
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
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: #e7e7e7;
  }

  .fa-plus {
    font-size: 25px;
    color: #222;
  }
`;