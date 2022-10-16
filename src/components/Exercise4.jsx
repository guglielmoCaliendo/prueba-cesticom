import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Exercise3() {
  const [firstNum, setFirstNum] = useState([]);
  const [secondNum, setSecondNum] = useState([]);
  const [input, setInput] = useState({
    firstNum: [],
    secondNum: [],
    operand: '',
  });

  console.log(input);

  useEffect(() => {
    setInput({ ...input, firstNum, secondNum });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstNum, secondNum]);

  const handleNum = (e) => {
    if (!input.operand) {
      return setFirstNum([...firstNum, e.target.name]);
    }
    setSecondNum([...secondNum, e.target.name]);
  };

  const handleOperand = (e) => {
    if (firstNum && !input.operand) {
      setInput({ ...input, operand: e.target.name });
    }
  };

  const handleProm = () => {
    if (input.operand === '+') {
      let result =
        input.firstNum.join('') -
        1 +
        1 +
        parseInt(input.secondNum.join('')) / 2;
      if (Math.floor(result) !== result) {
        result = result.toFixed(2);
      }

      setFirstNum(result.toString().split(','));
      setSecondNum([]);
      return setInput({
        firstNum: result,
        secondNum: [],
        operand: '',
      });
    }
  };

  const handlePerentage = () => {
    if (!input.secondNum.length && !input.operand) {
      let result = (input.firstNum.join('') - 1 + 1) / 100;
      if (Math.floor(result) !== result) {
        result = result.toFixed(2);
      }
      setFirstNum(result.toString().split(','));
      setSecondNum([]);
      return setInput({
        firstNum: result,
        secondNum: [],
        operand: '',
      });
    }
  };

  const handlePower = (e) => {
    if (e.target.name === 'X2' && !input.secondNum.length && !input.operand) {
      let result = (input.firstNum.join('') - 1 + 1) ** 2;
      if (Math.floor(result) !== result) {
        result = result.toFixed(2);
      }
      setFirstNum(result.toString().split(','));
      setSecondNum([]);
      return setInput({
        firstNum: result,
        secondNum: [],
        operand: '',
      });
    }
    if (e.target.name === 'X3' && !input.secondNum.length && !input.operand) {
      let result = (input.firstNum.join('') - 1 + 1) ** 3;
      if (Math.floor(result) !== result) {
        result = result.toFixed(2);
      }
      setFirstNum(result.toString().split(','));
      setSecondNum([]);
      return setInput({
        firstNum: result,
        secondNum: [],
        operand: '',
      });
    }
  };

  const handleEqual = () => {
    if (input.operand === '+') {
      let result =
        input.firstNum.join('') - 1 + 1 + parseInt(input.secondNum.join(''));
      if (Math.floor(result) !== result) {
        result = result.toFixed(2);
      }
      setFirstNum(result.toString().split(','));
      setSecondNum([]);
      return setInput({
        firstNum: result,
        secondNum: [],
        operand: '',
      });
    }
    if (input.operand === '-') {
      let result =
        input.firstNum.join('') - 1 + 1 - parseInt(input.secondNum.join(''));
      if (Math.floor(result) !== result) {
        result = result.toFixed(2);
      }
      setFirstNum(result.toString().split(','));
      setSecondNum([]);
      return setInput({
        firstNum: result,
        secondNum: [],
        operand: '',
      });
    }
    if (input.operand === 'x') {
      let result =
        (input.firstNum.join('') - 1 + 1) * parseInt(input.secondNum.join(''));
      if (Math.floor(result) !== result) {
        result = result.toFixed(2);
      }
      setFirstNum(result.toString().split(','));
      setSecondNum([]);
      return setInput({
        firstNum: result,
        secondNum: [],
        operand: '',
      });
    }
    if (input.operand === '/') {
      if (
        parseInt(input.firstNum.join('')) === 0 ||
        parseInt(input.secondNum.join('')) === 0
      ) {
        alert(`No se puede dividir entre 0`);
        setFirstNum([]);
        setSecondNum([]);
        return setInput({
          firstNum: [],
          secondNum: [],
          operand: '',
        });
      }
      let result =
        (input.firstNum.join('') - 1 + 1) / parseInt(input.secondNum.join(''));
      if (Math.floor(result) !== result) {
        result = result.toFixed(2);
      }
      setFirstNum(result.toString().split(','));
      setSecondNum([]);
      return setInput({
        firstNum: result,
        secondNum: [],
        operand: '',
      });
    }
  };

  const handleClear = () => {
    setInput({
      firstNum: [],
      secondNum: [],
      operand: '',
    });
    setFirstNum([]);
    setSecondNum([]);
  };

  return (
    <Overlay>
      <Container>
        <Title>Ejercicio 4,</Title>

        <Para>
          Como usuario deseo poder colocar número inicial y número final, además
          escoger que tipo de operación realizar y al dar calcular ver el
          resultado. Las operaciones realizables son: suma, resta,
          multiplicación, división, promedio, media, calcular cuadrado y cúbico
          de un número.
        </Para>
        <Para>
          El boton "PROM" promedio, funciona con 2 numeros, colocandoles el
          operando "+", luego seleccionando el boton 'PROM', ej. realizar "55 +
          60" y seleccionar "PROM" sin oprimir el boton "=".
        </Para>
        <CalculatorContainer>
          <div>
            <CalculatorDisplay>
              {input.firstNum}
              {input.operand}
              {input.secondNum}
            </CalculatorDisplay>
          </div>
          <div>
            <Button onClick={() => handleProm()}>PROM</Button>
            <Button name='X2' onClick={(e) => handlePower(e)}>
              X<sup>2</sup>
            </Button>
            <Button name='X3' onClick={(e) => handlePower(e)}>
              X<sup>3</sup>
            </Button>
            <Button onClick={(e) => handlePerentage(e)}>%</Button>
          </div>
          <div>
            <Button name='1' onClick={(e) => handleNum(e)}>
              1
            </Button>

            <Button name='2' onClick={(e) => handleNum(e)}>
              2
            </Button>

            <Button name='3' onClick={(e) => handleNum(e)}>
              3
            </Button>

            <Button name='x' onClick={(e) => handleOperand(e)}>
              X
            </Button>
          </div>
          <div>
            <Button name='4' onClick={(e) => handleNum(e)}>
              4
            </Button>

            <Button name='5' onClick={(e) => handleNum(e)}>
              5
            </Button>

            <Button name='6' onClick={(e) => handleNum(e)}>
              6
            </Button>

            <Button name='-' onClick={(e) => handleOperand(e)}>
              -
            </Button>
          </div>
          <div>
            <Button name='7' onClick={(e) => handleNum(e)}>
              7
            </Button>

            <Button name='8' onClick={(e) => handleNum(e)}>
              8
            </Button>

            <Button name='9' onClick={(e) => handleNum(e)}>
              9
            </Button>

            <Button name='+' onClick={(e) => handleOperand(e)}>
              +
            </Button>
          </div>
          <div>
            <Button onClick={(e) => handleClear(e)}>AC</Button>

            <Button name='0' onClick={(e) => handleNum(e)}>
              0
            </Button>

            <Button name='/' onClick={(e) => handleOperand(e)}>
              /
            </Button>

            <Button onClick={() => handleEqual()}>=</Button>
          </div>
        </CalculatorContainer>
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

const CalculatorContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
`;

const CalculatorDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #acacac;
  height: 50px;
  font-size: 25px;
  border-radius: 10px;
  margin: 5px;
`;

const Button = styled.button`
  background: #fefffb;
  border: 1px solid #acacac;
  border-radius: 22px;
  cursor: pointer;
  width: 90px;
  height: 50px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  color: #4184ff;
  margin: 5px;

  &:hover {
    border-color: #4a5754;
  }
`;
