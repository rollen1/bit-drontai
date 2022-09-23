import { useCallback, useEffect, useState } from "react";
import rand from "../../Functions/rand";
import Glass from "./Glass";

const menu = [
    'Mojito',
    'Bloody Mary',
    'Cuba Libre'
]

function Main() {

    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        setDrinks([...Array(19)].map(() => ({id: rand(1000000, 9999999), drink: menu[rand(0, 2)]})));
    }, []);

    const empty = useCallback(id => {
        setDrinks(d => d.map(g => g.id === id ? {id: rand(1000000, 9999999), drink: menu[rand(0, 2)]} : {...g}));
    }, []);

    // const empty = id => {
    //     setDrinks(d => d.map(g => g.id === id ? {...g, id: rand(1000000, 9999999)} : {...g}));
    // }

    return (
        <div className="container bar">
            <div className="bin">
                <h1>Drinks Bar</h1>
                <div className="table">
                    {
                        drinks?.map(d => <Glass key={d.id} id={d.id} empty={empty} drinkType={d.drink} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;