/* eslint-disable react/prop-types */
import { CloseButton, ContainModal, H2, HeaderModal, Overlay } from "./styledModals";

const Modals = ({titleModal, children, status, changeStatus, changeposition, showHeader, showCloseButton, changewidth, changepadding}) => {
  return (
    <>
    {status &&
    <Overlay changeposition={changeposition}>
      <ContainModal changewidth={changewidth}>
        {showHeader &&
        <HeaderModal changepadding={changepadding}>
          <H2>{titleModal}</H2>
        </HeaderModal>
        }
        {showCloseButton &&
        <CloseButton onClick={() => changeStatus(false)}><i className="fa-solid fa-xmark"></i></CloseButton>
        }

        {/* Contenido del modal */}
        {children}
      </ContainModal>
    </Overlay>
    }
    </>
  );
}

export default Modals;