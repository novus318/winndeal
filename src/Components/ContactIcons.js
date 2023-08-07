import React from 'react'
import { MDBIcon } from "mdb-react-ui-kit";
import { motion } from 'framer-motion';
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
    <motion.div 
    initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9,delay: 0.5 }}
        className="contact-icons">
    <div className="me-2" onClick={openWhatsApp}>
    <MDBIcon fab icon="whatsapp" className="wapp" size='2x'/>
    </div>
    <div  onClick={openEmail}>
    <MDBIcon fas icon="envelope" size='2x'  className="mail"/>
    </div>
  </motion.div>
  )
}

export default ContactIcons
