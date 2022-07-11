import React, {ReactNode} from "react";
import './styles.css';

interface IBody {
    children: ReactNode;
}

function Body({children}: IBody) {
    return (
        <div className="bodyContainer">
            {children}
        </div>
    )
}

export default Body;