import { CloseButton, ContainModal, H2, HeaderModal, Overlay } from "./styledModals";

const Modals = ({titleModal, children, status, changeStatus, changePosition}) => {
  return (
    <>
    {status &&
    <Overlay changePosition={changePosition}>
      <ContainModal>
        <HeaderModal>
          <H2>{titleModal}</H2>
        </HeaderModal>

        <CloseButton onClick={() => changeStatus(false)}><i className="fa-solid fa-xmark"></i></CloseButton>

        {/* Contenido del modal */}
        {children}
      </ContainModal>
    </Overlay>
    }
    </>
  );
}

export default Modals;