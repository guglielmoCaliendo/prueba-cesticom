import React from 'react';
import styled from 'styled-components';

export default function Landing() {
  return (
    <Overlay>
      <Container>
        <Welcome>Bienvenido,</Welcome>
        <Para>Seleccione un ejercicio para ver su resultado. </Para>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 450px;
  max-height: 400px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: #fefffb;
  box-shadow: 3px 17px 38px rgb(0 0 0 / 15%);

  @media (max-width: 820px) {
    width: 350px;
  }
`;

const Welcome = styled.p`
  color: #4a5754;
  font-weight: 600;
`;

const Para = styled.p`
  color: #4184ff;
  font-weight: 600;
`;
