import React from 'react'
import koolaid from '../imgs/koolaid.png';
import kfc from '../imgs/kfc.png';
import mrpeanut from '../imgs/mrpeanut.png';

export default function MascotInfo() {
    return (
        <div className="infoContainer">
        <div className="wordContainer">

        <h2 className="infoTitle">
            Mascot Logos
        </h2>

        <p className="infoParagraph">
            Mascot logos are logos that invovle an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson
        </p>
        <p className="infoParagraph">
            A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC's Colonel and PUB's cute Water Wally. 
        </p>
        </div>
        <div className="logoContainer">
            <img className="logo" src={koolaid} alt=''/>
            <img className="logo" src={kfc} alt=''/>
            <img className="logo" src={mrpeanut} alt=''/>
        </div>
    </div>
    )
}
