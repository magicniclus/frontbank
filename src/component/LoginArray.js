import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginArray = () => {
    return (
        <section className="loginArray">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign in</h1>
            <form>
                <div className="input-wrapper">
                    <label>Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label >Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label>Remember me</label>
                </div>
                <NavLink to="/login" className="sign-in-button">Sign In</NavLink>
            </form>
        </section>
    );
};

export default LoginArray;