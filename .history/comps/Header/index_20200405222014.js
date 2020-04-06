//use the same component to change the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontsize, color, onMouseOver}) => 
{/* <div className="header_button">
    <div style={{backgroundColor:color, boxShadow: "1px 1px 5px" +color}} 
    className="header_button_inner">
        <h1>Header</h1>
    </div>
</div> */
<div style={{backgroundColor:color, boxShadow: "1px 1px 5px" +color}}
    className="header_button">

        <div className="header_button_inner"
            // onClick={onClick}
            >
            {text}
        </div>
</div>}


function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontsize:12,
    color:"#DAB",
    onMouseOver: MouseOver
}

export default Header;