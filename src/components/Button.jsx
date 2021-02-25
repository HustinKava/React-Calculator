import React from 'react';
import './Button.css';

// Check the operator used
const isOperator = (val) => {
    // Return is a number
    return !isNaN(val) || val === '.' || val === '=';
    // Then we want to return true
};

export const Button = (props) => (
    // passing numbers, ., = to isOperator function
    // if it is true, we do nothing
    // else we add the class called operator
    <div className={`button-wrapper ${isOperator(props.children) ? null : 'operator'}`}
    onClick={() => props.handleClick(props.children)}>
        {/* here is where we pass our numbers */}
        {props.children}
    </div>
);
