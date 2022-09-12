import { useState } from "react";

function T5() {

    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <div className="container">
                {
                    [...Array(50)].map((_, i) => <button onClick={() => setNumber(i + 1)} key={i}>{i + 1}</button>)
                }
            </div>
        </>
    )
}

export default T5;