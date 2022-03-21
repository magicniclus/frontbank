import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TransactionCard = (props) => {
    const state = useSelector(state => state.isLogin)

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
            <NavLink to={state ? "/transaction-page": "/page404"} className="transaction-button">View transactions</NavLink>
            </div>
      </section>
    );
};

export default TransactionCard;