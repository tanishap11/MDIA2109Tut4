import React from 'react';

const Input = ({}) => <div>
    <input type='text' placeholder="Type your text here"/>
</div>

input.defaultProps = {
    placeholder:"Type your chat here"
}

export default Input;