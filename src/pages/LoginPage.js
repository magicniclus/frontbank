import React from 'react';
import LoginArray from '../component/LoginArray';
import Navigation from '../component/Navigation';

const LoginPage = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main className="loginPage">
                <LoginArray />
            </main>
        </>
    );
};

export default LoginPage;