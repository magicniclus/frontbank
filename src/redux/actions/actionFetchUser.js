import { 
    FETCH_USER_LOADING, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_ERROR 
} from "../constants";

import axios from "axios"

const fetchUserLoading=() => {
    return {
        type: FETCH_USER_LOADING
    }
}

const fetchUserSuccess=data => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
}

const fetchUserError = err =>{
    return {
        type: FETCH_USER_ERROR,
        payload: err
    }
}

export function fetchUser(email, password) {
    return async (dispatch) => {
        try {
            const response =  await axios({
             method: 'post',
             url: 'http://localhost:3001/api/v1/user/login',
             data:{
                 "email": email,
                 "password": password
             }, 
         })
            console.log(response.data);
         } catch (error) {
             console.error(error);
         }
    }
}