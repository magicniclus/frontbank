const initState = {
    isLoading: false,
    isLogin: false,
    tokenUsers: localStorage.jwt,
    currentState: "loading",
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
        case "loading":
            return{
                ...state,
                currentState: "loading",
                isLoading: true
            }
            
        case "success":
            return{
                ...state,
                currentState : "success",
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

        case "error":
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