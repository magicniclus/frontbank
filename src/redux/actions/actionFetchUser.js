import axios from "axios"

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

export const fetchSignOut = data =>{
    return {
        type: "signOut",
        payLoad: data
    }
}

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