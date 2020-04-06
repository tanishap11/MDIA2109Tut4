import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title: "Custom Button",
    component:CustomButton
};


// alert(num + greetings);
export const MyCustomButton = () => <CustomButton/>;
// export const MyCustomButton = () => <Header/>;

export const PageWithCustomButtons = () => <div>
    <Header
    fontSize={15}
    color="#DAB"
    onMouseOver={HoverOver}
    />

    <Header
    fontSize={85}
    color="#CAT"
    onMouseOver={OkClick}
    />

    <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}
    />
    <CustomButton 
    color="#3F5"
    text="OK"
    onClick={OkClick}

    />
    <CustomButton 
    color="#F3F"
    text="Submit"/>
    <CustomButton 
    text="Menu"/>
</div>

function CancelClick(){
    alert("cancel");
}
function OkClick(){
    alert("ok");
}

function HoverOver() {
    alert("You just hovered over this!")
}