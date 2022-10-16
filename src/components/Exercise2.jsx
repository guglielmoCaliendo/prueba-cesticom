import React from 'react';
import styled from 'styled-components';

export default function Exercise2() {
  const divisibles3And2Array = () => {
    const arr = [];
    const divisibles2 = [];
    const divisibles3 = [];
    const notDivisibles = [];
    for (let i = 0; i < 20; i++) {
      let number = Math.floor(Math.random() * 1000);
      arr.push(number);
      if (number % 2 === 0) {
        divisibles2.push(number);
      } else if (number % 3 === 0) {
        divisibles3.push(number);
      } else {
        notDivisibles.push(number);
      }
    }
    return {
      Array: arr,
      'Multiplos de 2': divisibles2,
      'Multiplos de 3': divisibles3,
      Restantes: notDivisibles,
    };
  };

  return (
    <Overlay>
      <Container>
        <Title>Ejercicio 2,</Title>
        <Para>
          Generar un array con 20 números. Se deben separar los números múltiplo
          de 2 y múltiplo de 3. Los números restantes, deberán también ser
          separados. Los resultados deberán ser mostrados a través de consola.
        </Para>
        <Button onClick={() => console.log(divisibles3And2Array())}>
          Mostrar resultado en consola
        </Button>
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

const Title = styled.h3`
  color: #4a5754;
  font-weight: 600;
`;

const Para = styled.p`
  color: #4184ff;
  text-align: justify;
  font-weight: 600;
`;

const Button = styled.button`
  background: #fefffb;
  border: 2px solid #acacac;
  border-radius: 22px;
  cursor: pointer;
  width: 210px;
  height: 60px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #4184ff;
  margin-top: 30px;

  &:hover {
    border-color: #4a5754;
  }
`;
