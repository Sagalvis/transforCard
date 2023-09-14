import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
const ServiceOrder = () => {
  return (
    <>
      <Header 
      index={"Órden de servicio"} 
      indexIcon={"fa-solid fa-clipboard-check"} 
      titleButton={'Crear órden'}
      exportButton={'Exportar tabla cliente'}
      titleModalPages={'Crear órden nuevo'}
      showContentClient={true}
      showPlusButton={true}
      />
      <Main />

      <Footer />
    </>
  );
};

export default ServiceOrder;
