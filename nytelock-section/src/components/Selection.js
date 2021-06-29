import React from 'react'
import './selection.css';
import LettermarkInfo from './LettermarkInfo.js'
import WordmarkInfo from './WordmarkInfo.js'
import PictoralInfo from './PictoralInfo.js'
import AbstractInfo from './AbstractInfo.js'
import MascotInfo from './MascotInfo.js'
import CombInfo from './CombInfo.js'

//import {faInstagram} from '@fortawesome/free-brands-svg-icons';

import { useState } from 'react';



export default function Selection() {
   
    const [cat, setInfo] = useState('lettermark')
    
    

    const showInfo = () => {

        if (cat === 'lettermark') {
            return ( <LettermarkInfo /> )
        } else if (cat === 'wordmark') {
            return ( <WordmarkInfo/> )
        } else if (cat === 'pictorial') {
            return ( <PictoralInfo/> )
        } else if (cat === 'abstract') {
            return ( <AbstractInfo/> )
        } else if (cat === 'mascot') {
            return( <MascotInfo/> ) 
        } else if (cat === 'comb') {
            return (<CombInfo/>)
        }
        
    }
    
    return (
        <div className="container">
            <div className="selectionContainer">
            <p></p>

            <div className="twoTitles">
                <li className="bulletTitle">
                    HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?
                </li>
                <h1 className="mainTitle">
                    DIFFERENT TYPES OF LOGO STYLES
                </h1>
            </div>

            <div className='contactBtnContainer'>
                <button onClick={() => window.location.assign('https://nytelock.com/quote/')}className='contactBtn'>Contact Us {<img className='arrow' src={process.env.PUBLIC_URL + '/arrow.png'} alt='none'></img>}</button>
            </div>
            
            <div className="infoBtnContainer">
                 <button className='fas fa-italic infoBtn' onClick={() => setInfo('lettermark')}><div className='btnText'>Lettermark <br/><br/>Logos</div></button>

                <button className='fab fa-weebly infoBtn' onClick={() => setInfo('wordmark')}><div className='btnText'>Wordmark <br/><br/>Logos</div></button>
            
                <button className='fas fa-lemon infoBtn' onClick={() => setInfo('pictorial')}><div className='btnText'>Pictorial Mark<br/><br/>Logos</div></button>

                <button className='fab fa-artstation infoBtn' onClick={() => setInfo('abstract')}><div className='btnText'>Abstract Mark <br/><br/>Logos</div></button>

                <button className='fas fa-theater-masks infoBtn' onClick={() => setInfo('mascot')}><div className='btnText'>Mascot <br/><br/>Logos</div></button>

                <button className='fas fa-puzzle-piece infoBtn' onClick={() => setInfo('comb')}><div className='btnText'>Combination <br/><br/>Logos</div></button>

            </div>
            </div>
            {showInfo()}
        </div>
       
    );
        

        
        
        /*
        <div className="selectionContainer">
            <p>Selection Area</p>
            <div className="twoTitles">
                <li className="bulletTitle">
                    bullet title
                </li>  
                <h1 className="mainTitle">
                    hello
                </h1>
            </div>

            <div className="contactBtn">
                <button> contact button </button>
            </div>

            <div className="selectionCards">
                <button className="selectionCard"> card button </button>
                <button className="selectionCard"> card button </button>
                <button className="selectionCard"> card button </button>
                <button className="selectionCard"> card button </button>
                <button className="selectionCard"> card button </button>
                <button className="selectionCard"> card button </button>
            </div>
            

        </div>
        */
    
}
