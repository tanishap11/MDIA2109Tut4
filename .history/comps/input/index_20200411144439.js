import React from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({placeholder}) => <div className="input_cost">
    <input type='text' placeholder={placeholder} />
    <CustomButton />
</div>;

Input.defaultProps = {
    placeholder:"Type your chat here!"
}

export default Input;