import React from 'react';
import Navigation from '../component/Navigation';

const NotFound = () => {
    return (
        <>  
            <header>
                <Navigation />
            </header>
            <main className="notFound">
                <h1>Erreur 404</h1>
            </main>
        </>
    );
};

export default NotFound;