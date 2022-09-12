import { useEffect, useState } from 'react';
import randColor from '../../Functions/randColor';

function ColorSquares() {

    const [sq, setSq] = useState([]);

    useEffect(() => {
        const c = randColor();
        setSq([...Array(10)].map((_, i) => ({ id: i + 1, color: c })))
    }, []);

    const changeColor = id => {
        setSq(square => square.map(s => s.id === id ? { ...s, color: randColor() } : { ...s }))
    }

    return (
        <>
            <div className="container">
                {
                    sq.map(s =>
                        <div onClick={() => changeColor(s.id)} key={s.id} className="kv" style={{ background: s.color }}>
                        </div>)
                }
            </div>
        </>
    )
}

export default ColorSquares;