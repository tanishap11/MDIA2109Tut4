import React, {useState} from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({placeholder}) => {
    const [val,setVal] = useState("");
    
    return <div className="input_cost">
    <input onChange={(e)=>{
        setVal(e.target.value);
    }}
     type='text' placeholder={placeholder} />
    <CustomButton onClick={()=>} text="send" color="#58F"/>
</div>;
}

Input.defaultProps = {
    placeholder:"Type your chat here!"
}

export default Input;