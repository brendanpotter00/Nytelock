import React from 'react'
import '../styles/infosections.css'
import doritos from '../imgs/doritos.png';
import burgerking from '../imgs/burgerking.png';
import lacoste from '../imgs/lacoste.png';

export default function CombInfo() {
    return (
        <div className="infoContainer">
            <p></p>
            <h2 className="infoTitle">
                Combination Logos
            </h2>

            <p className="infoParagraph">
                A Monogram or lettermark is a typography-based logo thats comprised of a few letters, usually a company's initials. The lettermark is all about simplicity 

                By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.
            </p>

            <div className="logoContainer">
                <img className="logo" src={doritos} alt=''/>
                <img className="logo" src={burgerking} alt=''/>
                <img className="logo" src={lacoste} alt=''/>
            </div>
        </div>
    )
}
