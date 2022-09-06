// import { useState } from 'react';

function Txt({txt, setTxt}) {

    

    return (
        <>
        <div className="form-container">
        <h2 style={{textTransform: 'uppercase'}}>{txt}</h2>
        <input type="text" value={txt} onChange={e => setTxt(e.target.value)}></input>   
        </div>
        </>
    );
}

export default Txt;