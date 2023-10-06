import { Button, ContainInp, ContainRoute, Infovehiculo, Input, Label, TitleDocument, TitleP } from "./styledCheckClient";

const CheckClient = () => {

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, '');
}

  return (
    <>
      <ContainRoute>
        <Infovehiculo>
          <TitleDocument>
            <TitleP>Ingrese por favor el número de documento</TitleP>
          </TitleDocument>

          <ContainInp>
            <Label htmlFor="documento">Documento:</Label>
            <Input
              type="text"
              required
              autoComplete='off'
              onInput={(evt) => acceptNum(evt)}
              minLength={4}
              maxLength={15}
              id="documento"
              name="documento"
              placeholder="Ingrese su documento"
            />
          </ContainInp>
            <Button>Buscar</Button>
        </Infovehiculo>
      </ContainRoute>
    </>
  );
}

export default CheckClient;