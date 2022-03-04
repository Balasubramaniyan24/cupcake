import React from 'react'
import images from '../../assets/images';
import "./Simple.scss"
function Simple() {
  return (
    <div className="Simple">
        <div className="Simple__Left">
            <div className="First">
             The Simple, Sweet Life
            </div>
            <div className="Second">
            We are proud to offer cupcakes and cakes that are freshly baked within <br/> hours, if not minutes, for your enjoyment.
            </div>
            <div className="btn">
                <button className="">
                Why Miss cupcake  
                </button>
            </div>
        </div>
        <div className="Simple__Right">
          <img src={images.cakes} alt="" className="" />
        </div>
    </div>
     
  )
}
export default  Simple;