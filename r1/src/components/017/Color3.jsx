import { useState } from "react";
import { useReducer } from "react"
import { actionColor3, actionColor3Border, actionColor3BorderStle, actionColor3Size } from "../../Actions/017";
import color3 from "../../Reducers/color3"

function Color3() {

    const [color, colorDispach] = useReducer(color3, {
        color: 1,
        size: 20,
        border: 0,
        borderStyle: 'solid'
    });
    const [border, setBorder] = useState(0);
    const [borderStyle, setBorderStyle] = useState('solid');

    return (
        <>
            <div className="container">
                <div className="kv" style={{
                    backgroundColor: ['crimson', 'skyblue', 'darkgreen'][color.color - 1],
                    width: color.size + 'px',
                    height: color.size + 'px',
                    border: color.border + 'px ' + color.borderStyle + ' pink'
                }}></div>
            </div>
            <button onClick={() => colorDispach(actionColor3())}>Do color</button>
            <button onClick={() => colorDispach(actionColor3Size())}>Do Size</button>
            border size: <input type="number" value={border} onChange={e => setBorder(e.target.value)}></input>
            <button onClick={() => { colorDispach(actionColor3Border(border)) }}>Set Border</button>
            <select value={borderStyle} onChange={e => setBorderStyle(e.target.value)}>
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
            </select>
            <button onClick={() => { colorDispach(actionColor3BorderStle(borderStyle)) }}>Set Border Style</button>

        </>
    )

}

export default Color3;