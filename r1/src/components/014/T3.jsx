import { useState } from "react"

function T3() {

    const [show, setShow] = useState(false);

    return (
        <>
            {
                show ? <div className="kv" onClick={() => setShow(false)}></div> : null
            }
            <button onClick={() => setShow(true)}>Show</button>
        </>
    )
}

export default T3;