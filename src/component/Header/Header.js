import React from 'react'
import "./Header.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
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
       <div className='Cart'>
       <ShoppingCartIcon style={{ fontSize: "3rem" }} />
       </div>
      </div>
    </div>
  )
}
export default Header;