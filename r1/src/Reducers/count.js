import { ADD_ONE, ADD_TWO, REMOVE_FIVE, REMOVE_ONE, REMOVE_TWO, ADD_FIVE, CHANGE_COLOR, FONT_SIZE } from "../Constants/actions";
import randColor from "../Functions/randColor";
import rand from "../Functions/rand";

function count(state, action) {
    let newState = {...state};
    switch(action.type) {
        case ADD_ONE:
            newState.number ++;
            break;
        case REMOVE_ONE:
            newState.number --;
            break;
        case ADD_TWO:
            newState.number+=2;
             break;
        case REMOVE_TWO:
            newState.number-=2;
            break;
        case ADD_FIVE:
            newState.number+=5;
             break;
        case REMOVE_FIVE:
            newState.number-=5;
            break;
        case CHANGE_COLOR:
            newState.color = randColor();
            break;
        case FONT_SIZE:
            newState.fontSize = rand(10, 45);
            break;
        default:
    }

    return newState;
}

export default count;