import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Pf } from '../admin/pages/notFoundPages';


const NotFound = () => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount > 404) {
          return 404;
        }
        return newCount;
      });
    }, 1);

    return () => clearTimeout(timer);
  }, [currentCount]);

  return (
    <>
      <ContainNotfound title="404">
        <Pf className="http2">{currentCount}</Pf>
        <Pf className="text2">No se encontró la página esperada</Pf>
      </ContainNotfound>
    </>
  );
};

export default NotFound;

  export const ContainNotfound = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: #131313;
    font-family: 'Outfit', sans-serif;
  `;