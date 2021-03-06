import React from 'react';
import './input.css';
const Input = ({placeholder}) => <div>
    <input type='text' placeholder={placeholder} />
</div>;

Input.defaultProps = {
    placeholder:"Type your chat here!"
}

export default Input;