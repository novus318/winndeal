import React from 'react'
import { motion } from "framer-motion"
import "./Banner.css"
import banner3 from "../../Images/baner1.png"
import { TypeAnimation } from 'react-type-animation';
function Banner() {
  return (
    <section className='banner mt-5'>
       <div className='col-12 col-md-6 align-items-center'>
        <motion.img initial={{ opacity: 0, scale: 1.3 }}
           animate={{ opacity: 0.9, scale: 1 }}
           transition={{ duration: 1.5 }} src={banner3} alt={banner3} className='img-fluid ban-img ' />
        </div>
        <div className='container col-11 col-md-7'>
          
          <motion.div
           initial={{ opacity: 0, scale: 0.6 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }} className='display-2'>We deliver
           </motion.div>
           <motion.div
           initial={{ opacity: 0, scale: 0.6 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }} className='display-6'>
           <TypeAnimation
           sequence={[
             'Cutting-edge IT solutions tailored to your business needs.',
             5000,
             'Top-notch services that drive results.',
             5000,
           ]}
           wrapper="span"
           speed={50}
           repeat={Infinity}
         />
         </motion.div>
        </div>
    </section>
  )
}

export default Banner
