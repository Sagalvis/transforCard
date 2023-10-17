/* eslint-disable react/prop-types */
import {  useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from 'react-toastify'

const EditFormStaff = ({getEmpleado}) => {
  const [nombre, setNombres] = useState("");
  const [apellido, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("")
  const [tipoRol, setTipoRol] = useState([]);
  const [selectRol, setSeletRol] = useState(0);

  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

  useEffect ( () =>{
    if(getEmpleado){
      setRol(getEmpleado.id_rol)
      setNombres(getEmpleado.nombre);
      setApellidos(getEmpleado.apellido);
      setCorreo(getEmpleado.correo);
    }  
  },[getEmpleado])

  useEffect(() => {
    const fetchdata = async () => {
      const responseRol = await axios.get(`${apiBaseBack}/tiporol`);
      setTipoRol(responseRol.data)
    }
    fetchdata()
  },[apiBaseBack])

  /* Funcion para crear clientes */
  const handletSumit = async (e) => {
    const token = localStorage.getItem('user')
    const limpio = token.replace(/"/g,"")
    if (
      nombre === "" ||
      apellido === "" ||
      correo === "" 
    ) {
      e.preventDefault();
      toast.warning('Por favor llenar todos los campos requeridos.');
    } else {
      await axios
        .patch(`${apiBaseBack}/patchemployees/${getEmpleado.id_empleado}`, {
          nombre,
          apellido,
          correo,
          id_rol: selectRol || rol
        },{
          headers:{Authorization:`${limpio}`}
        })
        .then((Response) => {
          console.log(Response.data);
          toast.success('Empleado actualizado con éxito.');
        });

        setTimeout(() => {
          window.location.reload();          
        }, 1000);
    }
  };

  //funcion que permite solo escribir numeros en el input.
  // function acceptNum(evt) {
  //   const input = evt.target.value;
  //   evt.target.value = input.replace(/[^\d]/g, "");
  // }

  return (
    <>
      <ContainForm>
        <Form>
        <ContentInput>
            <Select value={selectRol || rol} 
            onChange={(e)=>setSeletRol(e.target.value)} 
            >
              <Option value="0">-Seleccione el rol-</Option>
              {tipoRol.map((item,i)=>(
                
                <Option key={i} value={item.id_rol}>{item.rol}</Option>
              ))

              }
            </Select>
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              value={nombre}
              onChange={(e) => setNombres(e.target.value.replace(/[^a-zñáéíóúü\s]/g, '').toLowerCase())}
              placeholder="Nombres"
              autoComplete="off"
              required
              maxLength={20}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              placeholder="Apellidos"
              value={apellido}
              onChange={(e) => setApellidos(e.target.value.replace(/[^a-zñáéíóúü\s]/g, '').toLowerCase())}
              autoComplete="off"
              required
              maxLength={20}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="email"
              placeholder="Correo electrónico"
              autoComplete="off"
              value={correo}
              onChange={(e) => setCorreo(e.target.value.toLowerCase())}
              required
              maxLength={32}
            />
          </ContentInput>
{/* 
          <ContentInput>
            <Input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setPass(e.target.value)}
              onInput={(evt) => acceptNum(evt)}
              maxLength={13}
              autoComplete="off"
            />
          </ContentInput> */}

        </Form>
      </ContainForm>

      <ButtonRegister>
        <BtnRegister onClick={() => {handletSumit();}}>Actualizar</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default EditFormStaff;

// Estilos de los inputs

export const ContainForm = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2%;
  border-bottom: solid 1px #e5e4e4;
`;

export const Form = styled.form`
  width: 100%;
`;

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;

  &.display {
    display: flex;
    flex-direction: row;
    gap: 3px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 2px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 15px;
  font-family: "Outfit";

  &.select-display {
    width: 50%;
  }
`;

export const Option = styled.option`
  //background-color: red;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-family: "Outfit";

  &.input-display {
    width: 50%;
  }

  &::placeholder {
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 0;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  font-family: "Outfit";
  font-size: 15px;
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
