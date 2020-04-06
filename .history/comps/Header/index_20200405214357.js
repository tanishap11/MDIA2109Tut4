//use the same component to change the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontsize, color, onMouseOver}) => <div className="Header_Button">
    <div className>
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