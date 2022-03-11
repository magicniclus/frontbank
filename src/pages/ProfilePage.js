import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const stateLastName = useSelector(state => state.user.firstName);
    const stateFirstName = useSelector(state => state.user.lastName);
    const stateIsLogin = useSelector(state => state.isLogin);
    const etat = useSelector(state => state.currentState);

    // console.log(stateIsLogin);
    // alert("ok")

    useEffect(()=>{
        addUser()
    }, [])

    async function addUser (){
        if(stateIsLogin){
            setFirstName(stateFirstName);
            setLastName(stateLastName);
            setIsLoading(false)
            console.log(firstName);
        }
    }

    if(etat === "isLoading") return (
            <div className="Loading">
            </div>
        )        
    
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