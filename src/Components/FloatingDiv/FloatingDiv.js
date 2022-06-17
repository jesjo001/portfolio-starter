import React from 'react'

import "./FloatingDiv.css"
const FloatingDiv = ({txt1, txt2, image}) => {
  return (
    <div className='floatingdiv'>
        <img src={image} alt="" />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>

    </div>
  )
}

export default FloatingDiv