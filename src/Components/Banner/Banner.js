import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import "./Banner.css"
import banner2 from "../../Images/baner2.webp"
import banner1 from "../../Images/baner1.webp"
import { TypeAnimation } from 'react-type-animation';
function Banner() {
  const images = [banner1, banner2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const currentImage = images[currentImageIndex];
  return (
    <section className='banner mt-5 row'>
      
       <div className='col-11 col-sm-6 col-md-4 col-lg-4 ms-3 mt-auto mb-auto'>
        <motion.img
        key={currentImageIndex}
        initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 0.8, scale: 1 }}
           transition={{ duration: 1 }} src={currentImage} alt={banner1} className='img-fluid ban-img ' />
        </div>
        <div className='container mt-auto mb-auto col-11 col-sm-6 col-md-7 col-lg-7'>
          
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
