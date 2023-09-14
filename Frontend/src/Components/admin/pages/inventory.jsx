import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";

const Inventory = () => {
  return (
    <>
    {/* Componente HEADER  */}
    <Header
    index='Inventario'
    indexIcon={'fa-solid fa-boxes-stacked'}
    titleButton={'Crear inventario'}
    titleModalPages={'Crear item nuevo'}
    showContentStaff={true}
    showPlusButton={false}
    btnExport={true}
    btnCreateProduct={true}
    />

    {/* Componente MAIN  */}
    <Main
    showTableInventory={true}
    />

    {/* Componente FOOTER  */}
    <Footer 
    copyright='Copyright &copy; 2023 transforCAR. All Rights'
    welcome='Te damos la bienvenida en transforCar 💚'
    />
    </>
  );
};

export default Inventory;