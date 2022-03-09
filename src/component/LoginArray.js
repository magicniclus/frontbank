import React,{ useState, useEffect }  from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {  useNavigate  } from "react-router-dom";
import { fetchMakeUseData, fetchUser } from '../redux/actions/actionFetchUser';

const LoginArray = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const state  = useSelector(state => state);
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const sub = e=>{
        e.preventDefault()
        dispatch(fetchUser(userName, password))

        if(state.isLogin){
            dispatch(fetchMakeUseData(state.tokenUsers))
            console.log(state);
            navigate('/')
        }
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