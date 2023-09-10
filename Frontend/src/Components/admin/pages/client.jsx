import Modals from "./archive/modals";
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
      titleModalPages={'Crear cliente nuevo'}>
      </Header>
      

      {/* Componente MAIN */}
      <Main 
      name='Sergio'
      id={'0001'}
      email={'dev.sershcodes@gmail.com'}
      phone={'+57 300 000 0000'}
      address={'Av. Kalet St Toronto 256'}
      editUser={'fa-solid fa-pen-to-square'}
      createVehicle={'fa-solid fa-car'}
      deleteUser={'fa-solid fa-trash-can'}/>

      {/* Componente FOOTER */}

      <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'/>
    </>
  );
};

export default Client;
