import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <NavLink to="/">
                <img
                className="main-nav-logo-image"
                src="./img/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
            </NavLink>
            <div>
                <NavLink to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
                </NavLink>
            </div>
        </nav>
    );
};

export default Navigation;