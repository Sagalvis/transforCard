import { Button, ContainButtons, ContainHeader, ContainInfo, H2 } from "./styledHeader";

const Header = ({index, indexIcon, title}) => {
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
          <Button title={title}>
            <i className="fa-solid fa-plus"></i>
          </Button>
        </ContainButtons>
      </ContainHeader>
    </>
  );
}

export default Header;