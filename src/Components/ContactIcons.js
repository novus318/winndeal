import React, { useEffect, useState } from 'react'
import { MDBIcon } from "mdb-react-ui-kit";
import { motion } from 'framer-motion';
function ContactIcons() {
    const phoneNumber = "+971563017029";
    const [isMobile, setIsMobile] = useState(false);
  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold if needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        >
        {!isMobile ? ( <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6,delay: 0.5 }} className="social-icons-desktop p-3">
    <MDBIcon fab icon="linkedin-in" className="soci mb-4" size='2x' onClick={()=>{window.open('https://www.linkedin.com/company/winndeal/about/?viewAsMember=true')}}/><br/>
    <MDBIcon fab icon="instagram" className="soci mb-4" size='2x'onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100093622394715')}}/><br/>
    <MDBIcon fab icon="facebook" className="soci mb-4" size='2x'onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100093622394715')}}/><br/>
    <MDBIcon fab icon="whatsapp" className="soci" size='2x'onClick={openWhatsApp}/>
  </motion.div>):(
    <div className="me-2 social-icon-mobile" onClick={openWhatsApp}>
    <MDBIcon fab icon="whatsapp" className="wapp" size='2x'/>
    </div>)}
  </motion.div>
  )
}

export default ContactIcons
