import React, {useCallback, useState} from "react";
import './styles.css';
// @ts-ignore
import backgroundImg from '../../icons/background.png';
// @ts-ignore
import selectedLogo from "../../icons/Ellipse 9.png";
// @ts-ignore
import arrowLogo from "../../icons/Ellipse 9 copy 3.png";
// @ts-ignore
import headerLogo from "../../icons/4Path logo.png";

function MainPage() {
    const [selected, setSelected] = useState(false);

    const handleSelect = useCallback(() => {
        setSelected(true)
    }, [])
    return (
        <div className="mainContainer">
            <div className="header">
                <div onClick={handleSelect} className="titleWrapper">
                    <div className="txtContainer">Patient</div>
                    <img src={selected ? selectedLogo : arrowLogo} className="arrowLogo" alt="img"/>
                </div>
                <div onClick={handleSelect} className="titleWrapper">
                    <div className="txtContainer">Physician</div>
                    <img src={selected ? selectedLogo : arrowLogo} className="arrowLogo" alt="img"/>
                </div>
                <div className="headerIconContainer">
                    <img src={headerLogo} alt="img" className="pathIcon"/>
                </div>
                <div onClick={handleSelect} className="titleWrapper">
                    <div className="txtContainer">Resources</div>
                    <img src={selected ? selectedLogo : arrowLogo} className="arrowLogo" alt="img"/>
                </div>

                <div onClick={handleSelect} className="titleWrapper">
                    <div className="txtContainer">Company</div>
                    <img src={selected ? selectedLogo : arrowLogo} className={selected ? "selectedLogo" : "arrowLogo"} alt="img"/>
                </div>
            </div>
            <div className="body">
                <img src={backgroundImg}/>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}

export default MainPage;