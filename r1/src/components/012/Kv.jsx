import { useState, useEffect } from 'react'

function Kv() {

    const [kv, setKv] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('kv');
        if (null === data) {
            setKv([]);
        } else {
            setKv(JSON.parse(data));
        } 
    }, []);

    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
    }, [kv]);

    return (
        <>
        <div className="container">
            {
                kv?.map((_, i) => <div key={i}></div>)
            }
        </div>
        <button onClick={() => setKv(k => [...k ?? [], ''])}>Add</button>
        </>
    )
}

export default Kv;