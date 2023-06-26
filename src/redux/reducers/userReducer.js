import * as types from '../constants'

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const data = (state = initialState, action) => {
    switch (action.type) {
        //GET USER REDUCER
        case types.LOAD_USER_START:
            console.log('load user start reducer');
            return {
                ...state,
                isLoading: true
            }
        case types.LOAD_USER_SUCCESS:
            console.log('load user success reducer');
            return {
                ...state,
                isLoading: false,
                users: [...action.payload]
            }
        case types.LOAD_USER_ERROR:
            console.log('load user error reducer');
            return {
                ...state,
                isLoading: true,
                error: action.payload
            }

        // ADD USER REDUCER
        case types.ADD_USER_START:
            console.log('add user start reducer');
            return {
                ...state,
                isLoading: true
            }
        case types.ADD_USER_SUCCESS:
            console.log('add user success reducer');
            return {
                ...state,
                isLoading: false,
                users: [...state.users, action.payload]
            }
        case types.ADD_USER_ERROR:
            console.log('add user error reducer');
            return {
                ...state,
                isLoading: true,
                error: action.payload
            }

        // DELETE USER REDUCER
        case types.DELETE_USER_START:
            console.log('delete user start reducer');
            return {
                ...state,
                // isLoading: true
            }
        case types.DELETE_USER_SUCCESS:
            console.log('delete user success reducer');
            return {
                ...state,
                isLoading: false,
                users: state.users.filter((item) => item.id !== action.payload)
            }
        case types.DELETE_USER_ERROR:
            console.log('delete user error reducer');
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        // EDIT USER REDUCER
        case types.EDIT_USER_START:
            console.log('edit user start reducer');
            return {
                ...state,
                isLoading: true
            }
        case types.EDIT_USER_SUCCESS:
            console.log('edit user success reducer');
            return {
                ...state,
                isLoading: false,
                users: [...state.users]
            }
        case types.EDIT_USER_ERROR:
            console.log('edit user error reducer');
            return {
                ...state,
                isLoading: true,
                error: action.payload
            }

        // SHOW USER REDUCER
        case types.SHOW_USER_START:
            console.log('show user start reducer');
            return {
                ...state,
                isLoading: true
            }
        case types.SHOW_USER_SUCCESS:
            console.log('show user success reducer');
            return {
                ...state,
                isLoading: false,
                users: [action.payload]
            }
        case types.SHOW_USER_ERROR:
            console.log('show user error reducer');
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case types.SHOW_USER_RES_CLEAN:
            console.log('show user res clean reducer');
            return {
                ...state,
                users: [],
                error: null
            }
    
        default:
            return state;
    }
}

export default data;