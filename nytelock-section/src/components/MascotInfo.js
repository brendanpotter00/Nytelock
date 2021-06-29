import React from 'react'
import koolaid from '../imgs/koolaid.png';
import kfc from '../imgs/kfc.png';
import mrpeanut from '../imgs/mrpeanut.png';

export default function MascotInfo() {
    return (
        <div className="infoContainer">
            <p></p>
        <h2 className="infoTitle">
            Mascot Logos
        </h2>

        <p className="infoParagraph">
            A Monogram or lettermark is a typography-based logo thats comprised of a few letters, usually a company's initials. The lettermark is all about simplicity 

            By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.
        </p>

        <div className="logoContainer">
            <img className="logo" src={koolaid} alt=''/>
            <img className="logo" src={kfc} alt=''/>
            <img className="logo" src={mrpeanut} alt=''/>
        </div>
    </div>
    )
}
