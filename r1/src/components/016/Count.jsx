import { useReducer } from "react";
import { add1, rem1 } from "../../Actions/count";
import count from "../../Reducers/count";

function Count() {

    const [counter, dispachCounter] = useReducer(count, {number: 0});

    return (
        <>
        <h2>{counter.number}</h2>
        <div className="container">
            <button onClick={() => dispachCounter(add1())}>+1</button>
            <button onClick={() => dispachCounter(rem1())}>-1</button>
        </div>
        </>
    )
}

export default Count;