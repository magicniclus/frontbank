import { 
    FETCH_USER_LOADING, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_ERROR, 
    fetch_MAKE_USER_DATA_LOADING,
    fetch_MAKE_USER_DATA_SUCCESS
} from "../constants";

const initState = {
    isLoading: false,
    isLogin: false,
    tokenUsers: '',
    lastName: "",
    firstName: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    id: "",
    error: ""
}

const reducerFetch = (state = initState, action) =>{
    switch (action.type) {
        case FETCH_USER_LOADING:
            return{
                ...state,
                isLoading: true
            }

        case FETCH_USER_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isLogin: true,
                tokenUsers: action.payload,
                error: ""
            } 
            
        case FETCH_USER_ERROR:
            return{
                ...state,
                isLoading: false,
                isLogin: false,
                tokenUsers: "",
                error: action.payload
            }    

        case fetch_MAKE_USER_DATA_LOADING:
            return{
                ...state,
                isLogin: true
            }
            
        case fetch_MAKE_USER_DATA_SUCCESS:
            return{
                ...state,
                isLoading: true,
                lastName: action.payload.lastName,
                firstName: action.payload.firstName,
                email: action.payload.email,
                id: action.payload.id,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt
            }
    
        default: return state
    }
}

export default reducerFetch