import React from 'react'
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook,FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';
import "./Contactus.css"

 function Contactus() {
  return (
    <div className="contactdiv">
      <div>
        <h1 className="contact_det">How Can We Help?</h1>
        <div className="contact_info">
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
        <MdEmail size={30} color="#FF0000" className="in_mail"/>
        E-mail: watchvault157@gmail.com
      </a><br/>
      <a href="tel: +91-9876543217" target="_blank" rel="noopener noreferrer">
        <MdCall size={30} color="#000000" className="in_call"/>
        +91-9876543217
      </a><br/>
      <a href="https://wa.me/ +91-9876543217" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={30} color="#25D366" className="in_what"/>
        +91-9876543217
      </a>
        </div>
      </div>
      <div>
        <div className="contact_add">
          <h2 className="contactaddress">Address:</h2>
          <h2 className="address">
            WWHG+28R, Golf Rd,<br />
            Arivoli Nagar, Vivekanandapuram,<br />
            Kovaipudur, Tamil Nadu 641042
          </h2>
        </div>
      </div>
      <h1 className="contactlink">Follow us:</h1>
      <a href="https://twitter.com/titanwatches?lang=en" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={30} color="#1DA1F2" className="soc_twit" />
      </a>
      <a href="https://www.instagram.com/titanwatchesindia/?hl=en" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={30} color="#C13584" className="soc_inst"/>
      </a>
      <a href="https://www.youtube.com/@titanwatchesindia" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} color="#FF0000" className="soc_you" />
      </a>
      <a href="https://www.facebook.com/titanwatches/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30}   className="soc_face"/>
      </a>
    </div>
  )
}
export default Contactus;