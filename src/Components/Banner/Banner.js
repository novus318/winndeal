import React from 'react'
import { motion } from "framer-motion"
import "./Banner.css"
import banner3 from "../../Images/baner1.png"
import { TypeAnimation } from 'react-type-animation';
function Banner() {
  return (
    <div className='banner mt-5 pt-5'>
      <div className='d-flex justify-content-between'>
        <motion.div initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }} className='container'>
        <motion.img initial={{ opacity: 0, scale: 1.3 }}
           animate={{ opacity: 0.9, scale: 1 }}
           transition={{ duration: 0.9 }} src={banner3} alt="banner" className='ban-img ' />
        </motion.div>
        <div className='container m-auto right-c'>
          
          <motion.div
           initial={{ opacity: 0, scale: 0.6 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }} className='banner-head'>We deliver
           </motion.div>
           <motion.div
           initial={{ opacity: 0, scale: 0.6 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }} className='banner-text'>
           <TypeAnimation
           sequence={[
             'Cutting-edge IT solutions tailored to your business needs',
             5000,
             'Top-notch services that drive results',
             5000,
           ]}
           wrapper="span"
           speed={50}
           repeat={Infinity}
         />
         </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner
