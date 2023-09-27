import { useState, useEffect } from 'react';
import styled from 'styled-components';



const NotfoundPages = () => {
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
      <PagesNotFound title="404">
        <Pf className="http">{currentCount}</Pf>
        <Pf className="text">
          Error la vista buscada no existe 
        </Pf>
      </PagesNotFound>
    </>
  );
};

export default NotfoundPages;

export const PagesNotFound = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f1f0f3;
  font-family: 'Outfit', sans-serif;
`;

export const Pf = styled.p`
  &.http {
    letter-spacing: 20px;
    margin: 0;
    font-size: 200px;
    color: #000000;
  }
  &.text {
    margin: 0;
    font-size: 16px;
    letter-spacing: 0.5px;
    color: #000000;
  }
`;

export const BottoForbidden = styled.button`
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  .fa-arrow-right {
    font-size: 75px;
  }
`;