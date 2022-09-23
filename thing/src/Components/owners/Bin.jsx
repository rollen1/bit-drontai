import { useContext } from "react";
import DataContext from "./DataContext";
import BinRow from "./BinRow";

function Bin() {

    const { owners } = useContext(DataContext);

    if (owners?.filter(o => o.deleted).length === 0) {
        return (
            <div className="card mt">
                <div className="top">
                    Owners in Recycle Bin
                </div>
                <div className="body">
                    <h3>Empty</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="card mt">
            <div className="top">
                Owners in Recycle Bin
            </div>
            <div className="body">
                {
                    owners?.map(o => o.deleted ? <BinRow key={o.id} owner={o} /> : null)
                }
            </div>
        </div>
    )
}

export default Bin;
