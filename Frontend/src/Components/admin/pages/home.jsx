import Header from "./header/header";
import Main from "./main/main";
/* import BarsChart  from "./graphics/graphicsHome"; */

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
      showTableHome= {true}
      />
{/*       <ContainCardsGraphics>
            <GraphicsCards>
              <BarsChart />
            </GraphicsCards>
            <GraphicsCards><BarsChart /></GraphicsCards>
          </ContainCardsGraphics>
          <ContainCardsGraphics>
            <GraphicsCards><BarsChart /></GraphicsCards>
            <GraphicsCards><BarsChart /></GraphicsCards>
          </ContainCardsGraphics>
      */}
    </>
  );
};

export default Home;
