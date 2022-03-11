import { 
    FETCH_USER_LOADING, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_ERROR, 
    fetch_MAKE_USER_DATA_LOADING,
    fetch_MAKE_USER_DATA_SUCCESS,
    fetch_MAKE_USER_DATA_ERROR
} from "../constants";

const initState = {
    isLoading: false,
    isLogin: false,
    tokenUsers: localStorage.jwt,
    user:{
        lastName: "",
        firstName: "",
        email: "",
        createdAt: "",
        updatedAt: "",
        id: "",
    },
    error: ""
}

const reducerFetch = (state = initState, action) =>{
    switch (action.type) {
        case "isLoading":
            return{
                ...state,
                isLoading: true
            }
            
        case fetch_MAKE_USER_DATA_SUCCESS:
            return{
                ...state,
                currentState : fetch_MAKE_USER_DATA_SUCCESS,
                isLoading: false,
                isLogin: true,
                user:{
                    lastName: action.payload.lastName,
                    firstName: action.payload.firstName,
                    email: action.payload.email,
                    id: action.payload.id,
                    createdAt: action.payload.createdAt,
                    updatedAt: action.payload.updatedAt
                }
                
            }

        case fetch_MAKE_USER_DATA_ERROR:
            return{
                ...state,
                error: action.payload.error,
                isLoading: false,
                isLogin: false
            }    
    
        default: return state
    }
}

export default reducerFetch