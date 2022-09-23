import { useContext } from "react";
import DataContext from "./DataContext";

function Row({ thing }) {

    const { setBinData, setModalData, textures, owners } = useContext(DataContext);

    return (
        <div className="row">
            <div className="content">
                <h2>{thing.title}</h2>
                <div className="color" style={{
                    backgroundColor: thing.color,
                    borderRadius: thing.cs ? '50%' : null
                }}></div>
                <h4>{textures.find(t => t.id === thing.texture)?.title}</h4>
                <h6>{owners?.find(o => o.id === thing.owner_id)?.name}</h6>
            </div>
            <div className="buttons">
                <button className="green" onClick={() => setModalData(thing)}>Edit</button>
                <button className="red" onClick={() => setBinData({id: thing.id})}>Delete</button>
            </div>
        </div>
    )
}

export default Row;