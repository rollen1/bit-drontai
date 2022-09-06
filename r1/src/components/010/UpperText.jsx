import { useState } from 'react';

function Txt() {

    const [txt, setTxt] = useState('');

    const txtArea = ( 
    <h2 style={{textTransform: 'uppercase'}}>{txt}</h2> 
    );

    return (
    <>
    <div className='form-container'>
        
        <input type="text" value={txt} onChange={e => setTxt(e.target.value)}></input>

    </div>
    </>
    );
}

export default Txt;
export { txtArea as txtArea};
