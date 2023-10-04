/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "../../main/archiveTable/tableInventory/styledTableInventory";
import { toast, ToastContainer } from 'react-toastify'

const FormInventory = () => {
  //Varibles de estado para crear un producto
  const [nombre, setNombre] = useState("");
  const [costo, setCosto] = useState("");
  const [cantidadComprada, setCantidadComprada] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [cantidadStock, setCantidadStock] = useState("");
  const [tipoMedida, setTipoMedida] = useState([]);
  const [tipoProducto, setTipoProducto] = useState([]);
  const [selectMedida, setSelectMedida] = useState("");
  const [selectProducto, setSelectProducto] = useState("");
  //Variable de estado para crear servicio
  const [ordenServicio, setOrdenServicio] = useState("");
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioServicio, setPrecioServicio] = useState("");
  const [tiempoEstimado, setTiempoEstimado] = useState("");
  //Variable de estado para cambiar vista de item
  const [showItem, setShowItem] = useState(true);

  //Funcion para cambiar de inputs
  const handleClickButton = (value) => {
    if (value === "producto") {
      setShowItem(false);
    } else if (value === "servicio") {
      setShowItem(true);
    }
  };

  //Funcion para crear un producto
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  const handletSumitProduct = async (e) => {
    try {
      e.preventDefault();
      toast.warning('Por favor completar todos los campos requeridos.');
    } catch {
      await axios
        .post(`${apiBaseBack}/postinventory`, {
          nombre: nombre,
          costo: parseInt(costo),
          cantidad_comprada: parseInt(cantidadComprada),
          precio_unitario: parseInt(precioUnitario),
          cantidad_en_stock: parseInt(cantidadStock),
          id_medida: selectMedida,
          id_producto: selectProducto,
        })
        .then((Response) => {
          console.log(Response.data);
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
    }
  };

  const handleSumitService = async (e) => {
    e.preventDefault();
    if (
      nombreServicio === "" ||
      descripcion === "" ||
      precioServicio === "" ||
      tiempoEstimado === ""
    ) {
      e.preventDefault();
      toast.warning('Por favor completar todos los campos requeridos.');
    } else {
      await axios.post(`${apiBaseBack}/postservice`, {
        id_orden: ordenServicio,
        nombre_serv: nombreServicio,
        descripcion: descripcion,
        precio: parseInt(precioServicio),
        tiempo_estimado: tiempoEstimado,
      });
    }
  };

  /* Funcion que limpa los inputs */

  useEffect(() => {
    const fetchdata = async () => {
      const responseMedida = await axios.get(`${apiBaseBack}/tipomedida`);
      setTipoMedida(responseMedida.data);
      const responseProducto = await axios.get(`${apiBaseBack}http://localhost:3005/tipoproducto`);
      setTipoProducto(responseProducto.data);
    };
    fetchdata();
  }, []);

  const handleAlertCreateService = () => {
    toast.success('Servicio creado satisfactoriamente.');
  };

  const handleAlertCreateProduct = () => {
    toast.success('Producto creado satisfactoriamente.');
  };
  return (
    <>
      <ContainForm>
        <Form>
          <ContentInput className="display">
            <Button
              className="btn"
              onClick={() => handleClickButton("servicio")}
            >
              Servicio
            </Button>
{/*             <Button
              className="btn"
              onClick={() => handleClickButton("producto")}
            >
              Producto
            </Button> */}
          </ContentInput>
          {!showItem && (
            <>
              <ContentInput>
                <Select
                  value={selectProducto}
                  onChange={(e) => setSelectProducto(e.target.value)}
                >
                  <Option value="0">-Seleccione tipo de producto-</Option>
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
                  onChange={(e) =>
                    setNombre(
                      e.target.value.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
                    )
                  }
                  placeholder="Nombre del producto"
                  autoComplete="off"
                  required
                  maxLength={20}
                />
              </ContentInput>

              <ContentInput>
                <Select
                  value={selectMedida}
                  onChange={(e) => setSelectMedida(e.target.val)}
                >
                  <Option value="0">-Seleccione tipo de medida-</Option>
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
                  onChange={(e) =>
                    setCosto(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Costo"
                  autoComplete="off"
                  required
                  maxLength={20}
                />
                <Input
                  className="input-display"
                  type="text"
                  value={precioUnitario}
                  onChange={(e) =>
                    setPrecioUnitario(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Precio unitario"
                  maxLength={10}
                  autoComplete="off"
                  required
                />
              </ContentInput>

              <ContentInput>
                <Input
                  type="text"
                  value={cantidadComprada}
                  onChange={(e) =>
                    setCantidadComprada(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Cantidad en comprada"
                  autoComplete="off"
                  required
                />
              </ContentInput>

              <ContentInput>
                <Input
                  type="text"
                  value={cantidadStock}
                  onChange={(e) =>
                    setCantidadStock(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Cantidad en stock"
                  autoComplete="off"
                  required
                />
              </ContentInput>
              <ButtonRegister className="gap">
                {/* <BtnRegister className="btn_red">Cancelar</BtnRegister> */}
                <BtnRegister onClick={() => {handletSumitProduct(); handleAlertCreateProduct();}}>
                  Crear producto
                </BtnRegister>
              </ButtonRegister>
            </>
          )}
          {showItem && (
            <>
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
                  placeholder="Tiempo estidamdo del servicio"
                  autoComplete="off"
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
                <BtnRegister onClick={() => {handleSumitService(); handleAlertCreateService();}}>
                  Crear servicio
                </BtnRegister>
              </ButtonRegister>
            </>
          )}
        </Form>
      </ContainForm>

      <ToastContainer 
      autoClose={1000}
      hideProgressBar={true}
      />
    </>
  );
};

export default FormInventory;

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

export const Option = styled.option`
  /* background-color: red; */
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
