import React,{ useState }  from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { fetchUser } from '../redux/actions/actionFetchUser';
import  axios  from 'axios';

const LoginArray = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const state  = useSelector(state => state.fetchUsers);
    const dispatch = useDispatch()

    console.log(state);

    const sub = e=>{
        e.preventDefault()
        // console.log(userName, password, checked);
        dispatch(fetchUser(userName, password))
    }

    return (
        <section className="loginArray">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign in</h1>
            <form onSubmit={sub} >
                <div className="input-wrapper">
                    <label>Username</label>
                    <input 
                    type="text" 
                    id="username" 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label >Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" defaultChecked={checked} onChange={()=>setChecked(!checked)} />
                    <label>Remember me</label>
                </div>
                <button type="submit" className="sign-in-button" >Sign In</button>
            </form>
        </section>
    );
};

export default LoginArray;