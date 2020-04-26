import Link from 'next/link';
import Router from 'next/router';
import {GiFiles} from 'react-icons/gi';
import {IoMdChatboxes} from 'react-icons/io';
import {IoIosContacts} from 'react-icons/io'
import {IoIosInformationCircle} from 'react-icons/io'
import './index.css';


function ClickIndex(){ 
    
    document.querySelector("#mainapp").style.right = "-100%"; 
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)   
}

const Index = () =><div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <GiFiles size={24}/><br/>
    <Link href="/ChatPage"><button><IoMdChatboxes color="#ABC" size={20}/> Chats!</button></Link>
    <Link href="/Contact"><button><IoIosContacts color="#ABC" size={20}/>Contact me</button></Link>
    <Link href="/Random"><button><IoIosInformationCircle color="#ABC" size={20}/>About Me</button></Link>
</div>

export default Index;