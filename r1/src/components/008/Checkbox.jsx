import { useState } from "react";
import rand from '../../Functions/rand';

const checksData = {A: false, B: true, C: true, D: false};
const radioData = {A: false, B: false, C: true, D: false};

function Checkbox() {

    const [cb, setCb] = useState(checksData);
    const [radio, setRadio] = useState(radioData);

    const change = e => {
        const v = e.target.value;
        setCb(c => ({...c, [v]: !c[v]})); //kai v == 'A' => A: !c.A
    }

    const radioChange = e => {
        const v = e.target.value;
        const r = {};
        for (const a in radioData) {
            r[a] = a === v ? true : false;
        }
        setRadio(r);
    }

    const randomCheck = () => {
        const checks = {};
        for (const a in checksData) {
            checks[a] = !rand(0, 1);
        }
        setCb(checks);
        // setCb({
        //     A: !rand(0, 1),
        //     B: !rand(0, 1),
        //     C: !rand(0, 1),
        //     D: !rand(0, 1)
        // });
    }

    return (
        <>
            <div className="form-container">
                <div>
                    <input type="checkbox" value="A" id="_1" onChange={change} checked={cb.A}></input>
                    <label htmlFor="_1" style={{color: cb.A ? 'crimson' : null}}>A Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="B" id="_2" onChange={change} checked={cb.B}></input>
                    <label htmlFor="_2" style={{color: cb.B ? 'crimson' : null}}>B Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="C" id="_3" onChange={change} checked={cb.C}></input>
                    <label htmlFor="_3" style={{color: cb.C ? 'crimson' : null}}>C Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="D" id="_4" onChange={change} checked={cb.D}></input>
                    <label htmlFor="_4" style={{color: cb.D ? 'crimson' : null}}>D Raidė</label>
                </div>
                <button onClick={randomCheck}>RANDOM</button>
            </div>

            <div className="form-container">
                <div>
                    <input type="checkbox" value="A" id="_5" onChange={radioChange} checked={radio.A}></input>
                    <label htmlFor="_5" style={{color: radio.A ? 'crimson' : null}}>A Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="B" id="_6" onChange={radioChange} checked={radio.B}></input>
                    <label htmlFor="_6" style={{color: radio.B ? 'crimson' : null}}>B Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="C" id="_7" onChange={radioChange} checked={radio.C}></input>
                    <label htmlFor="_7" style={{color: radio.C ? 'crimson' : null}}>C Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="D" id="_8" onChange={radioChange} checked={radio.D}></input>
                    <label htmlFor="_8" style={{color: radio.D ? 'crimson' : null}}>D Raidė</label>
                </div>
            </div>
        </>
    );
}

export default Checkbox;
