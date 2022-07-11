import React, {useCallback, useState} from "react";
import './styles.css';
import Header from "../global/Header";
// @ts-ignore
import headerLogo from '../../icons/4Path logo.png';
// @ts-ignore
import arrowLogo from '../../icons/Ellipse 9 copy 3.png';
// @ts-ignore
import selectedLogo from '../../icons/Ellipse 9.png';
// @ts-ignore
import bodyBackground from '../../icons/Body.png';
// @ts-ignore
import manPhoto from '../../icons/man.png';
// @ts-ignore
import triangle from '../../icons/Triangle 1.png';
// @ts-ignore
import fbIcon from '../../icons/Группа 1.png';
// @ts-ignore
import twitterIcon from '../../icons/Группа 2.png';
// @ts-ignore
import genesisIcon from '../../icons/Vector Smart Object-1.png';
// @ts-ignore
import rightGenesis from '../../icons/Vector Smart Object.png';
// @ts-ignore
import bodyRectangle from '../../icons/Rounded Rectangle 9.png';
// @ts-ignore
import bodyIcon from '../../icons/Group 89.png';
import Body from "../global/Body";
import Footer from '../global/Footer';

function Main() {
    const [selected, setSelected] = useState(false);

    const handleSelect = useCallback(() => {
        setSelected(true)
    }, [])

    return (
        <div  className="wrapper">
            <Header>
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
            </Header>
            <Body>
                <div className="bodyWrapper">
                    <img src={bodyBackground} alt="bgImg" className="bgImage"/>
                    <img src={bodyRectangle} alt="bodyRectangle" className="bodyRectangle"/>
                    <div className="manPhotoWrapper">
                        <img src={manPhoto} alt="bgImg" className="manPhoto"/>
                    </div>
                    <div className="bodyIcon">
                        <img src={bodyIcon} alt="bodyIcon" />
                        <div className="patientTxt">For Patients</div>
                    </div>
                    <div className="billInfo">
                        Billing Information
                        <img src={triangle} alt="triangle" className="infoIcon"/>
                    </div>
                </div>
            </Body>
            <Footer>
                <div className="footerWrapper">
                    <div>
                        <img src={fbIcon} alt="fbIcon" className="fbIcon"/>
                    </div>
                    <div>
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

                </div>
            </Footer>
        </div>
    )
}

export default Main;