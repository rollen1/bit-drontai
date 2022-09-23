import { useContext } from "react";
import DataContext from "./DataContext";

function BinRow({ owner }) {

    const { setUndoDeleteData, setDeleteData } = useContext(DataContext);

    return (
        <div className="row">
            <div className="content">
                <h2>{owner.name}</h2>
            </div>
            <div className="buttons">
                <button className="red" onClick={() => setDeleteData(owner)}>Remove</button>
                <button className="blue" onClick={() => setUndoDeleteData(owner)}>Restore</button>
            </div>
        </div>
    )
}

export default BinRow;