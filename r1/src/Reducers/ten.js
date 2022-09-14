import { GET_TEN, SHOW_ALL, SHOW_HIDE, SORT_TEN, SORT_TEN_DESC, SORT_TEN_RAND, SORT_TEN_RESET } from "../Constants/017";
import rand from '../Functions/rand';

function ten(state, action) {
    let newState = [...state];

    switch (action.type) {
        case GET_TEN:
            newState = [];
            [...Array(10)].forEach((_, i) => {
                const number = rand(1, 9);
                newState.push({ row: i, show: true, number, line: !(number % 2) })
            });
            break;
        case SORT_TEN:
            newState.sort((a, b) => b.number - a.number);
            break;
        case SORT_TEN_DESC:
            newState.sort((a, b) => a.number - b.number);
            break;
        case SORT_TEN_RESET:
            newState.sort((a, b) => a.row - b.row);
            break;
        case SORT_TEN_RAND:
            newState.sort(() => rand(0, 1) ? -1 : 1);
            break;
        case SHOW_HIDE:
            newState = newState.map(n => ({ ...n, show: (n.number % 2 ? action.payload : !action.payload) }));
            break;
        case SHOW_ALL:
            newState = newState.map(n => ({ ...n, show: true}));
            break;
        default:
    }
    return newState;
}

export default ten;