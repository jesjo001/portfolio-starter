import React from 'react'

import HeartEmoji from "../../img/heartemoji.png"
import Humble from "../../img/humble.png"
import Glasses from "../../img/glasses.png"
import Card from '../Card/Card'

import './Services.css'
const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <span>
            Cubilia? Harum? Ligula convallis cras ut eaque necessitatibus ullam eros aspernatur autem! Sequi consequuntur
            <br />
            ispum is simpley dummy text of printing
            </span>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>
            </div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"figma, Sketch, Photoshop, AdobeXD"}
                />
            </div>

            {/* second card */}
            <div style={{top: '12rem', left: "-4rem" }}>
                <Card 
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"Html, Css, JavaScript, React, Node"}
                />
            </div>

            {/* third card */}
            <div style={{top: '19rem', left: '12rem'}}>
                <Card 
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={"figma, Sketch, Photoshop, AdobeXD"}
                />
            </div>
            
        </div>
    </div>
  )
}

export default Services