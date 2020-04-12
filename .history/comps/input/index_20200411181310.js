import React, {useState} from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({placeholder, onClick}) => {
    const [val,setVal] = useState("");
    const [msg, setMsg] = useState("");

    return <div className="input_cost">
    <input onChange={(e)=>{
        setVal(e.target.value);
    }}
     type='text' placeholder={placeholder} />
    <CustomButton onClick={()=>{
        alert(val);
        o
    }} text="send" color="#58F"/>
</div>;
}

Input.defaultProps = {
    placeholder:"Type your chat here!",
    onClick:()=>{}
}

export default Input;