import React,{ useState}  from 'react';
import {useDispatch} from 'react-redux';
import {  useNavigate  } from "react-router-dom";
import axios from "axios"
import { fetchMakeUseData } from '../redux/actions/actionFetchUser';

const LoginArray = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getToken = e=>{
        e.preventDefault()
        try{
            axios ({
                method: 'post',
                url: 'http://localhost:3001/api/v1/user/login',
                data:{
                    "email": userName,
                    "password": password
                },
            }).then((response) => {
                localStorage.setItem("jwt", response.data.body.token);
                if (response.status > 201) throw new Error("echec authentification");
                dispatch(fetchMakeUseData())
                navigate("/profile");
            })
        } catch (error){
            console.error(error);
            navigate("/login");
        }
    }

    return (
        <section className="loginArray">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign in</h1>
            <form onSubmit={getToken} >
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