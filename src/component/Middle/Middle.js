import React from 'react'
import images from '../../assets/images';
import "./Middle.scss"
 function Middle() {
  return (
    <div className='Middle'>
     <div className='Middle__Left'>
      <div className="Middle__Left__First">
       Celebrating the little things
      </div>
      <div className="Middle__Left__Second">
        We believe in celebrating the little things, working hard, supporting <br/>one another and baking the best cupcakes we can. We work on creating a caring<br/> community through baking. 
      </div>
      <div className="Middle__Left__Third">
        We are committed to building a work environment where we can all learn,
        grow <br/> and be our best selves.
      </div>
      </div>
      <div className="Middle__Right">
        <img src={images.video} alt="" className="Video" />
      </div>
    </div>
  )
}
export default Middle;