// import { useEffect } from 'react';
// import { useRef } from 'react';
import { useState } from 'react';
import './App.scss';
import Bin from './Components/011/Bin';
import Del from './Components/011/Del';
import New from './Components/011/New';
// import Dog from './Components/011/Dog';
// import randColor from './Functions/randColor';
// import Nine from './Components/011/Nine';

function App() {

    // const [dogs, setDogs] = useState([]);
    // const [count, setCount] = useState(1);
    // const index = useRef(0);
    // const addButton = useRef();
    // const [nine, setNine] = useState([]);


    // const addNine = () => {
    //     if (nine.length < 9) {
    //         setNine(n => [...n, randColor()]);
    //     }
    // }

    // useEffect(() => {
    //     // const b = document.querySelector('#add-button');
    //     const b = addButton.current;
    //     b.focus();
    // }, [])

    // const add = () => {
    //     setDogs(d => [...d, ++index.current]);
    // }

    // const plus = () => {
    //     setCount(c => c + 1);
    //     console.log('senas:' + count);
    // }

    // useEffect( () => {
    //     console.log('Dogs Changed Or Added 1');
    //     console.log('naujas:' + count);
    //     // setCount(c => c + 1);
    // }, [dogs, count]);

    const [data, setData] = useState([]);



    return (
        <div className="App">
            <header className="App-header">
                {/* <h1>Use Effect {count}</h1>
                

                <div className="container">
                    {
                        dogs.map((n, i) => <Dog key={n} i={n}></Dog>)
                    }
                </div>

                <div className="container">
                    <button onClick={add} id="add-button">Add Dog</button>
                    <button onClick={plus} ref={addButton}>Plus</button>
                </div>

                <Nine nine={nine} setNine={setNine}></Nine>

                <button onClick={addNine}>Add Nine</button> */}

                <div className="layout-main">
                    <div className="layout-left">
                        <New setData={setData} />
                        <Del setData={setData} />
                    </div>
                    <div className="layout-right">
                        <Bin select={1} data={data} />
                        <Bin select={2} data={data} />
                        <Bin select={3} data={data} />
                    </div>

                </div>


            </header>
        </div>
    );
}

export default App;