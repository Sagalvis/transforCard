import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";


const Client = () => {
  return (
    <>
      {/* Contenedor principal HEADER*/}
      <Header 
      index='Clientes'
      indexIcon={'fa-solid fa-user-group'}/>

      <Main 
      name='Sergio'
      id={'0001'}
      email={'dev.sershcodes@gmail.com'}
      phone={'+57 300 000 0000'}
      address={'Av. Kalet St Toronto 256'}
      options={''}/>

      {/* Componente footer */}

      <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'/>
    </>
  );
};

export default Client;
