import { useContext } from "react";
import DataContext from "./DataContext";
import BinRow from "./BinRow";

function Bin() {

    const { things } = useContext(DataContext);

    if (things?.filter(t => t.deleted).length === 0) {
        return (
            <div className="card mt">
                <div className="top">
                    Things in Recycle Bin
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
                Things in Recycle Bin
            </div>
            <div className="body">
                {
                    things?.map(t => t.deleted ? <BinRow key={t.id} thing={t} /> : null)
                }
            </div>
        </div>
    )
}

export default Bin;
