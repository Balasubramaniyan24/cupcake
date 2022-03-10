import React from 'react'
import "./Footer.scss"

function Footer() {
const date =new Date().getFullYear();
  return (
    <div className='Footer'>
        <div className="Footer__First">
            <div className='Footer__First__Left'>
                <div className="Miss">
                    Miss<br/>cupcake
                </div>
            </div>
            <div className='Footer__First__Right'>
                <div className="Suger">
                    <lable>Suger up your Inbox</lable>
                    <input type="email" placeholder="Email address" />
                </div>
            </div>
            <div className='btn'>
                    <button>SEND</button>
            </div>
        </div>
        <div className="Footer__Second">
            <div className="Footer__Second__Left">
                <div className="name">
                    Shop
                </div>
                <div className="name">
                    Our story
                </div>
                <div className="name">
                    why Miss cupcake
                </div>
            </div>
                <div className="Footer__Second__Right">
                <div className="Rig">
                    Privacy policy
                </div>
                <div className="Rig">
                    Cookies policy
                </div>
                <div className="Term">
                    Terms of use
                </div>
                
            </div>
        </div>
        <div className='copy'>
         &copy;My cupcakes {date}
        </div>
    </div>
  )
}
export default Footer;
