import * as actionTYpes from '../actions/actionTypes';

import { updateObject } from '../utility';
const initialState = {
    results: []
}


const deleteResult = (state, action) => {
    const newArray = [...state.results]
    newArray.splice(action.id, 1);
    return updateObject(state, { results: newArray });
}
//reducer
const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTYpes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ value: action.result, id: new Date() }) })
        case actionTYpes.DELETE_RESULT:
            return deleteResult(state,action)
        default: break;
    }
    return state;
};


export default resultReducer;