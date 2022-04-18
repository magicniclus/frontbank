import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {fetchSignOut} from '../redux/actions/actionFetchUser';

const ConnectedNavigation = () => {
    const name = useSelector(state => state.user.lastName)
    const state = useSelector(state => state.currentState)
    const dispatch = useDispatch()
    const newValue = "";

    const signOut = async ()=>{
        await localStorage.removeItem('jwt');
        await dispatch(fetchSignOut(newValue));
    }

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
                <NavLink to="/profile">
                    <i className="fa fa-user-circle"></i>
                    <span>{name}</span>
                </NavLink>
                <div className="signOut" onClick={signOut}>
                    <i className="fa fa-sign-out"></i>
                    <span>Sign Out</span>
                </div>
                
            </div>
        </nav>
    );
};

export default ConnectedNavigation;