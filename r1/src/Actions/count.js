import { ADD_5, ADD_ONE, ADD_SQ, ADD_T, BORDER, FONT_SIZE, RA_CO, REMOVE_5, REMOVE_ONE, REMOVE_T, REM_SQ } from '../Constants/actions';

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
        type: ADD_T
    }
}

export function rem2() {
    return {
        type: REMOVE_T
    }
}

export function add5() {
    return {
        type: ADD_5
    }
}

export function rem5() {
    return {
        type: REMOVE_5
    }
}

export function randC() {
    return {
        type: RA_CO
    }
}

export function font() {
    return {
        type: FONT_SIZE
    }
}

export function border() {
    return {
        type: BORDER
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