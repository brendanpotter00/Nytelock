import React from 'react'
import visa from '../imgs/visa.png';
import cola from '../imgs/cola.png';
import google from '../imgs/google.png';

export default function WordmarkInfo() {
    return (
        <div className="infoContainer">
            <div className="wordContainer">

            <h2 className="infoTitle">
                Wordmark Logos
            </h2>

            <p className="infoParagraph">
                 Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business' name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google's logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition. 
            </p>
            <p className="infoParagraph">
                
            </p>
            </div>
            <div className="logoContainer">
                <img className="logo" src={visa} alt=''/>
                <img className="logo" src={cola} alt=''/>
                <img className="logo" src={google} alt=''/>
            </div>
        </div>
    )
}
