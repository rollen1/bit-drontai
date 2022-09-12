import { ADD_ONE, REMOVE_ONE } from "../Constants/actions";

function count(state, action) {
    let newState = {...state};
    switch(action.type) {
        case ADD_ONE:
            newState.number ++;
            break;
        case REMOVE_ONE:
            newState.number --;
            break;
        default:
    }

    return newState;
}

export default count;