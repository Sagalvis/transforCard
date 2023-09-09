import styled from "styled-components";
import fondologin from "../../assets/img/fondologin.jpg";

export const ContainLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${fondologin});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
`;

export const ContenLogin = styled.div`
  /* background-color: aqua; */
  width: 100%;
  height: 90%;
`;

export const ContenTittle = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 10%;
`;
export const TittleLogin = styled.div`
  /* background-color: #c1ddf6; */
  margin-left: 5rem;
  width: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragrafh = styled.p`
  margin: 0;
  font-size: 1.1em;
  font-weight: 400;
  color: #12213b;
`;

export const ContenForm = styled.div`
  /* background-color: #63cf0b; */
  width: 100%;
  height: 80%;
`;

export const Form = styled.div`
  position: relative;
  background-color: #12213b;
  width: 30%;
  height: 100%;
  margin-left: 5rem;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(0, 0, 0);
`;

export const ContainLogo = styled.div`
  /* background-color: #f4d27e; */
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLogin = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainInputs = styled.div`
  /* background-color: blueviolet; */
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const TittleInputs = styled.div`
  /* background-color: aliceblue; */
  width: 100%;
  height: 10%;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
`;

export const ContenInputs = styled.div`
  /* background-color: blanchedalmond; */
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 90%;
  position: relative;
  border-bottom: 2px solid white;
  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }
  .fa-solid {
    position: absolute;
    right: 8px;
    color: white;
    font-size: 1.2em;
    top: 20px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: white;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
`;
export const Input = styled.input`
  width: 90%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0 35px 0 5px;
  color: white;
`;

export const ContainButton = styled.div`
  /* background-color: brown; */
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLogin = styled.button`
  cursor: pointer;
  width: 40%;
  height: 50%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  border: none;
  outline: none;
  font-size: .9em;
  font-weight: 600;
  &:hover {
    background-color: #64CCC5;
    color: #12213b;
    box-shadow: 0 0 10px rgb(88, 88, 88);
  }
  transition: all 0.5s ease;
`;

export const ContenParagrafh = styled.div`
  /* background-color: #a0cefb; */
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainFooterLogin = styled.div`
  /* background-color: #0059ff; */
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const ContenFooterLogin = styled.div`
  /* background-color: #eec1f6; */
  margin-left: 5rem;
  width: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
