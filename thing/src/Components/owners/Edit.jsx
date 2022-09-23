import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataContext from "./DataContext";
import MainContext from "../MainContext";

function Edit() {

    const [name, setName] = useState('');

    const { modalData, setModalData, setEditData } = useContext(DataContext);
    const { createMsg } = useContext(MainContext);

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setName(modalData.name);
    }, [modalData]);

    const save = () => {
        //Validation
        if ('' === name) {
            createMsg('Oh no, owner has no name', 'alert');
            return;
        }
        setEditData({
            name,
            id: modalData.id
        });
        setModalData(null);
    }

    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-bin">
                <div className="card">
                    <div className="top">
                        Edit This Owner
                        <span className="close" onClick={() => setModalData(null)}>X</span>
                    </div>
                    <div className="body">
                        <div className="form">
                            <label>Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
                        </div>
                        <div className="form row">
                            <button className="blue" onClick={save}>Edit Owner</button>
                            <button className="red" onClick={() => setModalData(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;