import React from 'react'
import apple from '../imgs/apple.png';
import twitter from '../imgs/twitter.png';
import target from '../imgs/target.png';

export default function PictoralInfo() {
    return (
        <div className="infoContainer">
            <p></p>
            <h2 className="infoTitle">
                Pictoral Mark Logos
            </h2>

            <p className="infoParagraph">
                A Monogram or lettermark is a typography-based logo thats comprised of a few letters, usually a company's initials. The lettermark is all about simplicity 

                By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.
            </p>

            <div className="logoContainer">
                <img className="logo" src={apple} alt=''/>
                <img className="logo" src={twitter} alt=''/>
                <img className="logo" src={target} alt=''/>
            </div>
        </div>
    )
}
