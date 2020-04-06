//use the same component to change the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontsize, color, onMouseOver}) => <div className="header_button">
    <div style={{backgroundColor:color}} className="header_button_inner">
        <h1>Header</h1>
    </div>
</div>

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontsize:12,
    color:"#000",
    onMouseOver: MouseOver
}

export default Header;