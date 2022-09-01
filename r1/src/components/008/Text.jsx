import { useState } from 'react';

function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('#7caa0c');
    const [range, setRange] = useState(0);
    const [textNow, setTextNow] = useState('***');

    const control = e => {
        // Number(e.target.value) && setText(e.target.value);
        setText(e.target.value);
    }

    const colorControl = e => {
        setColor(e.target.value);
    }

    const rangeControl = e => {
        setRange(parseInt(e.target.value));
    }

    return (

        <>
            <div className="form-container">
                <h2>TEXT: {textNow}</h2>
                <input type="text" onChange={control} value={text}></input>
                <button style={{marginTop: '10px'}} onClick={() => setTextNow(text || '***')}>Text Now</button>
            </div>
            <div className="form-container">
                <h2 style={{color}}>COLOR</h2>
                <input type="color" onChange={colorControl} value={color}></input>
                <button style={{marginTop: '10px'}} onClick={() => setColor('#ff0000')}>Set Red</button>
            </div>
            <div className="form-container">
                <h2>RANGE: {('' + range).padStart(3, 0)}</h2>
                <input type="range" onChange={rangeControl} value={range}></input>
                <button style={{marginTop: '10px'}} onClick={() => setRange(s => Math.min(100, s + 10))}>Plus</button>
                <button style={{marginTop: '10px'}} onClick={() => setRange(s => Math.max(0, s - 10))}>Minus</button>
            </div>
        </>
    )
}

export default Text;