import React from 'react'
import './selection.css';
import LettermarkInfo from './LettermarkInfo.js'
import WordmarkInfo from './WordmarkInfo.js'
import PictoralInfo from './PictoralInfo.js'
import AbstractInfo from './AbstractInfo.js'
import MascotInfo from './MascotInfo.js'
import CombInfo from './CombInfo.js'

import { useState } from 'react';



export default function Selection() {
    const [cat, setInfo] = useState('lettermark')
    
    

    const showInfo = () => {
        if (cat === 'lettermark') {
            return ( <LettermarkInfo /> )
        } else if (cat === 'wordmark') {
            return ( <WordmarkInfo/> )
        } else if (cat === 'pictoral') {
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
            <p>hello</p>

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
