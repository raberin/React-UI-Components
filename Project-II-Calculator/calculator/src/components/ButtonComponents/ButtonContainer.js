import React from 'react';
import './Button.css';

import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const ButtonContainer = (props) => {
    return (
        <div className="button-container">
            <div className="row">
                <ActionButton className="actionStyle" name="clear" />
                <NumberButton className="functionStyle" name="÷" />  
            </div>
            <div className="row">
                <NumberButton className="numberStyle" name="7" />    
                <NumberButton className="numberStyle" name="8" />    
                <NumberButton className="numberStyle" name="9" /> 
                <NumberButton className="functionStyle" name="x" />     
            </div>
            <div className="row">
                <NumberButton className="numberStyle" name="4" />    
                <NumberButton className="numberStyle" name="5" />    
                <NumberButton className="numberStyle" name="6" /> 
                <NumberButton className="functionStyle" name="-" />     
            </div>
            <div className="row">
                <NumberButton className="numberStyle" name="1" />
                <NumberButton className="numberStyle" name="2" />
                <NumberButton className="numberStyle" name="3" />
                <NumberButton className="functionStyle" name="+" />  
            </div>
            <div className="row">
                <ActionButton className="actionStyle" name="0" />
                <NumberButton className="functionStyle" name="=" />  
            </div>
        </div>
    )
}

export default ButtonContainer;