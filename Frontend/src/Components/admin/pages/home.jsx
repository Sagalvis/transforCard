import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import { ContentCards } from "./styles/styledHome";
const Home = () => {

  return (
    <>
      <Header
        index={"Dashboard"}
        indexIcon={"fa-solid fa-chart-line"}
        titleButton={"Crear cliente"}
        titleHome={true}
      />

      <Main 
      showCards={true}
      />

      <Footer 
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'
      />
    </>
  );
};

export default Home;
