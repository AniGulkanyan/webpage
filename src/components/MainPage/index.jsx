import React, {useCallback, useState} from "react";
import './styles.css';
import backgroundImg from '../../icons/background.png';
import selectedLogo from "../../icons/Ellipse 9.png";
import arrowLogo from "../../icons/Ellipse 9 copy 3.png";
import headerLogo from "../../icons/4Path logo.png";
import bodyRectangle from "../../icons/Rounded Rectangle 9.png";
import manPhoto from "../../icons/man.png";
import bodyIcon from "../../icons/Group 89.png";
import fbIcon from "../../icons/Группа 1.png";
import twitterIcon from "../../icons/Группа 2.png";
import genesisIcon from "../../icons/Vector Smart Object-1.png";
import rightGenesis from "../../icons/Vector Smart Object.png";
import triangle from '../../icons/Triangle 1.png';
import digital3D from '../../icons/digital-3d-illustration-cancer-cells-450w-651722116 copy 2.png';
import triangleArrow from '../../icons/Triangle 2 copy 2.png';
import Header from "../global/Header";
import Body from "../global/Body";
import Footer from "../global/Footer";

function MainPage() {
    const [selected, setSelected] = useState(null);

    const handleSelect = useCallback((value) => {
        setSelected(value);
    }, [selected])

    return (
        <div className="mainContainer">
            <Header>
                <div onClick={() => handleSelect(1)} className="titleWrapper">
                    <div className="txtContainer">Patient</div>
                    <img src={selected === 1 ? selectedLogo : arrowLogo}  className={selected ? "selectedLogo" : "arrowLogo"} alt="img"/>
                    <img src={triangleArrow} alt="img" className="triangleArrow" />
                </div>
                <div onClick={() => handleSelect(2)} className="titleWrapper">
                    <div className="txtContainer">Physician</div>
                    <img src={selected === 2 ? selectedLogo : arrowLogo}  className={selected ? "selectedLogo" : "arrowLogo"} alt="img" />
                    <img src={triangleArrow} alt="img" className="triangleArrow" />
                </div>
                <div className="headerIconContainer">
                    <img src={headerLogo} alt="img" className="pathIcon"/>
                </div>
                <div onClick={() => handleSelect(3)} className="titleWrapper">
                    <div className="txtContainer">Resources</div>
                    <img src={selected === 3 ? selectedLogo : arrowLogo}  className={selected ? "selectedLogo" : "arrowLogo"} alt="img"/>
                    <img src={triangleArrow} alt="img" className="triangleArrow" />
                </div>

                <div onClick={() => handleSelect(4)} className="titleWrapper">
                    <div className="txtContainer">Company</div>
                    <img src={selected === 4 ? selectedLogo : arrowLogo} className={selected ? "selectedLogo" : "arrowLogo"} alt="img"/>
                    <img src={triangleArrow} alt="img" className="triangleArrow" />
                </div>
            </Header>
            <Body>
                <div className="bodyBottom">
                    <div className="leftBigTriangle"></div>
                    <div>
                        <img src={digital3D} className="digitalIcon" />
                    </div>
                    <div className="rightBigTriangle">
                    </div>
                    <div className="billInfo">
                        Billing Information
                        <img src={triangle} alt="triangle" className="infoIcon"/>
                    </div>
                </div>
                <img src={backgroundImg} className="background"/>
                <div>
                    <img src={bodyRectangle} alt="bodyRectangle" className="bodyRectangle"/>
                    <div className="bodyIcon">
                        <img src={bodyIcon} alt="bodyIcon" />
                        <div className="patientTxt">For Patients</div>
                    </div>
                    <div>Pay My Bill</div>
                </div>
                    <div className="manPhotoWrapper">
                        <img src={manPhoto} alt="bgImg" className="manPhoto"/>
                        <div>Pay My Bill</div>
                    </div>
            </Body>
            <Footer>
                <div>
                    <img src={headerLogo} alt="img"/>
                </div>
                <div className="icons">
                    <img src={fbIcon} alt="fbIcon" className="fbIcon"/>
                    <img src={twitterIcon} alt="twitterIcon" className="twitterIcon"/>
                </div>
                <div className="centerItemsWrapper">
                    <div className="centerItem">
                        <div className="leftTriangle"></div>
                        <div className="btnTxt">Back to Top</div>
                        <div className="rightTriangle"></div>
                    </div>
                    <div className="textsWrapper">
                        <div className="leftTxt">Terms of Service</div>
                        <div className="rightText">Privacy Policy</div>
                    </div>
                    <div className="copyRightTxt">Copyright 2019 All Rights Reserved</div>
                    </div>
                    <div>
                        <img src={genesisIcon} alt="genesisIcon" className="genesisIcon" />
                    </div>
                    <div>
                        <img src={rightGenesis} alt="rightGenesisIcon" className="rightGenesis" />
                    </div>

                </Footer>
        </div>
    )
}

export default MainPage;