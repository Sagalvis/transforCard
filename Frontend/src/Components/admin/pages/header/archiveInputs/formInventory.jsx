/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from 'react-toastify'

const FormInventory = () => {

  const [ordenServicio, setOrdenServicio] = useState("");
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioServicio, setPrecioServicio] = useState("");
  const [tiempoEstimado, setTiempoEstimado] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

  const handleSubmitService = async (e) => {
    try {
      e.preventDefault();
      if(
        nombreServicio === "" ||
        descripcion === "" ||
        precioServicio === "" ||
        tiempoEstimado === "" ||
        selectedImage === ""
      ){
        toast.warning('Por favor  completar todos los campos. ')
        return;
      }
      const formData = new FormData();
      formData.append("id_orden", ordenServicio);
      formData.append("nombre_serv", nombreServicio);
      formData.append("descripcion", descripcion);
      formData.append("precio", parseInt(precioServicio));
      formData.append("tiempo_estimado", tiempoEstimado);
      formData.append("imagen", selectedImage);

      // realiza la solicitud si todos los datos estan completos.
      const res = await axios.post(`${apiBaseBack}/postService`, formData);
      if (res.status === 200) {
        handleAlertCreateService();
        toast.success('Servicio creado satisfacctoriamente.');
      }else{
        toast.error('Hubo un problema al crear el servicio.')
      }
    }catch (error) {
      console.error('Error en el cliente: ', error);
      toast.error('Hubo un problema al crear el servicio.');
    }
  };

  return (    
    <>
      <ContainForm>
        <Form>
              <ContentInput>
                <Input
                  type="text"
                  value={ordenServicio}
                  onChange={(e) =>
                    setOrdenServicio(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="ID servicio"
                  autoComplete="off"
                  required
                />
              </ContentInput>
              <ContentInput>
                <Input
                  type="text" 
                  value={nombreServicio}
                  onChange={(e) =>
                    setNombreServicio(
                      e.target.value.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
                    )
                  }
                  placeholder="Nombre del servicio"
                  autoComplete="off"
                  required
                />
              </ContentInput>
              <ContentInput>
                <Input
                  type="text"
                  value={precioServicio}
                  onChange={(e) =>
                    setPrecioServicio(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Precio del servicio"
                  autoComplete="off"
                  required
                />
              </ContentInput>
              <ContentInput>
                <Input
                  type="text"
                  value={tiempoEstimado}               
                  onChange={(e) =>
                    setTiempoEstimado(
                      e.target.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
                    )
                  }
                  placeholder="Tiempo estimado del servicio"
                  autoComplete="off"
                  required
                />
              </ContentInput>
              <ContentInput>
                <Input
                  type="file"
                  id="file"
                  name="file"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                  placeholder="Agregar imagen"
                  required
                />
              </ContentInput>
              <ContentInput>
                <TextArea
                  type="text"
                  value={descripcion}

                  onChange={(e) => setDescripcion(e.target.value)}
                  placeholder="Descripción del servicio"
                  autoComplete="off"
                  required
                />
              </ContentInput>
              <ButtonRegister className="gap">
                <BtnRegister onClick={() => {handleSubmitService(); handleAlertCreateService();}}>
                  Crear servicio
                </BtnRegister>
              </ButtonRegister>
        </Form>
      </ContainForm>
    </>
  );
};

export default FormInventory;

export const ContainForm = styled.div`
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
  justify-content: center;
  margin-bottom: 2%;

  &.display {
    display: flex;
    flex-direction: row;
    gap: 3px;
  }

  .btn {
    width: 50%;
    display: flex;
    justify-content: center;
    letter-spacing: 1.5px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
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

export const Option = styled.option``;

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
  &.width {
    width: 50%;
  }

  &::placeholder {
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
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
  &.gap {
    display: flex;
    gap: 4px;
    margin-top: 2%;
  }
`;

export const BtnRegister = styled.button`
  display: inline-block;
  padding: 8px 30px;
  background-color: #041737;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &.btn_red {
    background-color: #dc3545;
    &:hover {
      background-color: #c74753;
    }
  }
  &:hover {
    background-color: #172b4c;
  }
  &:active {
    background-color: #041737;
  }
`;

export const ContainAlert = styled.div`
  position: absolute;
  bottom: 86%;
  left: 25%;
`;
