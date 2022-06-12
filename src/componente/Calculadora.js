import React, { useState } from 'react';
import './Calculadora.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

function Calculadora() {

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operador, setOperador] = useState(0);

    function inputNum(e) {
        if (num == 0) {
            setNum(e.target.value);
        } else {
            setNum(num + e.target.value);
        }

    }

    function clear(e) {
        setNum(0);
    }

    function porcentagem(e) {
        setNum(num / 100);
    }

    function mudarSinal(e) {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    function operadorHandler(e) {
        var operadorInput = e.target.value
        setOperador(operadorInput)
        setOldNum(num)
        setNum(0)
    }

    function calcular(e) {
        if (operador === "/") {
            setNum(oldNum / num)
        } else if (operador === "x") {
            setNum(oldNum * num)
        } else if (operador === "-") {
            setNum(oldNum - num)
        } else if(operador === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
    }

    return (
        <div>
            <Box m={5} />
            <Container maxWidth='xs'>
                <div className='wrapper'>
                    <h1 className='resultado'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={mudarSinal}>+/-</button>
                    <button onClick={porcentagem}>%</button>
                    <button className='orange' onClick={operadorHandler} value={"/"}>/</button>
                    <button className='gray' onClick={inputNum} value={7}>7</button>
                    <button className='gray' onClick={inputNum} value={8}>8</button>
                    <button className='gray' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operadorHandler} value={"x"}>X</button>
                    <button className='gray' onClick={inputNum} value={4}>4</button>
                    <button className='gray' onClick={inputNum} value={5}>5</button>
                    <button className='gray' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operadorHandler} value={"-"}>-</button>
                    <button className='gray' onClick={inputNum} value={1}>1</button>
                    <button className='gray' onClick={inputNum} value={2}>2</button>
                    <button className='gray' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operadorHandler} value={"+"}>+</button>
                    <button className='gray' onClick={inputNum} value={0}>0</button>
                    <button className='gray' onClick={inputNum} value={"."}>.</button>
                    <button onClick={calcular}>=</button>
                </div>
            </Container>
        </div>
    )
}

export default Calculadora;