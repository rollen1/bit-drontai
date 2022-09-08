import { useState } from 'react';

import randColor from '../../Functions/randColor';

function T1 () {

    const [colors, setColors] = useState({
        ba: randColor(),
        bo: randColor()
    });

    const co = () => {
        setColors({
            ba: randColor(),
            bo: randColor()
        });
    }

    return (
        <>
        <div className="kv" style={{
            backgroundColor: colors.ba,
            border: '8px solid ' + colors.bo
        }}></div>
        <button onClick={co}>DO</button>
        </>
    )

}

export default T1;