import { useRef, useEffect, useState } from "react";
import rand from '../../Functions/rand';

function Glass({id, empty, drinkType}) {

    const [fill, setFill] = useState(null);
    const speed = useRef(null);

    useEffect(() => {
        setFill(330);
        speed.current = rand(200, 2000);
    }, []);

    useEffect(() => {
        if (null === fill) {
            return;
        }
        if (fill) {
            setTimeout(() => {
                drink();
            }, speed.current);
        } else {
            empty(id);
        }
    }, [fill, empty, id]);

    const drink = () => {
        setFill(f => f ? f - 30 : 0);
    }

    const doColor = drink => {
        switch(drink) {
            case 'Mojito':
                return 'lime';
            case 'Bloody Mary':
                return 'crimson';
            case 'Cuba Libre':
                return 'rgb(43, 6, 6)';
            default: return 'orange';
        }
    } 


    return (
        <div className="glass">
            <div className="fill" style={{
                height: fill + 'px',
                backgroundColor: doColor(drinkType)
                }}>
            </div>
        </div>
    )
}

export default Glass;