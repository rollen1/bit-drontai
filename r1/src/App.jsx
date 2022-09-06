import { useState } from 'react';
import './App.scss';
import DataPlus from './Components/012/DataPlus';
import L1 from './Components/012/L1';

function App() {

    const [stars, setStars] = useState('');
    const [pluses, setPluses] = useState('');
    const [minuses, setMinuses] = useState('');

    return (
        <div className="App">
            <DataPlus.Provider value={{
                pluses: pluses,
                minuses: minuses
            }}>
            <header className="App-header">
                <h1>Context</h1>
                <L1 stars={stars} />
                <button onClick={() => setStars(s => s + '*')}>ADD *</button>
                <button onClick={() => setPluses(s => s + '+')}>ADD +</button>
                <button onClick={() => setMinuses(s => s + '-')}>ADD -</button>
            </header>
            </DataPlus.Provider>
        </div>
    );
}

export default App;