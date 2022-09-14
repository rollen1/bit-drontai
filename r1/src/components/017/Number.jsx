import { useState } from "react";
import { useReducer } from "react"
import { addSome, remSome } from "../../Actions/017";
import number from "../../Reducers/number"

function Number() {

    const [num, dispachNum] = useReducer(number, {number: 0});
    const [input, setInput] = useState(0);

    return (
        <>
        <h2>{num.number}</h2>
        <input type="number" value={input} onChange={e => setInput(e.target.value)}></input>
        <button onClick={() => dispachNum(addSome(input))}>ADD</button>
        <button onClick={() => dispachNum(remSome(input))}>REM</button>
        </>
    )
}

export default Number;