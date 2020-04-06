import React from 'react';
import CustomButton, {num, greetings} from '../comps/CustomButton';

export default {
    title: "Custom Button",
    component:MyButton
};

alert(num + greetings);
export const MyCustomButton = () => <CustomButton/>;