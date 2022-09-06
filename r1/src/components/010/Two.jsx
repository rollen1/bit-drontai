import { useState } from "react";

function Two({setF1, setF2}) {


    const [cb1, setCb1] = useState(false);
    const [cb2, setCb2] = useState(false);

    return (
        <>
            <div className="form-container">
                <div>
                    <input type="checkbox" id="_2" onChange={() => setCb1(c => !c)} checked={cb1}></input>
                    <label htmlFor="_2" style={{ color: cb1 ? 'crimson' : null }}>ONE</label>
                </div>
                <button onClick={() => setF1(cb1)}>show/hide</button>
            </div>
            <div className="form-container">
                <div>
                    <input type="checkbox" id="_3" onChange={() => setCb2(c => !c)} checked={cb2}></input>
                    <label htmlFor="_3" style={{ color: cb2 ? 'crimson' : null }}>TWO</label>
                </div>
                <button onClick={() => setF2(cb2)}>show/hide</button>
            </div>
        </>
    );

}

export default Two;