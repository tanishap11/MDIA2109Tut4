import React from 'react';
import './input.css';
import CustomButton from 

const Input = ({placeholder}) => <div className="input_cost">
    <input type='text' placeholder={placeholder} />
</div>;

Input.defaultProps = {
    placeholder:"Type your chat here!"
}

export default Input;