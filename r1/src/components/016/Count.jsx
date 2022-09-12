import { useReducer } from "react";
import { add1, rem1, add2, rem2, add5, rem5, changeColor, randFont, borderOn, addSq, remSq } from "../../Actions/count";
import count from "../../Reducers/count";
import sq from "../../Reducers/sq";

function Count() {

    const [counter, dispachCounter] = useReducer(count, {
        number: 0,
        color: '#54aaaa',
        fontSize: 16,
        border: false,
    });

    const [squares, dispachSquares] = useReducer(sq, [])

    return (
        <>
        <h2 style={{
            color: counter.color,
            fontSize: counter.fontSize,
            border: counter.border ? '1px solid crimson' : null
        }}>{counter.number}</h2>
        <div className="container">
            <button onClick={() => dispachCounter(borderOn())}>Border</button>
            <button onClick={() => dispachCounter(randFont(10, 40))}>Font</button>
            <button onClick={() => dispachCounter(changeColor())}>Color</button>
            <button onClick={() => dispachCounter(add1())}>+1</button>
            <button onClick={() => dispachCounter(rem1())}>-1</button>
            <button onClick={() => dispachCounter(add2())}>+2</button>
            <button onClick={() => dispachCounter(rem2())}>-2</button>
            <button onClick={() => dispachCounter(add5())}>+5</button>
            <button onClick={() => dispachCounter(rem5())}>-5</button>
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