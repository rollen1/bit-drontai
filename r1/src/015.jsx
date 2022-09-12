import { useState } from 'react';
import './App.scss';
import T11 from './Components/015/T11';
import T12 from './Components/015/T12';
import T21 from './Components/015/T21';
import T22 from './Components/015/T22';
// import T31 from './Components/015/T31';
// import T32 from './Components/015/T32';
import T33 from './Components/015/T33';
import T41 from './Components/015/T41';
import T42 from './Components/015/T42';
import T43 from './Components/015/T43';

function App() {

    const [add19, setAdd19] = useState(0);
    const [showSq, setShowSq] = useState(false);
    const [showCircle, setShowCircle] = useState(false);
    const [addFig, setAddFig] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Total Recall 2</h1>
                <T11 setAdd19={setAdd19}></T11>
                <T12 add19={add19}></T12>
                <T21 setShowSq={setShowSq}></T21>
                <T22 showSq={showSq}></T22>
                {/* <div className="container31">
                    <T31 showCircle={showCircle} setShowCircle={setShowCircle}></T31>
                </div>
                <div className="container31">
                    <T32 showCircle={showCircle} setShowCircle={setShowCircle}></T32>
                </div> */}
                <div className="container31">
                    <T33 showCircle={showCircle} setShowCircle={setShowCircle} dir={false}></T33>
                </div>
                <div className="container31">
                    <T33 showCircle={showCircle} setShowCircle={setShowCircle} dir={true}></T33>
                </div>
                <T41 setAddFig={setAddFig}></T41>
                <T43 setAddFig={setAddFig}></T43>
                <T42 addFig={addFig}></T42>
            </header>
        </div>
    );
}

export default App;