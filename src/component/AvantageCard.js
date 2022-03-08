import React from 'react';

const AvantageCard = (props) => {
    const img = props.img;
    const title = props.title;
    const text = props.text;

    return (
        <div className="card">
            <img src={img} alt="logo" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default AvantageCard;