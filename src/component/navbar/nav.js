import './nav.css';
import logo from "../../images/Frame.png"
import M1 from "../../images/Icon.png"
import M2 from "../../images/Icon-2.png"
import M3 from "../../images/Icon-3.png"
import M4 from "../../images/Icon-4.png"
import M5 from "../../images/Icon-5.png"
import M6 from "../../images/Icon-6.png"
import M7 from "../../images/Icon-7.png"
import M8 from "../../images/Icon-8.png"
import M9 from "../../images/Icon-9.png"

function nav() {
  return (
    <div className="navbar">
        <div className="LogoContainer">
            <div>
                <img src={logo}></img>
            </div>
            <div className="title" >
                <p className="titre" >PNFT.</p>
                <p className="subtitre">NFT Marketplace</p>
            </div>
        </div>
        <div className="C1">
            <div className="menu">
                <img src={M1} className="logo"></img>
                <p className="MENU" > Dashboard</p>
            </div>
            <div className="menu">
                <img src={M2} className="logo" ></img>
                <p className="MENU">Market</p>
            </div>
            <div className="menu">
                <img src={M3} className="logo"></img>
                <p className="MENU" >Active Bids</p>
            </div>
        </div>
        <div className="C2">

        <div className="menu">
                        <p className="PMENU" > PROFILE</p>
                    </div>
        <div className="menu">
                <img src={M4} className="logo"></img>
                <p className="MENU" > My Portfolio</p>
            </div>
            <div className="menu">
                <img src={M5} className="logo" ></img>
                <p className="MENU">Wallet</p>
            </div>
            <div className="menu">
                <img src={M6} className="logo"></img>
                <p className="MENU" >Favourites</p>
            </div>
            <div className="menu">
                <img src={M7} className="logo"></img>
                <p className="MENU" >History</p>
            </div>
            <div className="menu">
                <img src={M8} className="logo"></img>
                <p className="MENU" >Settings</p>
            </div>
        </div>
        <div className="C3">
                 <div className="menu">
                        <p className="PMENU" > OTHER</p>
                </div>
                <div className="menu">
                    <img src={M9} className="logo"></img>
                <p className="MENU" > Light Mode</p>
            </div>
        </div>
    </div>
  );
}

export default nav;
