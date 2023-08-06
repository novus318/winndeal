import React from 'react'
import { MDBIcon } from "mdb-react-ui-kit";
function ContactIcons() {
    const phoneNumber = "+971563017029";
  const emailAddress = "support@winndeal.com";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const openEmail = () => {
    window.open(`mailto:${emailAddress}`, "_blank");
  };
  return (
    <div className="contact-icons">
    <div className="me-2" onClick={openWhatsApp}>
    <MDBIcon fab icon="whatsapp" className="wapp" size='2x'/>
    </div>
    <div  onClick={openEmail}>
    <MDBIcon fas icon="envelope" size='2x'  className="mail"/>
    </div>
  </div>
  )
}

export default ContactIcons
