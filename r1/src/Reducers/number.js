import { ADD_SOME, REM_SOME } from "../Constants/017";

function number(state, action) {
    const newState = { ...state };

    switch (action.type) {
        case ADD_SOME:
            newState.number = newState.number += parseInt(action.payload);
            break;
        case REM_SOME:
            newState.number = newState.number -= parseInt(action.payload);
            break;
        default:

    }

    return newState;
}

export default number;