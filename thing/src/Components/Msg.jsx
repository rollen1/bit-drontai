import { useContext } from "react"
import MainContext from "./MainContext"

function Msg() {

    const { msgs } = useContext(MainContext);

    if (msgs.length === 0) {
        return null;
    }

    return (
        <div className="messages">
            {
                msgs.map(m => <div className={'msg ' + m.type}  key={m.id}>{m.text}</div>)
            }
        </div>
    )
}

export default Msg;