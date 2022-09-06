import { useState, useEffect } from 'react';
import randColor from '../../Functions/randColor';

function Color() {

    const [kv, setKv] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('kv');
        if (null === data) {
            setKv(randColor());
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
            <div style={{background: kv}}></div>
        </div>
        <button onClick={() => setKv(randColor())}>color</button>
        </>
    )
}

export default Color;