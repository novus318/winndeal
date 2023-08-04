import React, { useEffect, useState } from 'react'
import './Promise.css'
import Assurance from '../../Images/promise.png'
import { motion } from 'framer-motion'
function Promise() {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const initialX = -300;
  const targetX = 50;
  const animationOffset = 300;
  const currentX = scrollY > animationOffset ? targetX : initialX + (scrollY / animationOffset) * (targetX - initialX);
  const initialY = 400;
  const targetY = 50;
  const currentY = scrollY > animationOffset ? targetY : initialY + (scrollY / animationOffset) * (targetY - initialY);
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
      <h1 className='p-head'>IT solutions and products to <br/>meet the diverse needs of business</h1>
    </motion.div>
    <div className='row container-fluid'>
    <motion.div  initial={{ opacity: 0, scale: 1 ,x: initialX }}
      animate={{ opacity: 1, scale: 1 ,x: currentX }}
      transition={{ duration: 1 }}
      style={{
      transform: 'translate(-10%)'}} className='col-11 col-md-5 mt-2 pt-5 me-auto'>
        <h4 className='para '>
        With unwavering Assurance,<br/><br/>Our core focus lies in delivering exceptional services encompassing System Integration, IT Infrastructure, Cloud, Software, and Security solutions.
        </h4>
    </motion.div>
    <motion.div
   initial={{ opacity: 0, scale: 1 ,x: initialY}}
   animate={{ opacity: 1, scale: 1 ,x: currentY }}
   transition={{ duration: 1 }} className='col-10 col-md-4 col-lg-3 m-auto'>
      <img src={Assurance} alt="promise" className='img-fluid' />

    </motion.div>
    </div>
    </div></>
  )
}

export default Promise
