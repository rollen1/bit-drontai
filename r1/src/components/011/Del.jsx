import { useState } from 'react';
function Del({setData}) {

    const [number, setNumber] = useState('');

    const remove = () => {
        setData(d => d.filter(kv => kv.number !== parseInt(number)));
        setNumber('');
    }

    return (
        <>
        <div className="form-container">
            <input type="text" onChange={e => setNumber(e.target.value)} value={number}></input>
            <button onClick={remove}>Delete</button>
        </div>
        </>
    )
}

export default Del;