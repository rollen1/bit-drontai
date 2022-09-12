import { ADD_ONE, CHANGE_COLOR, FONT_SIZE, REMOVE_ONE, BORDER_ON, ADD_SQ, REM_SQ } from '../Constants/actions';
import { ADD_TWO, REMOVE_TWO } from '../Constants/actions';
import { ADD_FIVE, REMOVE_FIVE } from '../Constants/actions';

export function add1() {
    return {
        type: ADD_ONE
    }
}

export function rem1() {
    return {
        type: REMOVE_ONE
    }
}

export function add2() {
    return {
        type: ADD_TWO
    }
}

export function rem2() {
    return {
        type: REMOVE_TWO
    }
}

export function add5() {
    return {
        type: ADD_FIVE
    }
}

export function rem5() {
    return {
        type: REMOVE_FIVE
    }
}

export function changeColor() {
    return {
        type: CHANGE_COLOR
    }
}

export function randFont() {
    return {
        type: FONT_SIZE
    }
}

export function borderOn() {
    return {
        type: BORDER_ON
    }
}

export function addSq() {
    return {
        type: ADD_SQ
    }
}

export function remSq() {
    return {
        type: REM_SQ
    }
}