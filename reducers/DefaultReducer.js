import { combineReducers } from 'redux'

const initialState = {
    isFetching: false,
    firstName: null,
    lastName: null
}

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_USER_DETAILS':

            console.log("DEBUG: Fetching in progress..")
            return {...state, isFetching: true};

        case 'RECEIVE_USER_DETAILS':

            console.log("DEBUG: Fetching is done, actualizing store and components.")
            return {...state, isFetching: false, firstName: action.json.name.first, lastName: action.json.name.last};

        default:

            return state
    }
}

export default combineReducers({
    reducer: defaultReducer,
})