import React from "react";
import './styles.css';

function Footer({children}) {
    return (
        <div className="footerContainer">
            {children}
        </div>
    )
}

export default Footer;