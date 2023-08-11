import { CHANGE_ENTRIES, ADD_USER, REMOVE_USER } from './actions';

const initialState = {
    userList: [],
    entries: 10,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_ENTRIES:
            return {
                ...state,
                entries: action.payload.entries
            }
        case ADD_USER:
            return {
                ...state,
                userList: [...state.userList, action.payload.user]
            }
        case REMOVE_USER:
            return {
                ...state,
                userList: action.payload.list
            }
        default:
            return state;
    }
};

export default reducer;