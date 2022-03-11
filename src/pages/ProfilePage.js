import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import ConnectedNavigation from '../component/ConnectedNavigation';

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
            <>
                <header>
                    <ConnectedNavigation />
                </header>
                
                <h1>Loading</h1>
            </>
        )  
    }
        return (
            <>  
                <header>
                    <ConnectedNavigation />
                </header>
                <main className="mainProfile">
                    <section className="containerTop">
                        <h1>
                            Welcome back <br/>
                            {stateFirstName + " " + stateLastName + "!"}
                        </h1>
                        <button>Edit Name</button>
                    </section>
                    
                </main>
            </>
        ); 
     
    
}

export default ProfilePage;