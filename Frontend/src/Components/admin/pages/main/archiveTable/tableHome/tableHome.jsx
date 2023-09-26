import { useEffect, useState } from "react";
import {
  Cards,
  CardsContain,
  CardsParagraft,
  ContainCards,
  ContainerTableHome,
  ContenCards,
  HomeConten,
  LargeGraphicsCards,
  SmallGraphicsCards,
  TittleCards,
  TittleCardsContain,
} from "./styledTableHome";
import {
  getCountCustomer,
  getEmployees,
  getInvoice,
  getProduct,
  getService,
  getServiceOrder,
  getVehicle,
} from "../../../archive/funtionHome";
import { Circle, LinesChart } from "./graphics/graphicsHome";

const TableHome = () => {
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
    setCountInvoice,
  ]);
  return (
    <ContainerTableHome>
      <HomeConten>
        <ContainCards>
          {CountCustomer.map((item, index) => (
            <Cards key={index} to={"/admin/cliente"}>
              <TittleCardsContain>
                <TittleCards>Clientes</TittleCards>
              </TittleCardsContain>
              <ContenCards>
                <CardsParagraft>{item.Numero_clientes}</CardsParagraft>
              </ContenCards>
            </Cards>
          ))}
          {CountService.map((item, index) => (
            <Cards key={index} to={"/admin/inventory"}>
              <TittleCardsContain>
                <TittleCards>Servicios</TittleCards>
              </TittleCardsContain>
              <ContenCards>
                <CardsParagraft>{item.Numero_servicios}</CardsParagraft>
              </ContenCards>
            </Cards>
          ))}
          <SmallGraphicsCards>
            <TittleCardsContain>
              <TittleCards>Productos más vendidos</TittleCards>
            </TittleCardsContain>
            <ContenCards style={{ height: "90%" }}>
              <Circle />
            </ContenCards>
          </SmallGraphicsCards>
        </ContainCards>
        <ContainCards style={{ width: "49%" }}>
          <CardsContain>
            {CountVehicle.map((item, index) => (
              <Cards key={index} 
              to={"/admin/vehicle"}
              style={{ width: "48%", height: "100%" }}>
                <TittleCardsContain>
                  <TittleCards>Vehiculos</TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_vehiculos}</CardsParagraft>
                </ContenCards>
              </Cards>
            ))}
            {CountEmployees.map((item, index) => (
              <Cards key={index} 
              to={"/admin/employees"}
              style={{ width: "48%", height: "100%" }}>
                <TittleCardsContain>
                  <TittleCards>Empleados</TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_empleados}</CardsParagraft>
                </ContenCards>
              </Cards>
            ))}
          </CardsContain>
          <CardsContain>
            {CountInvoice.map((item, index) => (
              <Cards key={index} 
              to={"/admin/invoice"}
              style={{ width: "48%", height: "100%" }}>
                <TittleCardsContain>
                  <TittleCards>Ventas</TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_factura}</CardsParagraft>
                </ContenCards>
              </Cards>
            ))}
            {CountProduct.map((item, index) => (
              <Cards key={index} 
              to={"/admin/inventory"}
              style={{ width: "48%", height: "100%" }}>
                <TittleCardsContain>
                  <TittleCards>Productos</TittleCards>
                </TittleCardsContain>
                <ContenCards>
                  <CardsParagraft>{item.Numero_productos}</CardsParagraft>
                </ContenCards>
              </Cards>
            ))}
          </CardsContain>

          <LargeGraphicsCards>
            <TittleCardsContain>
              <TittleCards>Ganancias mes a mes</TittleCards>
            </TittleCardsContain>
            <ContenCards style={{ height: "90%" }}>
              <LinesChart />
            </ContenCards>
          </LargeGraphicsCards>
        </ContainCards>
        <ContainCards>
          {CountServiceOrder.map((item, index) => (

            <Cards key={index} to={"/admin/serviceorder"}>
              <TittleCardsContain>
                <TittleCards>Ordenes de servicio</TittleCards>
              </TittleCardsContain>
              <ContenCards>
                <CardsParagraft>{item.Numero_ordenes_servicio}</CardsParagraft>
              </ContenCards>
            </Cards>
          ))}
          <Cards>
            <TittleCardsContain>
              <TittleCards>Cargando...</TittleCards>
            </TittleCardsContain>
            <ContenCards>
              <CardsParagraft style={{ fontSize: "2rem" }}>
                Cargando...
              </CardsParagraft>
            </ContenCards>
          </Cards>
          <SmallGraphicsCards>
            <TittleCardsContain>
              <TittleCards>Clientes registrados</TittleCards>
            </TittleCardsContain>
            <ContenCards style={{ height: "90%" }}>
              <Circle />
            </ContenCards>
          </SmallGraphicsCards>
        </ContainCards>
      </HomeConten>
    </ContainerTableHome>
  );
};
export default TableHome;
