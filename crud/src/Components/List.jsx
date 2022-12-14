import { useContext } from "react";
import DataContext from "./DataContext";
import Row from "./Row";

function List() {

    const { things } = useContext(DataContext);

    if (things?.length === 0) {

        return (
            <div className="card">
                <div className="top">
                    List of Things
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
                List of Things
            </div>
            <div className="body">
                {
                    things?.map(t => <Row key={t.id} thing={t} />)
                }
            </div>
        </div>
    )
}

export default List;
