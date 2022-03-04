import React from 'react'
import images from '../../assets/images'
import "./Visit.scss"

 function Visit() {
  return (
    <div className="Visit">
        <div className="Visit__Left">
        Come and visit the Miss <br/>Cupcake store
        </div>
        <div className="Visit__Right">
            <img src={images.map} alt="" className="" />
        </div>
    </div>
  )
}
export default Visit;
