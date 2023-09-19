import  { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Alert from "@mui/material/Alert";

const FormInventory = () => {
  const [nombre, setNombre] = useState("");
  const [costo, setCosto] = useState("");
  const [cantidadComprada, setCantidadComprada] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [cantidadStock, setCantidadStock] = useState("");
  const [tipoItem, setTipoItem] = useState([]);
  const [tipoMedida, setTipoMedida] = useState([]);
  const [tipoProducto, setTipoProducto] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  const [selectMedida, setSelectMedida] = useState(0);
  const [selectProducto, setSelectProducto] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      costo === "" ||
      cantidadComprada === "" ||
      precioUnitario === "" ||
      cantidadStock === "" ||
      selectItem === 0 ||
      selectMedida === 0 ||
      selectProducto === 0
    ) {
      alert("Por favor, completa todos los campos");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3005/postinventory", {
        nombre,
        costo: parseInt(costo),
        cantidad_comprada: parseInt(cantidadComprada),
        precio_unitario: parseInt(precioUnitario),
        cantidad_en_stock: parseInt(cantidadStock),
        id_item: selectItem,
        id_medida: selectMedida,
        id_producto: selectProducto,
      });
      console.log(response.data);
      setShowAlert(true);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseItem = await axios.get("http://localhost:3005/tipoitem");
        setTipoItem(responseItem.data);

        const responseMedida = await axios.get("http://localhost:3005/tipomedida");
        setTipoMedida(responseMedida.data);

        const responseProducto = await axios.get("http://localhost:3005/tipoproducto");
        setTipoProducto(responseProducto.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {showAlert && (
        <ContainAlert>
          <Alert severity="success" color="success">
            ¡Producto registrado!
          </Alert>
        </ContainAlert>
      )}

      <ContainForm>
        <Form onSubmit={handleSubmit}>
          <ContentInput>
            <Select value={selectItem} onChange={(e) => setSelectItem(parseInt(e.target.value))}>
              <Option value={0}>-Seleccione tipo de item-</Option>
              {tipoItem.map((item, index) => (
                <Option key={index} value={item.id_item}>
                  {item.tipo_item}
                </Option>
              ))}
            </Select>
          </ContentInput>

          {selectItem === 2 && (
            <>
              <ContentInput>
                <Select
                  value={selectProducto}
                  onChange={(e) => setSelectProducto(parseInt(e.target.value))}
                >
                  <Option value={0}>-Seleccione tipo de producto-</Option>
                  {tipoProducto.map((item, index) => (
                    <Option key={index} value={item.id_producto}>
                      {item.tipo_producto}
                    </Option>
                  ))}
                </Select>
              </ContentInput>

              <ContentInput>
                <Input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre del producto"
                  autoComplete="off"
                  required={true}
                  maxLength={20}
                />
              </ContentInput>

              <ContentInput>
                <Select
                  value={selectMedida}
                  onChange={(e) => setSelectMedida(parseInt(e.target.value))}
                >
                  <Option value={0}>-Seleccione tipo de medida-</Option>
                  {tipoMedida.map((item, index) => (
                    <Option key={index} value={item.id_medida}>
                      {item.tipo_medida}
                    </Option>
                  ))}
                </Select>
              </ContentInput>

              <ContentInput className="display">
                <Input
                  className="width"
                  type="text"
                  value={costo}
                  onChange={(e) => setCosto(e.target.value)}
                  placeholder="Costo"
                  autoComplete="off"
                  required={true}
                  maxLength={20}
                />
                <Input
                  className="input-display"
                  type="text"
                  value={precioUnitario}
                  onChange={(e) => setPrecioUnitario(e.target.value)}
                  placeholder="Precio unitario"
                  maxLength={10}
                  autoComplete="off"
                  required={true}
                />
              </ContentInput>

              <ContentInput>
                <Input
                  type="text"
                  value={cantidadComprada}
                  onChange={(e) => setCantidadComprada(e.target.value)}
                  placeholder="Cantidad comprada"
                  autoComplete="off"
                  required={true}
                />
              </ContentInput>

              <ContentInput>
                <Input
                  type="text"
                  value={cantidadStock}
                  onChange={(e) => setCantidadStock(e.target.value)}
                  placeholder="Cantidad en stock"
                  autoComplete="off"
                  required={true}
                />
              </ContentInput>
            </>
          )}
        </Form>
      </ContainForm>

      <ButtonRegister className="gap">
        <BtnRegister className="btn_red">Cancelar</BtnRegister>
        <BtnRegister onClick={handleSubmit}>Crear</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default FormInventory;

const ContainForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2%;
  border-bottom: solid 1px #e5e4e4;
`;

const Form = styled.form`
  width: 100%;
`;

const ContentInput = styled.div`
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

const Select = styled.select`
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

const Option = styled.option``;

const Input = styled.input`
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

const ButtonRegister = styled.div`
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

const BtnRegister = styled.button`
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

const ContainAlert = styled.div`
  position: absolute;
  bottom: 86%;
  left: 25%;
`;