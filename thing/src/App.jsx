import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import MainContext from './Components/MainContext';

import { useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';

import ThingsMain from './Components/things/Main';
import OwnersMain from './Components/owners/Main';


function App() {

  const [msgs, setMsgs] = useState([]);

  const createMsg = useCallback((text, type = 'info') => {
    const id = uuidv4();
    setMsgs(m => [...m, { id, text, type }]);
    setTimeout(() => setMsgs(m => m.filter(msg => msg.id !== id)), 4000);
  }, []);

  return (
    <BrowserRouter>
      <MainContext.Provider value={{
        createMsg,
        msgs
      }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/things" element={<ThingsMain />} />
          <Route path="/owners" element={<OwnersMain />} />
        </Routes>

      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;