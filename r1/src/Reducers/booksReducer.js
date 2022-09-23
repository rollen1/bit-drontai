import { FILTER_BOOKS, GET_FROM_SERVER, SORT_BOOKS } from "../Constants/books";

function booksReducer(state, action) {

    let newState = null !== state ? [...state] : null;

    switch (action.type) {

        case GET_FROM_SERVER:
            newState = action.payload.map((b, i) => ({ ...b, row: i, show: true }));
            break;
        case SORT_BOOKS:
            switch (action.payload) {
                case '1':
                    newState.sort((a, b) => a.row - b.row);
                    break;
                case '2':
                    newState.sort((a, b) => a.price - b.price);
                    break;
                case '3':
                    newState.sort((a, b) => b.price - a.price);
                    break;
                case '4':
                    newState.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case '5':
                    newState.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                default:
            }
            break;
        case FILTER_BOOKS:
            newState = newState.map(b => b.price < parseInt(action.payload) ? { ...b, show: true } : { ...b, show: false });
            break;
        default:
    }

    return newState;
}

export default booksReducer;