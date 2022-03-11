import React from 'react';
import AvantageCard from '../component/AvantageCard';
import Navigation from '../component/Navigation';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const state = useSelector(state => state)

    const clickThis = ()=>{
        console.log(state);
    }

    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <section className="canvas">
                    <div className="canvas-content">
                        <h1 onClick={()=>clickThis()}>No fees. <br/>
                        No minimum deposit. <br/>
                        High interest rates.
                        </h1>
                        <p>Open a savings account with<br/> Argent Bank today!</p>
                    </div>
                </section>
                <section className="card-content">
                    <AvantageCard img="./img/icon-chat.png" title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                    <AvantageCard img="./img/icon-money.png" title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
                    <AvantageCard img="./img/icon-security.png" title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
                </section>
            </main>
        </>
    );
};

export default HomePage;