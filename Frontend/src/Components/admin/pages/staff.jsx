import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";


const Staff = () => {
  return (
    <>
    {/* Componente HEADER */}
    <Header
    index='Empleados'
    indexIcon={'fa-solid fa-people-group'}
    titleButton={'Crear empleado'}
    titleModalPages={'Crear empleado nuevo'}
    showContentStaff={true}
    showPlusButton={true}
    btnExport={true}
    btnCreateProduct={false}
    />
    
    {/* Componente MAIN */}
    <Main
    showTableStaff={true}
    />

    {/* Componente FOOTER */}
    <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'
    />
    </>
  );
};

export default Staff;