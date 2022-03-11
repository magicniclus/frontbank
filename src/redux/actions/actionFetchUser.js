import { 
    // FETCH_USER_LOADING, 
    // FETCH_USER_SUCCESS, 
    // FETCH_USER_ERROR, 
    fetch_MAKE_USER_DATA_LOADING,
    fetch_MAKE_USER_DATA_SUCCESS,
    fetch_MAKE_USER_DATA_ERROR
} from "../constants";

import axios from "axios"

// const fetchUserLoading=() => {
//     return {
//         type: FETCH_USER_LOADING
//     }
// }

// const fetchUserSuccess=data => {
//     return {
//         type: FETCH_USER_SUCCESS,
//         payload: data
//     }
// }

// const fetchUserError = err =>{
//     return {
//         type: FETCH_USER_ERROR,
//         payload: err
//     }
// }

const fetchMakeUseDataLoading = () => {
    return {
        type: "loading"
    }
}

const fetchMakeUseDataSuccess = (data) => {
    return {
        type: "success",
        payload: data
    }
}

const fetchMakeUseDataError = (err) => {
    return {
        type: "error",
        payload: err
    }
}

// export function fetchUser(email, password) {
//     return async (dispatch) => {
//         try {
//             const response =  await axios({
//              method: 'post',
//              url: 'http://localhost:3001/api/v1/user/login',
//              data:{
//                  "email": email,
//                  "password": password
//              }, 
//         })
//             const userToken = response.data.body.token;
//             dispatch(fetchUserSuccess(userToken))
//         } catch (error) {
//             dispatch(fetchUserError(error.message))
//         }
//     }
// }

export function fetchMakeUseData() {
    return async (dispatch) =>{
        try{
            const response = await axios({
                method:'post',
                url: 'http://localhost:3001/api/v1/user/profile',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.jwt
                }
            })
            const user = response.data.body;
            await dispatch(fetchMakeUseDataSuccess(user));
        } catch (error){
            dispatch(fetchMakeUseDataError(error.message))
        }
    }
}