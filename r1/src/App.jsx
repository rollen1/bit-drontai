import { useEffect } from 'react';
import { useState } from 'react';
import rand from './Functions/rand';
import './App.scss';

function App() {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState([rand(10, 99), rand(10, 99)]);
    const [counter5, setCounter5] = useState(0);
    const [color, setColor] = useState('skyblue');
    const [counter6, setCounter6] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(c => c + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter2(c => c >= 10 ? 0 : c + 2);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter3(c => c >= 5 ? 0 : c + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const d = [rand(10, 99), rand(10, 99)];
            setCounter4(d);
            setCounter5(c => c + 1);
            if (d[0] === d[1]) {
                clearInterval(intervalId);
            }
        }, 100);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const changeColor = () => {
        const intervalId = setInterval(() => {
            setCounter6(c => {
                const n = c === '' ? 9 : c - 1;
                if (n === 0) {
                    clearInterval(intervalId);
                }
                return n;
            });
        }, 100);
        setTimeout(() => {
            setColor('crimson');
        }, 1000);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h2>{counter}</h2>
                <h2>{counter2}</h2>
                <h2>{counter4[0]}-{counter4[1]} {counter5}</h2>
                <div className="containerBin">
                    <div style={{ backgroundColor: color }} onClick={changeColor}>{counter6}</div>
                </div>
                <div className="containerBin">
                    {
                        [...Array(counter3)].map((_, i) => <div key={i}></div>)
                    }
                </div>
            </header>
        </div>
    );
}

export default App;