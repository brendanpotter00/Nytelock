import React from 'react'
import './section.css';
import Selection from '../components/Selection.js';
//import Particles from 'react-particles-js'
import contactArrow from '../imgs/contactArrow.png';

export default function Section() {
    return (
        <div className="section">
            
            <Selection/>
            
            <div className="refBtn">
                <button onClick={() => window.location.assign('https://nytelock.com/logo-design-service-in-singapore/')}className='contactBtn'>Section Reference {<img className='arrow' src={contactArrow} alt='none'></img>}</button>
            </div>
        </div>
    )
}
