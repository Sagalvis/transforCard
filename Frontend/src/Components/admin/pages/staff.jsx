/* import Modals from "./archive/modals"; */
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";


const Staff = () => {
  return (
    <>
    <Header
    index='Empleados'
    indexIcon={'fa-solid fa-people-group'}
    titleButton={'Crear empleado'}
    titleModalPages={'Crear empleado nuevo'}
    >
    
    </Header>
    
    {/* Componente Main */}
    <Main 
    name='Johan'
    id={'0001'}
    email={'dev.beecodes@gmail.com'}
    phone={'+57 304 526 4366'}
    address={'Av. Kalet St Toronto 256'}
    options={''}/>

    {/* Componente footer */}
    <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'/>
    </>
  );
};

export default Staff;