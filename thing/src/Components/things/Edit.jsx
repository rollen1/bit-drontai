import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataContext from "./DataContext";
import MainContext from "../MainContext";

function Edit() {

    const [thing, setThing] = useState('');
    const [color, setColor] = useState('#000000');
    const [cs, setCs] = useState(false);
    const [texture, setTexture] = useState(0);

    const { modalData, setModalData, setEditData, textures } = useContext(DataContext);
    const { createMsg } = useContext(MainContext);

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setThing(modalData.title);
        setColor(modalData.color);
        setCs(modalData.cs);
        setTexture(modalData.texture)
    }, [modalData]);

    const save = () => {
        //Validation
        if ('' === thing) {
            createMsg('Oh no, thing title is empty', 'alert');
            return;
        }
        setEditData({
            thing,
            color,
            cs: cs ? 1 : 0,
            texture,
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
                        <div className="form">
                            <label>Texture</label>
                            <div className="cb-line">
                                {
                                    textures.map(t => <span key={t.id}>
                                        <input id={'e_' + t.id} type="checkbox"
                                            checked={t.id === texture} onChange={() => setTexture(t.id)}>
                                        </input>
                                        <label htmlFor={'e_' + t.id}>{t.title}</label>
                                    </span>)
                                }
                            </div>
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