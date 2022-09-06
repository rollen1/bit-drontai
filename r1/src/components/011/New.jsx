import { useState } from 'react';

function New({setData}) {

    const [select, setSelect] = useState('1');
    const [number, setNumber] = useState('');

    const addNew = () => {
        setData(d => [...d, {select: parseInt(select), number: parseInt(number)}]);
        setSelect('1');
        setNumber('');
    }

    return (
        <>
        <div className="form-container">
            <select value={select} onChange={e => setSelect(e.target.value)}>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
            </select>

            <input type="text" onChange={e => setNumber(e.target.value)} value={number}></input>

            <button onClick={addNew}>AddNew</button>
        </div>

        </>
    )
}

export default New;