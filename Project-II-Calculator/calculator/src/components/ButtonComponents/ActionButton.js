import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
    <div className={props.className}>
        <p>{props.name}</p>
    </div>

    )
}

export default ActionButton;