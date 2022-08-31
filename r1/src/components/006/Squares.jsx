import { useState } from "react";
import rand from '../../Functions/rand.js';
import randColor from '../../Functions/randColor.js';

function Squares() {

    const [sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, { number: rand(100, 999), color: randColor() }]);
    }

    const sort = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number));
    }

    return (
        <>
            <h1>STATE { sq.filter(s => s.number < 300).length} </h1>
            <div className="container">
                {
                    sq.map((n, i) => <div style={
                        { 
                            backgroundColor: n.number < 300 ? 'black' : n.color,
                            borderRadius: n.number % 2 ? null : '50%' 
                        }
                    } key={i}>{n.number}</div>)
                }
            </div>
            <button onClick={add}>add []</button>
            <button onClick={sort}>sort []</button>
        </>
    )

}

export default Squares;