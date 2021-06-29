import React from 'react'
import '../styles/infosections.css'
import hbo from '../imgs/hbo.png';
import ibm from '../imgs/ibm.png';
import nasa from '../imgs/nasa.png';

export default function LettermarkInfo() {
    return (
        <div className="infoContainer">
            <div className="wordContainer">

            <h2 className="infoTitle">
                Lettermark Logos
            </h2>

            <p className="infoParagraph">
                A Monogram or lettermark is a typography-based logo thats comprised of a few letters, usually a company's initials. The lettermark is all about simplicity   
            </p>
            <p className="infoParagraph">
                By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.
            </p>
            </div>
            <div className="logoContainer">
                <img className="logo" src={hbo} alt=''/>
                <img className="logo" src={ibm} alt=''/>
                <img className="logo" src={nasa} alt=''/>
            </div>
            
        </div>
    )
}
