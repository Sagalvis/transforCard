import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";


const Staff = () => {
  return (
    <>
    <Header 
    index='Empleados'
    indexIcon={'fa-solid fa-people-group'}
    title={'Crear empleado'}/>
    
    {/* Componente Main */}
    <Main 
    name='Johan'/>

    {/* Componente footer */}
    <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'/>
    </>
  );
};

export default Staff;