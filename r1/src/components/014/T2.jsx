import { useState } from 'react';

import rand from '../../Functions/rand';

function T2 () {

    const [numbers, setNumbers] = useState([
        rand(0, 100), rand(0, 100), rand(0, 100)
    ]);

    const numb = () => {
        setNumbers([
            rand(0, 100), rand(0, 100), rand(0, 100)
        ]);
    }

    return (
        <>
        <div>
            {
                [...numbers].sort((a, b) => b - a).map((n, i) => <span key={i}> {n} </span>)
            }
        </div>
        <button onClick={numb}>DO</button>
        </>
    )

}

export default T2;