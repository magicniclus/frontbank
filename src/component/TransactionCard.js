import React from 'react';

const TransactionCard = (props) => {
    const thisValue = props.thisValue;
    const montant = props.montant;
    const balance = props.balance;
    const addClass = props.addClass;

    return (
        <section className={addClass === undefined ? "account" : "account "+ addClass}>
            <div className="account-content-wrapper">
            <h3 className="account-title">{thisValue}</h3>
            <p className="account-amount">{montant}</p>
            <p className="account-amount-description">{balance}</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
      </section>
    );
};

export default TransactionCard;