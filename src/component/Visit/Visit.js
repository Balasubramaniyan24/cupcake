import React from 'react'
//import images from '../../assets/images'
import "./Visit.scss"

 function Visit() {
  return (
    <div className="Visit">
        <div className="Visit__Left">
        Come and visit the Miss <br/>Cupcake store
        </div>
        <div className="Visit__Right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1634125080590!5m2!1sen!2sin" ></iframe>
        </div>
    </div>
  )
}
export default Visit;
