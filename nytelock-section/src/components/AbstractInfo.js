import React from 'react'
import '../styles/infosections.css'
import bp from '../imgs/bp.png';
import adidas from '../imgs/adidas.png';
import pepsi from '../imgs/pepsi.png';

export default function AbstractInfo() {
    return (
        <div className="infoContainer">
            <div className="wordContainer">

            <h2 className="infoTitle">
                Abstract Mark Logos
            </h2>

            <p className="infoParagraph">
                An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it's an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower.
            </p>
            <p className="infoParagraph">
                Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something unrecognizable, abstract logos allow you to create something truly unique to represent your brand.
            </p>
            </div>
            <div className="logoContainer">
                <img className="logo" src={bp} alt=''/>
                <img className="logo" src={pepsi} alt=''/>
                <img className="logo" src={adidas} alt=''/>
            </div>
        </div>
    )
}
