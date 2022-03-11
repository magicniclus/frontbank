import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ConnectedNavigation = () => {
    const name = useSelector(state => state.user.firstName)

    return (
        <nav className="main-nav-connected">
            <NavLink to="/">
                <img
                className="main-nav-logo-image"
                src="./img/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
            </NavLink>
            <div className="profilContainer">
                <NavLink to="/login">
                    <i className="fa fa-user-circle"></i>
                    <span>{name}</span>
                </NavLink>
                <div className="signOut">
                    <i className="fa fa-sign-out"></i>
                    <span>Sign Out</span>
                </div>
                
            </div>
        </nav>
    );
};

export default ConnectedNavigation;