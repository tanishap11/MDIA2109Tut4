import React from 'react';
import './chat.css';
import Header from '../Header';

const defaultImg = require('./default.png');

const Chat = ({msg, img, name, backgroungColor}) => <div 
style={{backgroungColor:backgroungColor}}
className="chat_card">
    <div className="chat_user">
    <img src={img}/>
    <Header fontSize="100%" text="username"/>
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;

Chat.defaultProps = {
    msg:"Please type something!",
    img:defaultImg,
    name: 
    backgroungColor:"#EEE"
}

export default Chat;