import { 
    FETCH_USER_LOADING, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_ERROR 
} from "../constants";

const initState = {
    isLoading: false,
    fetchUsers: {},
    error: ""
}

const reducerFetch = (state = initState, action) =>{
    switch (action.type) {
        case FETCH_USER_LOADING:
            return{
                ...state,
                isLoading: true
            }
    
        default: return state
    }
}

export default reducerFetch