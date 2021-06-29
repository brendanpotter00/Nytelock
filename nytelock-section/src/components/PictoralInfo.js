import React from 'react'
import apple from '../imgs/apple.png';
import twitter from '../imgs/twitter.png';
import target from '../imgs/target.png';

export default function PictoralInfo() {
    return (
        <div className="infoContainer">
            <div className="wordContainer">

            <h2 className="infoTitle">
                Pictoral Mark Logos
            </h2>

            <p className="infoParagraph">
                 A pictorial mark (sometimes called brand mark or logo symbol) is an icon--or graphic-based logo. It's probably the image that comes to mind when you think "logo":the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable. 
            </p>
            <p className="infoParagraph">
                A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.
            </p>
            </div>
            <div className="logoContainer">
                <img className="logo" src={apple} alt=''/>
                <img className="logo" src={twitter} alt=''/>
                <img className="logo" src={target} alt=''/>
            </div>
        </div>
    )
}
