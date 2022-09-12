import { ADD_SQ, REM_SQ } from "../Constants/actions";

function sq(state, action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_SQ:
            newState.push('');
            break;
        case REM_SQ:
            newState.shift();
            break;
        default:
    }
    return newState;
}

export default sq;