import { ADD_TODO } from '../constants/constants'
import Immutable from 'immutable'

export function addTodo(todo) {
    return {
        type: ADD_TODO,
    }
}

export function thunk(blah) {
    return (dispatch, getState) => {
        //do stuff
    }
}