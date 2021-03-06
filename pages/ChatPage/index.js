import React, { useState, useEffect } from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

// function ChangeWelcome() {
//     document.querySelector("#welcome").innerText = "Welcome";
// }

// function ChangeCustombtn() {
//     document.querySelector("#custom_button").innerText = "Start with sending a message.";
// }


const ChatPage = () => {
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const [msg, setMsg] = useState("Pls type something!");
    const [resp, setResp] = useState("Let me respond to you!");
    const [color, setColor] = useState("#ADD");
    const [text, setText] = useState("Change this button");

    useEffect(()=>{
        setTimeout(()=>{
                    document.querySelector("#chatpage").style.left = 0;
        }, 50);
    }, []);

    return <div id="chatpage">
        <div id="welcome">
            <Header fontSize={32} text="Welcome to my App!" />
        </div>
        <div id="chats" onClick={() => {
            setWelcome("Start with sending a message.");
        }}>
            <Chat name={"User1"} msg={msg} />
            <p />
            <Chat img={"https://miro.medium.com/max/4000/1*9ZvCnFHHwJxAd595SFHDgA.png"}
                name={"Chat Bot"} backgroungColor={"#FAB"} msg={resp} />
        </div>
        <div id="controls">
            <Input onClick={(val) => {
                setMsg(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                // setColor

                // if (val === "hi")(
                //     setResp("I Love pie!")
                // )
            }} />
        </div>
        <div id="custom_button" onClick={() => {
            setColor("#DAD");
            setText("Wow you changed the button");
            }}>
                <CustomButton color={color} text={text}/>
        </div>
    </div>
}

function CheckResponse(inp) {
    switch (inp.toLowerCase()) {
        case "hi":
            return "I Love pie";
        case "how are you?":
            return "great!";
        default:
            return "I don't understand what you are trying to say";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;

