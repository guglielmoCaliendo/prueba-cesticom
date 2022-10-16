import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Exercise3() {
  const [result, setResult] = useState({});
  const [show, setShow] = useState({
    avg: false,
    multipleOf2: false,
    multipleOf3: false,
  });

  useEffect(() => {
    divisibles3And2Array();
  }, []);

  const divisibles3And2Array = () => {
    const arr = [];
    const divisibles2 = [];
    const divisibles3 = [];
    for (let i = 0; i < 20000; i++) {
      let number = Math.floor(Math.random() * 20000);
      arr.push(number);
      if (number % 2 === 0) {
        divisibles2.push(number);
      }
      if (number % 3 === 0) {
        divisibles3.push(number);
      }
    }
    return setResult({
      Array: arr,
      'Multiplos de 2': divisibles2,
      'Multiplos de 3': divisibles3,
      Promedio: arr.reduce((pV, cV) => pV + cV) / arr.length,
    });
  };

  return (
    <Overlay>
      <Container>
        <Title>Ejercicio 3,</Title>

        <Para>
          Generar un array con 20000 números. A través de una vista, el usuario
          podrá visualizar la media, múltiplo de 2 y múltiplo de 3, esto, al
          hacer click en cualquiera de los botones para realizar dichos
          cálculos.
        </Para>

        {result.Array && <ParaResults>{result.Array.join(' ,')}</ParaResults>}
        <Button onClick={() => setShow({ ...show, avg: !show.avg })}>
          {show.avg ? 'Ocultar' : 'Mostrar'} media
        </Button>

        {show.avg && <ParaResults>{result.Promedio}</ParaResults>}

        <Button
          onClick={() => setShow({ ...show, multipleOf2: !show.multipleOf2 })}
        >
          {show.multipleOf2 ? 'Ocultar' : 'Mostrar'} multiplos de 2
        </Button>

        {show.multipleOf2 && (
          <ParaResults>{result['Multiplos de 2'].join(' ,')}</ParaResults>
        )}

        <Button
          onClick={() => setShow({ ...show, multipleOf3: !show.multipleOf3 })}
        >
          {show.multipleOf3 ? 'Ocultar' : 'Mostrar'} multiplos de 3
        </Button>

        {show.multipleOf3 && (
          <ParaResults>{result['Multiplos de 3'].join(' ,')}</ParaResults>
        )}
      </Container>
    </Overlay>
  );
}

const Overlay = styled.div`
  width: 100%;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  max-width: 80%;

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
  max-height: 200px;
  overflow-x: hidden;
`;

const ParaResults = styled(Para)`
  color: black;
  font-weight: 400;
`;

const Button = styled.button`
  background: #fefffb;
  border: 2px solid #acacac;
  border-radius: 22px;
  cursor: pointer;
  width: 250px;
  height: 60px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #4184ff;
  margin-top: 15px;

  &:hover {
    border-color: #4a5754;
  }
`;
