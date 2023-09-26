import Header from "./header/header";
import Main from "./main/main";
/* import BarsChart  from "./graphics/graphicsHome"; */

const Home = () => {

  return (
    <>
      {/* Componente HEADER */}
      <Header
        index={"Dashboard"}
        indexIcon={"fa-solid fa-chart-line"}
        titleButton={"Crear cliente"}
        titleHome={true}
      />

      {/* Componente MAIN */}
      <Main
      showTableHome= {true}
      />
    </>
  );
};

export default Home;
