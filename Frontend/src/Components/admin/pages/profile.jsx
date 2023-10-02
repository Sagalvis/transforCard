import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";

const Profile = () => {
  return (
    <>
      {/* Componente HEADER */}
      <Header 
      index={'Perfil'}
      indexIcon={'fa-solid fa-user'}
      />
      {/* Componente MAIN */}
      <Main 
      showTableProfile={true}
      />
      {/* Componente FOOTER */}
      <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'
      />
    </>
  );
};

export default Profile;
