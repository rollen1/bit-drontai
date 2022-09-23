import { useContext } from "react";
import DataContext from "./DataContext";

function BinRow({ thing }) {

    const { setUndoDeleteData, setDeleteData } = useContext(DataContext);

    return (
        <div className="row">
            <div className="content">
                <h2>{thing.title}</h2>
            </div>
            <div className="buttons">
                <button className="red" onClick={() => setDeleteData({id: thing.id})}>Remove</button>
                <button className="blue" onClick={() => setUndoDeleteData({id: thing.id})}>Restore</button>
            </div>
        </div>
    )
}

export default BinRow;