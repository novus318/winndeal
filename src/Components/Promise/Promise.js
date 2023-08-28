import React, { useEffect } from 'react'
import './Promise.css'
import Assurance from '../../Images/promise.avif'
import { motion, useAnimation } from 'framer-motion'
function Promise() {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sectionElements = document.querySelectorAll('.section');

    sectionElements.forEach((element) => {
      const elementTop = element.offsetTop;
      const desiredPosition = elementTop - 300; 

      if (scrollY > desiredPosition) {
        controls.start({ opacity: 1, y: 0 });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);
  return (
    <>
    <div className='mt-5 container-fluid'>
       <motion.div
       className='text-center pt-5'
      whileHover={{ scale: 1.1, color: '#fd0' }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      style={{
        cursor: 'pointer',
        transition: 'color 0.2s ease',
      }}
    >
      <h1 className='p-h'>IT solutions and products to <br/>meet the diverse needs of business</h1>
    </motion.div>
    <div className='row container-fluid'>
    <motion.div  initial={{ opacity: 0, scale: 1 }}
      animate={controls}
      transition={{ duration: 1 }}
      style={{
      transform: 'translate(-10%)'}} className='col-11 col-md-5 mt-2 pt-5 m-auto'>
        <h4 className='para'>
        With unwavering Assurance,<br/><br/>Our core focus lies in delivering exceptional services encompassing System Integration, IT Infrastructure, Servers, Software, and Security solutions.
        </h4>
    </motion.div>
    <motion.div
   initial={{ opacity: 0, scale: 1 }}
   animate={controls}
   transition={{ duration: 1 }} className='col-10 col-md-4 col-lg-3 m-auto'>
      <img src={Assurance} alt="promise" className='img-fluid' />

    </motion.div>
    </div>
    </div></>
  )
}

export default Promise
