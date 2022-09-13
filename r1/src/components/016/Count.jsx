import { useReducer } from "react";
import { add1, add2, add5, addSq, border, font, randC, rem1, rem2, rem5, remSq } from "../../Actions/count";
import count from "../../Reducers/count";
import sq from "../../Reducers/sq";

function Count() {

    const [counter, dispachCounter] = useReducer(count, {
        number: 0,
        color: '#54aaaa',
        fs: '10px',
        border: false
    });

    const [squares, dispachSquares] = useReducer(sq, [])

    return (
        <>
        <h2 style={{
            color: counter.color,
            fontSize: counter.fs,
            border: counter.border ? '1px solid crimson' : null
            }}>{counter.number}</h2>
        <div className="container">
            <button onClick={() => dispachCounter(add1())}>+1</button>
            <button onClick={() => dispachCounter(rem1())}>-1</button>
            <button onClick={() => dispachCounter(add2())}>+2</button>
            <button onClick={() => dispachCounter(rem2())}>-2</button>
            <button onClick={() => dispachCounter(add5())}>+5</button>
            <button onClick={() => dispachCounter(rem5())}>-5</button>
            <button onClick={() => dispachCounter(randC())}>Color</button>
            <button onClick={() => dispachCounter(font())}>Font 10-40</button>
            <button onClick={() => dispachCounter(border())}>Border</button>
        </div>
        <div className="container">
            {
                squares.map((_, i) => <div className="kv" key={i}></div>)
            }
        </div>
        <button onClick={() => dispachSquares(addSq())}>New Square</button>
        <button onClick={() => dispachSquares(remSq())}>Remove Square</button>
        </>
    )
}

export default Count;