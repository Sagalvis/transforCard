import {
  Cards,
  CardsParagraft,
  ContainCards,
  ContainHome,
  ContenCards,
  HomeConten,
  TittleCards,
  TittleCardsContain,
} from "./styles/styledHome";
import Header from "./header/header";
import { useEffect, useState } from "react";
import {
  getCountCustomer,
  getEmployees,
  getInvoice,
  getProduct,
  getService,
  getServiceOrder,
  getVehicle,
} from "./archive/funtionHome";

const Home = () => {
  const [CountCustomer, setCountCustomer] = useState([]);
  const [CountVehicle, setCountVehicle] = useState([]);
  const [CountEmployees, setCountEmployees] = useState([]);
  const [CountProduct, setCountProduct] = useState([]);
  const [CountService, setCountService] = useState([]);
  const [CountServiceOrder, setCountServiceOrder] = useState([]);
  const [CountInvoice, setCountInvoice] = useState([]);

  useEffect(() => {
    getCountCustomer(setCountCustomer);
    getVehicle(setCountVehicle);
    getEmployees(setCountEmployees);
    getProduct(setCountProduct);
    getService(setCountService);
    getServiceOrder(setCountServiceOrder);
    getInvoice(setCountInvoice);
  }, [
    setCountCustomer,
    setCountVehicle,
    setCountEmployees,
    setCountProduct,
    setCountService,
    setCountServiceOrder,
    setCountInvoice
  ]);
  return (
    <>
      <Header
        index={"Dashboard"}
        indexIcon={"fa-solid fa-chart-line"}
        titleButton={"Crear cliente"}
      />
      <ContainHome>
        <HomeConten>
          <Cards>
            {CountCustomer.map((item, index) => (
              <ContainCards key={index}>
                <TittleCardsContain>
                  <TittleCards> Clientes </TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_clientes}</CardsParagraft>
                </ContenCards>
              </ContainCards>
            ))}
            {CountVehicle.map((item, index) => (
              <ContainCards key={index}>
                <TittleCardsContain>
                  <TittleCards> Vehiculos </TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_vehiculos}</CardsParagraft>
                </ContenCards>
              </ContainCards>
            ))}
            {CountEmployees.map((item, index) => (
              <ContainCards key={index}>
                <TittleCardsContain>
                  <TittleCards> Empleados </TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_empleados}</CardsParagraft>
                </ContenCards>
              </ContainCards>
            ))}
            {CountProduct.map((item, index) => (
              <ContainCards key={index}>
                <TittleCardsContain>
                  <TittleCards> Productos </TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_productos}</CardsParagraft>
                </ContenCards>
              </ContainCards>
            ))}
          </Cards>
          <Cards>
            {CountService.map((item, index) => (
              <ContainCards key={index}>
                <TittleCardsContain>
                  <TittleCards> Servicios </TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_servicios}</CardsParagraft>
                </ContenCards>
              </ContainCards>
            ))}
            {CountServiceOrder.map((item, index) => (
              <ContainCards key={index}>
                <TittleCardsContain>
                  <TittleCards> Ordenes de servicio </TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>
                    {item.Numero_ordenes_servicio}
                  </CardsParagraft>
                </ContenCards>
              </ContainCards>
            ))}
            {CountInvoice.map((item, index) => (
              <ContainCards key={index}>
                <TittleCardsContain>
                  <TittleCards> Facturas </TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>
                    {item.Numero_factura}
                  </CardsParagraft>
                </ContenCards>
              </ContainCards>
            ))}
            {CountServiceOrder.map((item, index) => (
              <ContainCards key={index}>
                <TittleCardsContain>
                  <TittleCards> Ordenes de servicio </TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>
                    {item.Numero_ordenes_servicio}
                  </CardsParagraft>
                </ContenCards>
              </ContainCards>
            ))}
          </Cards>
        </HomeConten>
      </ContainHome>
    </>
  );
};

export default Home;
