import { useContext } from "react";
import DataContext from "./DataContext";

function Row({ owner }) {

    const { setBinData, setModalData } = useContext(DataContext);

    return (
        <div className="row">
            <div className="content">
                <h2>{owner.name}</h2>
            </div>
            <div className="buttons">
                <button className="green" onClick={() => setModalData(owner)}>Edit</button>
                <button className="red" onClick={() => setBinData(owner)}>Delete</button>
            </div>
        </div>
    )
}

export default Row;