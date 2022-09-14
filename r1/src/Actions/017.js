import { ADD_SOME, COLOR_3, COLOR_3_BORDER, COLOR_3_BORDER_STYLE, COLOR_3_SIZE, GET_TEN, REM_SOME, SHOW_ALL, SHOW_HIDE, SORT_TEN, SORT_TEN_DESC, SORT_TEN_RAND, SORT_TEN_RESET } from "../Constants/017";

export function actionColor3() {
    return {
        type: COLOR_3
    }
}

export function actionColor3Size() {
    return {
        type: COLOR_3_SIZE
    }
}

export function actionColor3Border(border) {
    return {
        type: COLOR_3_BORDER,
        payload: border
    }
}

export function actionColor3BorderStle(border) {
    return {
        type: COLOR_3_BORDER_STYLE,
        payload: border
    }
}

export function addSome(what) {
    return {
        type: ADD_SOME,
        payload: what
    }
}

export function remSome(what) {
    return {
        type: REM_SOME,
        payload: what
    }
}

export function get10() {
    return {
        type: GET_TEN,
    }
}

export function sort10() {
    return {
        type: SORT_TEN,
    }
}

export function sort10D() {
    return {
        type: SORT_TEN_DESC
    }
}

export function sort10R() {
    return {
        type: SORT_TEN_RESET
    }
}

export function sort10Rand() {
    return {
        type: SORT_TEN_RAND
    }
}

export function showHide(pos) {
    return {
        type: SHOW_HIDE,
        payload: pos
    }
}

export function showAll() {
    return {
        type: SHOW_ALL
    }
}