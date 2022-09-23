import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Bin from './Components/Bin';
import Create from './Components/Create';
import DataContext from './Components/DataContext.jsx';
import Edit from './Components/Edit';
import List from './Components/List';
import Msg from './Components/Msg';
import { create, read, destroy, update, softDelete, restore } from './Functions/localStorage';
import rand from './Functions/rand';

const key = 'things_shelf';

const textures = [
  {id: 1, title: 'Wood'},
  {id: 2, title: 'Metal'},
  {id: 3, title: 'Paper'},
  {id: 4, title: 'Stone'}
]

function App() {


  const [things, setThings] = useState(null);
  const [deletedThings, setDeletedThings] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [restoreData, setRestoreData] = useState(null);
  const [destroyData, setDestroyData] = useState(null);

  const [msgs, setMsgs] = useState([]);


  //READ of LIST
  useEffect(() => {
    setThings(read(key, 'list'));
  }, [lastUpdate]);

  //READ of BIN
  useEffect(() => {
    setDeletedThings(read(key, 'bin'));
  }, [lastUpdate]);

  //CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now());
    makeMsg('New THING was created!', 'success');
  }, [createData]);

  //DELETE (soft delete)
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    softDelete(key, deleteData.id);
    setLastUpdate(Date.now());
    makeMsg('The THING was broken!', 'info');
  }, [deleteData]);

  //RESTORE after soft delete
  useEffect(() => {
    if (null === restoreData) {
      return;
    }
    restore(key, restoreData.id);
    setLastUpdate(Date.now());
    makeMsg('The THING was restored!', 'info');
  }, [restoreData]);

    //RESTORE after soft delete
    useEffect(() => {
      if (null === destroyData) {
        return;
      }
      destroy(key, destroyData.id);
      setLastUpdate(Date.now());
      makeMsg('The THING was removed!', 'info');
    }, [destroyData]);

  //EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now());
  }, [editData]);

  const makeMsg = (text, type) => {
    const id = rand(1000000, 9999999);
    setMsgs(m => [...m, { text, id, type }]);
    setTimeout(() => {
      setMsgs(m => m.filter(ms => ms.id !== id));
    }, 4000);
  }

  return (
    <DataContext.Provider value={{
      textures,
      setCreateData,
      things,
      setDeleteData,
      modalData,
      setModalData,
      setEditData,
      msgs,
      deletedThings,
      setRestoreData,
      setDestroyData
    }}>
      <div className="container">
        <div className="bin">
          <div className="box-1">
            <Create />
            <Bin />
          </div>
          <div className="box-2">
            <List />
          </div>
        </div>
      </div>
      <Edit />
      <Msg />
    </DataContext.Provider>
  );
}

export default App;