import { Button, ContainButtons, ContainClient, ContainInfo, H2 } from "./styles/styledClient";

const Client = () => {
  return (
    <>
      <ContainClient>

        <ContainInfo>
          <i className="fa-solid fa-user-group"></i>
          <H2>Clientes</H2>
        </ContainInfo>

        {/* Botones */}

        <ContainButtons>
          <Button><i className="fa-solid fa-plus"></i></Button>
        </ContainButtons>
      </ContainClient>
    </>
  );
};

export default Client;
