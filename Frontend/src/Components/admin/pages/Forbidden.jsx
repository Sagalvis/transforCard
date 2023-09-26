import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Forbid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #131313;
  font-family: 'Outfit', sans-serif;
`;

export const Pf = styled.p`
  &.http {
    letter-spacing: 20px;
    margin: 0;
    font-size: 200px;
    color: #fff;
  }
  &.text {
    margin: 0;
    font-size: 16px;
    letter-spacing: 0.5px;
    color: #fff;
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

const Forbidden = () => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount > 403) {
          return 403;
        }
        return newCount;
      });
    }, 1);

    return () => clearTimeout(timer);
  }, [currentCount]);

  return (
    <>
      <Forbid title="403">
        <Pf className="http">{currentCount}</Pf>
        <Pf className="text">
          No tienes los permisos suficientes para acceder a esta ruta, inicia sesión para continuar.
        </Pf>
        <NavLink to="/">
          <BottoForbidden>
            <i className="fa-solid fa-arrow-right"></i>
          </BottoForbidden>
        </NavLink>
      </Forbid>
    </>
  );
};

export default Forbidden;
