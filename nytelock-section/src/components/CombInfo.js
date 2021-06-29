import React from 'react'
import '../styles/infosections.css'
import doritos from '../imgs/doritos.png';
import burgerking from '../imgs/burgerking.png';
import lacoste from '../imgs/lacoste.png';

export default function CombInfo() {
    return (
        <div className="infoContainer">
            <div className="wordContainer">

            <h2 className="infoTitle">
                Combination Logos
            </h2>

            <p className="infoParagraph">
                A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or intergrated together to create an image. 
            </p>
            <p className="infoParagraph">
                Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand. 
            </p>
            </div>
            <div className="logoContainer">
                <img className="logo" src={doritos} alt=''/>
                <img className="logo" src={burgerking} alt=''/>
                <img className="logo" src={lacoste} alt=''/>
            </div>
        </div>
    )
}
