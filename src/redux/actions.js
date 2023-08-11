export const CHANGE_ENTRIES = "CHANGE_ENTRIES"
export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"
export const changeEntries = (entries) => {
    return {
        type: 'CHANGE_ENTRIES',
        payload: {entries} 
    }
}
export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: {user}
    }
}
export const removeUser = (list) => {
    return {
        type: 'REMOVE_USER',
        payload: {list}
    }
}