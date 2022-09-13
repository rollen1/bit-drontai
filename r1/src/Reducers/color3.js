import { COLOR_3, COLOR_3_BORDER, COLOR_3_BORDER_STYLE, COLOR_3_SIZE } from "../Constants/017";

function color3(state, action) {
    const newState = { ...state };

    switch (action.type) {
        case COLOR_3:
            newState.color = newState.color === 3 ? 1 : newState.color + 1;
            break;
        case COLOR_3_SIZE:
            newState.size = newState.size * 2 > 80 ? 20 : newState.size * 2;
            break;
        case COLOR_3_BORDER:
            newState.border = action.payload;
            break;
        case COLOR_3_BORDER_STYLE:
            newState.borderStyle = action.payload;
            break;
        default:
    }

    return newState;
}

export default color3;