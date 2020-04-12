//use the same component to change the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontSize, fontColor, onMouseOver}) => 
<div style={{fontSize, fontColor, boxShadow: "1px 1px 5px" +color}} className="header_button">
    
    <div className="header_button_inner"
        onMouseOver={onMouseOver}>        
        <h1>Header</h1>
    </div>

</div>

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontsize:12,
    fontolor:"#DAB",
    onMouseOver: MouseOver
}

export default Header;