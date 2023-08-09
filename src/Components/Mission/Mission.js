import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Mission() {
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
     <div className='container text-center mb-5 section'>
      <motion.div
      className='mb-5'
      whileHover={{ scale: 1.1, color: '#fd0' }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      style={{
        cursor: 'pointer',
        transition: 'color 0.2s ease',}}
      >
       <h1 className='p-h'>Our Mission & Vision</h1>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={controls}
      transition={{ duration: 1 }}
      style={{
      transform: 'translate(-10%)'}}
        
      >
        <h4 className='para'>
        To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation
        and to be the leading IT service provider, recognized for our exceptional expertise, unwavering commitment to clients, and transformative impact on businesses.
        </h4>
      </motion.div>
    </div>
   </>
  );
}

export default Mission;
