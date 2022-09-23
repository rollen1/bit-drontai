import { useRef, useEffect, useState } from "react";
import rand from '../../Functions/rand';

function Glass() {

    const [fill, setFill] = useState(null);
    const speed = useRef(null);

    useEffect(() => {
        setFill(330);
        speed.current = rand(200, 2000);
        startDrink();
    }, []);

    useEffect(() => {
        if (null === fill) {
            return;
        }
        if (fill) {
            setTimeout(() => {
                drink();
            }, speed.current);
        }

    }, [fill]);

    const startDrink = () => {
        setTimeout(() => {
            drink();
        }, 500);
    }


    const drink = () => {
        setFill(f => f ? f - 30 : 0);
    }


    return (
        <div className="glass">
            <div className="fill" style={{height: fill + 'px'}}>
            

            </div>
        </div>
    )
}

export default Glass;