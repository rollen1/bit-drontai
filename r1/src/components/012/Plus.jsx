import { useState, useEffect } from 'react'

function Plus() {

    const [kv, setKv] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('kv');
        if (null === data) {
            setKv('');
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
            <h1>{kv}</h1>
        </div>
        <button onClick={() => setKv(k => k + '+')}>Add</button>
        </>
    )
}

export default Plus;