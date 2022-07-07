import React, {ReactNode} from "react";
import './styles.css';

interface IHeader {
    children: ReactNode;
}

function Header({children}: IHeader) {
    return (
        <div className="headerContainer">
            {children}
        </div>
    )
}

export default Header;