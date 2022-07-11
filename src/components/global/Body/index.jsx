import React from "react";
import './styles.css';

function Body({children}) {
    return (
        <div className="bodyContainer">
            {children}
        </div>
    )
}

export default Body;