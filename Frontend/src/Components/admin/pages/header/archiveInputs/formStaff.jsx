import styled from "styled-components";

const FormStaff = () => {
  return (
    <>
      <ContainForm>
        <Form>
          <ContentInput>
            <Select>
              <Option value="0">-Seleccione el rol-</Option>
              <Option value="admin">Administrador</Option>
              <Option value="manager">Gerente</Option>
              <Option value="workshop-leader">Lider de taller</Option>
              <Option value="parts-advisor">Asesor de repuestos</Option>
              <Option value="service-advisor">Asesor de servicio</Option>
              <Option value="mechanic">Mecanico</Option>
            </Select>
          </ContentInput>

          <ContentInput className="display">
            <Input type="text" placeholder="Nombres" autoComplete="off" />
            <Input type="text" placeholder="Apellidos" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Documento" autoComplete="off" />
          </ContentInput>

          

          <ContentInput className="display">
            <Select >
              <Option value="0">-Seleccione el sexo-</Option>
              <Option value="man">Hombre</Option>
              <Option value="woman">Mujer</Option>
            </Select>
            <Input type="text" placeholder="Edad" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input
              type="email"
              placeholder="Correo electrónico"
              autoComplete="off"
              required
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              required
            />
          </ContentInput>

          {/* <ContentInput>
            <Select className="select-display">
              <Option value="0">-Estado civil-</Option>
            </Select>

          </ContentInput> */}
          

          <ContentInput>
            <Input type="tel" placeholder="Teléfono" autoComplete="off" />
          </ContentInput>

          {/* <ContentInput>
            <Input type="text" placeholder="Fecha de nacimiento" autoComplete="off" />
          </ContentInput> */}

          {/* <ContentInput>
            <Input type="text" placeholder="Nacionalidad" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Ciudad de nacimiento" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Dpt de nacimiento" autoComplete="off" />
          </ContentInput> */}


          <ContentInput>
            <Input type="text" placeholder="Dirección" autoComplete="off" />
          </ContentInput>


          {/* <ContentInput className="input-display">
            <Select className="select-display">
              <Option value="0">-EPS-</Option>
            </Select>

          </ContentInput> */}

          {/* <ContentInput>
            <TextArea cols={30} rows={5} placeholder="Observaciones"></TextArea>
          </ContentInput> */}
        </Form>
      </ContainForm>

      <ButtonRegister>
        <BtnRegister>Registrar</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default FormStaff;

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
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 2px;
  border-radius: 3px;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 15px;
  font-family: "Outfit";
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