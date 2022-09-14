import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { get10, showAll, showHide, sort10, sort10D, sort10R, sort10Rand } from "../../Actions/017";
import ten from "../../Reducers/ten";

function Ten() {

    const [numbers, dispachNumbers] = useReducer(ten, []);
    const [pos, setPos] = useState(null);

    useEffect(() => {
        dispachNumbers(get10());
    }, []);

    useEffect(() => {
        if (pos === null) {
            return;
        }
        dispachNumbers(showHide(pos));
    }, [pos]);

    return (
        <>
            <div className="container">
                {
                    numbers.map((n, i) => n.show ?
                    <h4 key={i} style={{borderBottom: n.line ? '2px solid orange' : null}}>{n.number}</h4>
                    : null)
                }
            </div>
            <div className="container">
                <button onClick={() => dispachNumbers(get10())}>reMake</button>
                <button onClick={() => dispachNumbers(sort10())}>sort 9-1</button>
                <button onClick={() => dispachNumbers(sort10D())}>sort 1-9</button>
                <button onClick={() => dispachNumbers(sort10R())}>sort reset</button>
                <button onClick={() => dispachNumbers(sort10Rand())}>randomize</button>
                <button onClick={() => setPos(p => !(p ?? false))}>Show Hide</button>
                <button onClick={() => dispachNumbers(showAll())}>Show all</button>
            </div>
        </>
    );

}

export default Ten;