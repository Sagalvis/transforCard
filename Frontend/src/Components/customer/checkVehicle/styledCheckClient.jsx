import styled from 'styled-components';

export const ContainRoute = styled.div`
  /* background-color: green; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Infovehiculo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #041737;
  width: 500px;
  height: auto;
  padding: .5rem;
  border-radius: 5px;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
`;

export const TitleDocument = styled.div`
  text-align: center;
`;

export const TitleP = styled.p`
  color: #fff;
`;

export const ContainInp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: .9rem;
  color: #fff;
`;

export const Input = styled.input`
  margin-left: 5px;
  outline: none;
  padding: 5px;
  border: none;
  border-radius: 3px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 9px;
  margin-top: 15px;
  background-color: #fff;
  color: 000;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #222;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(1px);
  }
`;