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

export const changeName = data =>{
    return {
        type: "changeName",
        payload: data
    }
}

export const changeLastName = data =>{
    return {
        type: "changeLast",
        payload: data
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

export function putUserLastName (lastName, name){
    return async (dispatch) =>{
        try{
            const response = await axios({
                method: 'put',
                url: 'http://localhost:3001/api/v1/user/profile',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.jwt
                },
                data: {
                    firstName: name,
                    lastName: lastName
                }
            })
            console.log(response);
            await dispatch(changeName(response.data));
        } catch (error){

        }
    }
}