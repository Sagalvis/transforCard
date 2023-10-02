import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";

const Client = () => {

  return (
    <>
      {/* Componente HEADER */}
      <Header
      index={'Clientes'}
      indexIcon={'fa-solid fa-user-group'}
      titleButton={'Crear cliente'}
      exportButton={'Exportar tabla cliente'}
      titleModalPages={'Crear cliente nuevo'}
      showContentClient={true}
      showPlusButton={true}
      btnExport={true}
      />
      
      {/* Componente MAIN */}
      <Main
      showTableClient={true}
      />
      {/* Componente FOOTER */}
      <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'
      />
    </>
  );
};

export default Client;
