import React from 'react';
import CustomButton, {num, greetings} from '../comps/CustomButton';

export default {
    title: "Custom Button",
    component:CustomButton
};

// alert(num + greetings);
export const MyCustomButton = () => <CustomButton/>;

export const PageWithCustomButtons = () => <div>
    <CustomButton 
    color:#999
    text="Cancel"/>
    <CustomButton text="OK"/>
    <CustomButton text="Submit"/>
    <CustomButton text="Menu"/>
</div>