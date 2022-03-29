import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ConnectedNavigation from '../component/ConnectedNavigation';
import TransactionCard from '../component/TransactionCard';
import { putUserLastName } from '../redux/actions/actionFetchUser';

const ProfilePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const stateLastName = useSelector(state => state.user.firstName)
    const stateFirstName = useSelector(state => state.user.lastName)
    const [lastName, setLastName] = useState(stateFirstName)
    const [firstName, setFirstName] = useState(stateLastName)
    const state = useSelector(state => state)
    const [editePage, setEditPage] = useState(false)

    const dispatch = useDispatch()

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

    async function submitNameChangeValue(e){
        e.preventDefault();
        await dispatch(putUserLastName(firstName, lastName))
        await setEditPage(!editePage)
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

    if(editePage){
        return (
            <>  
                <header>
                    {/* <div className="topHeader">
                        <div className="pointContainer">
                            <div className="point one"></div>
                            <div className="point two"></div>
                            <div className="point"></div>
                        </div>
                    </div> */}
                    <ConnectedNavigation />
                </header>
                <main className="mainProfileedit">
                    <section className="containerTop edit">
                        <h1>
                            Welcome back <br/>
                            {stateFirstName + " " + stateLastName + "!"}
                        </h1>
                        <form onSubmit={submitNameChangeValue} >
                            <div className="inputContainer">
                                <input placeholder={stateFirstName} onChange={(e) => setFirstName(e.target.value)} />
                                <input placeholder={stateLastName} onChange={(e)=>setLastName(e.target.value)} />
                            </div>
                            <div className="buttonContainer">
                                <button type="submit" className="edit">save</button>
                                <button type="button" className="edit" onClick={()=>setEditPage(!editePage)}>cancel</button>
                            </div>
                        </form>
                        </section><section className="cardContainer">
                            <TransactionCard thisValue="Argent Bank Checking (x8349)" montant="2,082.79" balance="View transactions" addClass="first"/>
                            <TransactionCard thisValue="Argent Bank Savings (x6712)" montant="10,928.42" balance="Available Balance" />
                            <TransactionCard thisValue="Argent Bank Credit Card (x8349)" montant="184.30" balance="Current Balance" />
                        </section>
                </main>
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
                    <button onClick={()=>setEditPage(!editePage)}>Edit Name</button>
                </section>
                <section className="cardContainer">
                    <TransactionCard thisValue="Argent Bank Checking (x8349)" montant="2,082.79" balance="View transactions" addClass="first"/>
                    <TransactionCard thisValue="Argent Bank Savings (x6712)" montant="10,928.42" balance="Available Balance" />
                    <TransactionCard thisValue="Argent Bank Credit Card (x8349)" montant="184.30" balance="Current Balance" />
                </section>
            </main>
        </>
    )
}

export default ProfilePage;