import { CardsParagraft, ContainCards, ContainHome, ContenCards, HomeConten, TittleCards, TittleCardsContain } from "./styles/styledHome";



const Home = () => {
  return ( 
    <ContainHome>
      <HomeConten>
        <ContainCards>
          <TittleCardsContain>
            <TittleCards> </TittleCards>
          </TittleCardsContain>
          <ContenCards>
            <CardsParagraft></CardsParagraft>
          </ContenCards>
        </ContainCards>
      </HomeConten>
    </ContainHome>
    );
}

export default Home;