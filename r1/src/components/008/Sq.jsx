import { useState } from "react";

function Sq() {

    const [cb, setCb] = useState(false);

    const [paint, setPaint] = useState(false);

    const [cb1, setCb1] = useState(false);
    const [cb2, setCb2] = useState(false);

    return (
        <>
            <div className="form-container">
                <div className="kv" style={{backgroundColor: paint ? 'black' : 'crimson'}}></div>
                <div>
                    <input type="checkbox" id="_1" onChange={() => setCb(c => !c)} checked={cb}></input>
                    <label htmlFor="_1" style={{ color: cb ? 'crimson' : null }}>Checked</label>
                </div>
                <button onClick={() => setPaint(cb)}>Paint</button>
            </div>

            <div className="form-container">
                <div className="kv" style={{backgroundColor: cb1 && cb2 ? 'crimson' : 'black'}}></div>
                <div>
                    <input type="checkbox" id="_2" onChange={() => setCb1(c => !c)} checked={cb1}></input>
                    <label htmlFor="_2" style={{ color: cb1 ? 'crimson' : null }}>ONE</label>
                </div>
                <div>
                    <input type="checkbox" id="_3" onChange={() => setCb2(c => !c)} checked={cb2}></input>
                    <label htmlFor="_3" style={{ color: cb2 ? 'crimson' : null }}>TWO</label>
                </div>
            </div>
        </>
    )

}

export default Sq;