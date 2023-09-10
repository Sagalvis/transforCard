/* eslint-disable react/prop-types */

import { useState } from "react";
import Modals from "../archive/modals";
import {
  BtnRegister,
  Button,
  ButtonRegister,
  ContainButtons,
  ContainForm,
  ContainHeader,
  ContainInfo,
  ContainInfoModal,
  ContentInput,
  Form,
  H2,
  Input,
  Option,
  Select,
  TextArea,
} from "./styledHeader";

const Header = ({ indexIcon, index, titleButton, titleModalPages }) => {
  // Variable de estado para abrir y cerrar el modal de crear cliente
  const [handleClose, setHandleClose] = useState(false);

  return (
    <>
      {/* Contenedor principal HEADER*/}
      <ContainHeader>
        {/* Info de vista */}
        <ContainInfo>
          <i className={indexIcon}></i>
          <H2>{index}</H2>
        </ContainInfo>

        {/* Botones */}

        <ContainButtons>
          <Button
            title={titleButton}
            onClick={() => setHandleClose(!handleClose)}
          >
            <i className="fa-solid fa-plus"></i>
          </Button>
        </ContainButtons>
      </ContainHeader>

      {/* Modal reutilizable */}
      <Modals
        status={handleClose}
        changeStatus={setHandleClose}
        titleModal={titleModalPages}
        changePosition={'start'}
      >
        {/* Aqui el contenido */}
        <ContainInfoModal>
          <ContainForm>
            <Form>
              <ContentInput>
                <Select>
                  <Option value="0">-Seleccione tipo de persona-</Option>
                  <Option value="company">EMPRESA</Option>
                  <Option value="person">PERSONA</Option>
                </Select>
              </ContentInput>

              <ContentInput>
                <Input type="text" placeholder="Nombres" autoComplete="off" />
              </ContentInput>

              <ContentInput>
                <Input type="text" placeholder="Apellidos" autoComplete="off" />
              </ContentInput>

              <ContentInput className="input-display">
                <Select className="select-display">
                  <Option value="0">-Seleccione su país-</Option>
                </Select>
                <Input
                  className="input-display"
                  type="tel"
                  placeholder="Telefono"
                  autoComplete="off"
                />
              </ContentInput>

              <ContentInput>
                <Input type="text" placeholder="Dirección" autoComplete="off" />
              </ContentInput>

              <ContentInput>
                <Input
                  type="email"
                  placeholder="Correo electronico"
                  autoComplete="off"
                  required
                />
              </ContentInput>

              <ContentInput>
                <TextArea
                  cols={30}
                  rows={5}
                  placeholder="Observaciones"
                ></TextArea>
              </ContentInput>
            </Form>
          </ContainForm>

          <ButtonRegister>
            <BtnRegister>Registrar</BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default Header;
