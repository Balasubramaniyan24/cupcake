import React from 'react'
import images from '../../assets/images';
import "./Intro.scss"
function Intro() {
  return (
    <div className='Intro'>
      <div className='Intro__Left'>
        <div className='Intro__Left__Title' >
        <div className='Title item1'>Miss</div>
                <div className='Title item2'>cupcake</div>
        </div>
        <p>We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment.</p>
        <button> visit us</button>
      </div>
      <div className='Intro__Right'>
      <img src={images.cake} alt="" className="image" />
      </div>
    </div>
  )
}

export default Intro;