import React from 'react'
import "./Header.scss"
import images from '../../assets/images';
function Header() {
  return (
    <div className='Header'>
      <div className="Header__Left">
        <div className="Header__Left__Home">
          Home
        </div>
        <div className="Header__Left__Contact">
            Contact
        </div>
        <div className="Header__Left__Welcome">
            Welcome
        </div>
        </div>
      <div className="Header__Right">
       <img src={images.cart} className ="cart" alt="" />
      </div>
    </div>
  )
}
export default Header;