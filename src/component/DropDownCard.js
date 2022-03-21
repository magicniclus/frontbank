import React from 'react';
import { useState } from 'react';

const DropDownCard = (props) => {
    const [arrow, setArrow] = useState(false)

    const addClass = props.addCard;
    const date = props.date;
    const description = props.description;
    const amount = props.amount;
    const balance = props.balance;
    
    const showArrow = () =>{
        if(!arrow){
            return (
                <img src="./img/chevron-down-solid.svg" alt="chevron vers le bas"/>
            )
        } 
        return (
            <img src="./img/chevron-up-solid.svg" alt="chevron vers le haut"/>
        )
    }

    const showBottom = () => {
        if(arrow){
            return(
                <section className="dropDownBottomContainer">
                    <p className="type">Transaction Type: Electronic</p>
                    <div className="categoryContainer">
                        <p>Category: FOOD</p>
                    </div>
                    <div className="notesContainer">
                        <p>Notes:</p>   
                    </div>
                </section>
            )
        }
    }

    return (
        <div onClick={()=>setArrow(!arrow)} className="DropDownCard">
            <section className="dropDownTopContainer">
                <div className="date">
                    {showArrow()}
                    {date}
                </div>
                <p>
                    {description}
                </p>
                <p>
                    ${amount}
                </p>
                <p>
                    {balance}$
                </p>
            </section>
            {showBottom()}
        </div>
    );
};

export default DropDownCard;