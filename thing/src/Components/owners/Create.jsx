import { useContext } from "react";
import { useState } from "react";
import MainContext from "../MainContext";
import DataContext from "./DataContext";

function Create() {

    const [name, setName] = useState('');

    const { setCreateData } = useContext(DataContext);
    const { createMsg } = useContext(MainContext);

    const add = () => {
        //Validation
        if ('' === name) {
            createMsg('Oh no, there is no name', 'alert');
            return;
        }
        setCreateData({
            name,
        });
        setName('');
    }

    return (
        <div className="card">
            <div className="top">
                Create New Owner
            </div>
            <div className="body">
                <div className="form">
                    <label>Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
                </div>
                <div className="form">
                    <button className="blue" onClick={add}>Add Owner</button>
                </div>
            </div>
        </div>
    );
}

export default Create;