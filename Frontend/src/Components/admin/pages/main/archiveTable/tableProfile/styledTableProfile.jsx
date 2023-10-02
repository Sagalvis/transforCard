import styled from 'styled-components';

export const ContainerProfile = styled.div`
  /* background-color: black; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileConten = styled.div`
  /* background-color: #553030; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ContainImg = styled.div`
background-color: #aca4a4;
  width: 20%;
  height: 35%;
  border-radius: 100%;
`;



export const ContainInfoProfile = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const ContenInputs = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 30%;
  display: flex;
  gap: 30px;
  align-items: center;
  &.button{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoProfile = styled.div`
  /* background-color: red; */
  width: 23%;
  height: 30%;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  color: #041737;
  font-size: 17px;
  font-family: "Outfit";
`

export const ButtonSave = styled.button`
width: 25%;
  background: #041737;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Outfit';
  border: none;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: .3s ease;
  text-transform: uppercase;
  text-align: center;
  color: white;
  &:hover {
    background: #cfcfcf;
  }
`



