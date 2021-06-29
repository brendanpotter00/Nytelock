import React from 'react'
import '../styles/infosections.css'
import bp from '../imgs/bp.png';
import adidas from '../imgs/adidas.png';
import pepsi from '../imgs/pepsi.png';

export default function AbstractInfo() {
    return (
        <div className="infoContainer">
            <p></p>
            <h2 className="infoTitle">
                Abstract Logos
            </h2>

            <p className="infoParagraph">
                A Monogram or lettermark is a typography-based logo thats comprised of a few letters, usually a company's initials. The lettermark is all about simplicity 

                By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.
            </p>

            <div className="logoContainer">
                <img className="logo" src={bp} alt=''/>
                <img className="logo" src={pepsi} alt=''/>
                <img className="logo" src={adidas} alt=''/>
            </div>
        </div>
    )
}
