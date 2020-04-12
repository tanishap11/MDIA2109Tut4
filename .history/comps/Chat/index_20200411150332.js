import React from 'react';
import './chat.css';
import Header from '../Header';

const defaultImg = require('./default.png');

const Chat = ({}) => <div>
    <div>
    <img src={defaultImg}/>
    <Header text="username"/>

    </div>
</div>;

Chat.defaultProps = {

}

export default Chat;