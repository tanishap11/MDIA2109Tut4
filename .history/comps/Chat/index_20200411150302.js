import React from 'react';
import './chat.css';
import Header from '../Header';

const defaultImg = require('./default.png');

const Chat = ({}) => <div>
    <img src={default}/>
    <Header text="username"/>
</div>;

Chat.defaultProps = {

}

export default Chat;