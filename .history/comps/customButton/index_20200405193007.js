import React from 'react';
import './cb.css';


//made the UI
const CustomButton = ({text, color}) => <div className="custom_button_box">
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

CustomButton.defaultProps = {
    text:"Default Button",
    color:"#DAB"
}

export default CustomButton;

