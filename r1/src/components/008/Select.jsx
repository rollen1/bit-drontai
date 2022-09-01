import { useState } from "react";

function Select() {

    const selectData = [
        {val: 5, name: 'Klevas'},
        {val: 9, name: 'Uosis'},
        {val: 10, name: 'Agrastas'},
        {val: 40, name: 'Obelis'}
    ];

    const [select, setSelect] = useState('3');
    const [selects, setSelects] = useState('10');

    return (
        <>
        <div className="form-container">
            <select value={select} onChange={e => setSelect(e.target.value)}>
                <option value="1">Drakoniukas</option>
                <option value="2">Delfinas</option>
                <option value="3">Katinas</option>
                <option value="18">Batuotas Katinas</option>
            </select>
            <button onClick={() => setSelect(2)}>Delfinas</button>
        </div>
        <div className="form-container">
            <h2>{selectData.find(s => s.val === parseInt(selects))?.name}</h2>
            <select value={selects} onChange={e => setSelects(e.target.value)}>
            {
                selectData.map(s => <option key={s.val} value={s.val}>{s.name}</option>)
            }
            </select>
        </div>
        </>
    );

}

export default Select;