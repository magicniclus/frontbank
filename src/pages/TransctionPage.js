import React from 'react';
import ConnectedNavigation from "../component/ConnectedNavigation"
import DropDownCard from '../component/DropDownCard';

const TransctionPage = () => {

    return (
        <>  
                <header>
                    {/* <div className="topHeader">
                        <div className="pointContainer">
                            <div className="point one"></div>
                            <div className="point two"></div>
                            <div className="point"></div>
                        </div>
                    </div> */}
                    <ConnectedNavigation />
                </header>
                <main className="transactionPage">
                    <section className="transactionPageTopContainer">
                        <h1>Argent Bank Cheacking (x8349)</h1>
                        <h2>$2,082.79</h2>
                        <p>Available Balance</p>
                    </section>

                    <section className="transactionContainer">
                        <div className="title">
                            <div className="date">DATE</div>
                            <div className="description" >DESCRIPTION</div>
                            <div className="amount" >AMOUNT</div>
                            <div className="balance">BALANCE</div>
                        </div>
                        <div className="content">
                            <DropDownCard 
                            date="June 20th, 2020" 
                            description="Golden Sun Bakery"
                            amount="5.00"
                            balance="2082.79"
                            />
                            <DropDownCard 
                            date="June 20th, 2020" 
                            description="Golden Sun Bakery"
                            amount="10.00"
                            balance="2087.79"
                            />
                            <DropDownCard 
                            date="June 20th, 2020" 
                            description="Golden Sun Bakery"
                            amount="5.00"
                            balance="2097.79"
                            />
                            <DropDownCard 
                            date="June 20th, 2020" 
                            description="Golden Sun Bakery"
                            amount="5.00"
                            balance="2117.79"
                            />
                            <DropDownCard 
                            date="June 20th, 2020" 
                            description="Golden Sun Bakery"
                            amount="5.00"
                            balance="2147.79"
                            />
                            <DropDownCard 
                            date="June 20th, 2020" 
                            description="Golden Sun Bakery"
                            amount="5.00"
                            balance="2187.79"
                            />
                        </div>
                    </section>
                </main>
            </>
    );
};

export default TransctionPage;