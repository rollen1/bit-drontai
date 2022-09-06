import { useState } from 'react';

function Text({setTextNow}) {

    const [text, setText] = useState('');
    

    const control = e => {
        setText(e.target.value);
    }

    return ( 
        <>
        <div className="form-container">
            
            <input type="text" onChange={control} value={text}></input>
            <button onClick={() => setTextNow(text)}>Text Now</button>
        </div>
        </>
    )
}

export default Text;