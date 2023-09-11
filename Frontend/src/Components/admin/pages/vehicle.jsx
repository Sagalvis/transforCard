import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";


const Vehicle = () => {
  return (
    <>
    {/* Componente HEADER */}
    <Header 
    index='Vehiculos'
    indexIcon={'fa-solid fa-car'}
    titleButton={'Crear vehiculo'}
    titleModalPages={'Crear vehiculo nuevo'}
    showContentVehicle={true}
    />

    {/* Componente MAIN */}
    <Main
    showTableVehicle={true}
    />

    {/* Componente FOOTER */}
    <Footer 
    copyright='Copyright &copy; 2023 transforCAR. All Rights'
    welcome='Te damos la bienvenida en transforCar 💚'
    />
    </>
  );
};

export default Vehicle;
