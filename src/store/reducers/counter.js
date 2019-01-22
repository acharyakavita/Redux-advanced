import * as actionTYpes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0,
}

//reducer
const CounterReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTYpes.INCREMENT:
            return updateObject(state, { counter: state.counter + 1 })
        case actionTYpes.ADD:
            return updateObject(state, { counter: state.counter + action.value })
        case actionTYpes.SUBTRACT:
            return updateObject(state, { counter: state.counter - action.value })
        case actionTYpes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 })
        default: return state;
    }
};


export default CounterReducer;