import Header from './header/header'
import Main from './main/main';
import Footer from './footer/footer';

const Invoice = () => {

  return (
    <>
    {/* Componente HEADER */}
    <Header
    index='Rechnungen'
    indexIcon={'fa-solid fa-file-invoice'}
    titleButton={'Crear factura'}
    titleModalPages={'Crear factura nueva'}
    showContentInvoice={true}
    />

    {/* Componente MAIN */}
    <Main
    showTableInvoice={true}
    />

    {/* Componente FOOTER */}
    <Footer
    copyright='Copyright &copy; 2023 transforCAR. All Rights'
    welcome='Te damos la bienvenida en transforCar 💚'
    />
    </>
  );
};

export default Invoice;