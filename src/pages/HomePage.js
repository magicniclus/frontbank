import React from 'react';
import Navigation from '../component/Navigation';

const HomePage = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <section className="canvas">
                    <div className="canvas-content">
                        <h1>No fees. <br/>
                        No minimum deposit. <br/>
                        High interest rates.
                        </h1>
                        <p>Open a savings account with<br/> Argent Bank today!</p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;