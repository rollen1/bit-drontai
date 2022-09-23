import { useContext } from "react";
import DataContext from "./DataContext";
import Row from "./Row";

function List() {

    const { owners } = useContext(DataContext);

    if (owners?.filter(o => !o.deleted).length === 0) {
        return (
            <div className="card">
                <div className="top">
                    List of Owners
                </div>
                <div className="body">
                    <h3>Empty</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="card">
            <div className="top">
                List of Owners
            </div>
            <div className="body">
                {
                    owners?.map(o => o.deleted ? null : <Row key={o.id} owner={o} />)
                }
            </div>
        </div>
    )
}

export default List;
