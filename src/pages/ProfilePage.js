import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const stateLastName = useSelector(state => state.user.firstName);
    const stateFirstName = useSelector(state => state.user.lastName);
    const stateIsLogin = useSelector(state => state.isLogin);
    const state = useSelector(state => state);

    useEffect(()=>{
        addUser()
    }, [])

    async function addUser (){
        if(state.isLoading){
            await state.currentState.success;
        }else if (!state.isLoading && state.isLogin){
            setIsLoading(false)
        }
    }

    if(isLoading){
        return (
            <div className="Loading">
                <h1>Loading</h1>
            </div>
        )  
    }
        return (
            <div className="profilePage">
                <h1>
                    Welcome back <br/>
                    {stateFirstName + " " + stateLastName + " !"}
                </h1>
            </div>
        ); 
     
    
}

export default ProfilePage;