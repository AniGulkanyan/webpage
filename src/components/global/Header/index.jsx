import React from "react";
import './styles.css';

function Header({children}) {
    return (
        <div className="headerContainer">
            {children}
        </div>
    )
}

export default Header;