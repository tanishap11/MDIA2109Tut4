import React from 'react';
import './chat.css';
import Header from '../Header';

const defaultImg = rewuire()

const Chat = ({}) => <div>
    <img src="./default.png"/>
    <Header text="username"/>
</div>;

Chat.defaultProps = {

}

export default Chat;