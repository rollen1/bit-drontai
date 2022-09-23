import axios from 'axios';
import { useState, useEffect } from 'react';
import DataContext from './DataContext';
import List from './List';
import Create from './Create';
import Bin from './Bin';
import Edit from './Edit';
import Msg from '../Msg';
import { useContext } from 'react';
import MainContext from '../MainContext';

const textures = [
  { id: 1, title: 'Wood' },
  { id: 2, title: 'Metal' },
  { id: 3, title: 'Paper' },
  { id: 4, title: 'Stone' }
]

function Main() {

  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [things, setThings] = useState(null);
  const [owners, setOwners] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [binData, setBinData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [undoDeleteData, setUndoDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  const { createMsg } = useContext(MainContext);

  // READ ALL
  useEffect(() => {
    axios.get('http://localhost:3003/api')
      .then(res => {
        setThings(res.data);
      });
  }, [lastUpdate]);

  // READ for select
  useEffect(() => {
    axios.get('http://localhost:3003/api2')
      .then(res => {
        setOwners(res.data);
      });
  }, [lastUpdate]);


  // CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post('http://localhost:3003/api', createData)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [createData, createMsg]);

  // SOFT DELETE
  useEffect(() => {
    if (null === binData) {
      return;
    }
    axios.delete('http://localhost:3003/api/soft/' + binData.id)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [binData, createMsg]);

  // HARD DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios.delete('http://localhost:3003/api/' + deleteData.id)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [deleteData, createMsg]);

  // UNDO DELETE
  useEffect(() => {
    if (null === undoDeleteData) {
      return;
    }
    axios.delete('http://localhost:3003/api/undo/' + undoDeleteData.id)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [undoDeleteData, createMsg]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios.put('http://localhost:3003/api/' + editData.id, editData)
      .then(res => {
        setLastUpdate(Date.now());
        createMsg(res.data.msg.text, res.data.msg.type);
      })
  }, [editData, createMsg]);


  return (
    <DataContext.Provider value={{
      things,
      textures,
      setCreateData,
      setBinData,
      setDeleteData,
      setUndoDeleteData,
      modalData,
      setModalData,
      setEditData,
      owners
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

export default Main;