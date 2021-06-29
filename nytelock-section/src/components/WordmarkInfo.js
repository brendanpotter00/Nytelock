import React from 'react'
import visa from '../imgs/visa.png';
import cola from '../imgs/cola.png';
import google from '../imgs/google.png';

export default function WordmarkInfo() {
    return (
        <div className="infoContainer">
            <p>wordmark container</p>
            <h2 className="infoTitle">
                Wordmark Logos
            </h2>

            <p className="infoParagraph">
                A Monogram or lettermark is a typography-based logo thats comprised of a few letters, usually a company's initials. The lettermark is all about simplicity 

                By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.
            </p>

            <div className="logoContainer">
                <img className="logo" src={visa} alt=''/>
                <img className="logo" src={cola} alt=''/>
                <img className="logo" src={google} alt=''/>
            </div>
        </div>
    )
}
