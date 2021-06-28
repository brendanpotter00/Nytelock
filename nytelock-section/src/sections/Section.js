import React from 'react'
import './section.css';
import Selection from '../components/Selection.js';
import InfoSection from '../components/InfoSection.js';

export default function Section() {
    return (
        <div className="section">
            <p> whole section</p>
            <Selection/>
            <InfoSection/>

        </div>
    )
}
