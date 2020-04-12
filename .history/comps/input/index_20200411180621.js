import React, {useState} from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({placeholder}) => {
    <div className="input_cost">
    <input type='text' placeholder={placeholder} />
    <CustomButton text="send" color="#58F"/>
</div>;
}

Input.defaultProps = {
    placeholder:"Type your chat here!"
}

export default Input;