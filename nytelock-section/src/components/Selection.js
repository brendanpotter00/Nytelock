import React from 'react'
import './selection.css';

import { useState } from 'react';



export default function Selection() {
    

        

        return (
        
        
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
        
    )
}
