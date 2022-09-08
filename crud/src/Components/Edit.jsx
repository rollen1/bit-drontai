import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataContext from "./DataContext.jsx";

function Edit() {

    const [thing, setThing] = useState('');
    const [color, setColor] = useState('#000000');
    const [cs, setCs] = useState(false);

    const { modalData, setModalData, setEditData } = useContext(DataContext);

    useEffect(() => {
        if(null === modalData) {
            return;
        }
        setThing(modalData.thing);
        setColor(modalData.color);
        setCs(modalData.cs);
    }, [modalData]);

    const save = () => {
        setEditData({
            thing,
            color,
            cs: cs ? 1 : 0,
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
                        Edit This Thing
                        <span className="close" onClick={() => setModalData(null)}>X</span>
                    </div>
                    <div className="body">
                        <div className="form">
                            <label>Thing</label>
                            <input type="text" value={thing} onChange={e => setThing(e.target.value)}></input>
                        </div>
                        <div className="form">
                            <label>Color</label>
                            <input type="color" value={color} onChange={e => setColor(e.target.value)}></input>
                        </div>
                        <div className="form">
                            <input type="checkbox" id="sce" checked={cs} onChange={() => setCs(c => !c)}></input>
                            <label htmlFor="sce">Circle or Square</label>
                            <div className="c"></div>
                            <div className="s"></div>
                        </div>
                        <div className="form row">
                            <button className="blue" onClick={save}>Edit Thing</button>
                            <button className="red" onClick={() => setModalData(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;