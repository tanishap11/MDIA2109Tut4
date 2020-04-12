import React,{useState} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

function ChangeWelcome() {
    document.querySelector("#welcome").innerText = "Start with sending a message.";
}

const ChatPage = () => {
    const [welcome, setWelcome] = useState("Welcome to my App!");
    cost [msg, setMsg] = useState()

    return <div>
    <div id="welcome">
        <Header fontSize={32} text={welcome}/>
    </div>
    <div id="chats" onClick={()=>{
        setWelcome("Start with sending a message.");
    }}>
        <Chat />
    </div>
    <div id="controls">
        <Input onClick={(val)=>{
            setMsg(val);
        }}/>
        <Chat msg={msg}/>
    </div>
</div>
}

ChatPage.defaultProps = {
    
}

export default ChatPage;