import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { motion } from "framer-motion";
import Ap from '../Images/banner2.png'
import './Page.css'

function About() {
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
  const initialX = 300;
  const targetX = 10;
  const animationOffset = 300;
  const currentX = scrollY > animationOffset ? targetX : initialX + (scrollY / animationOffset) * (targetX - initialX);
  const initialY = -400;
  const targetY = 40;
  const currentY = scrollY > animationOffset ? targetY : initialY + (scrollY / animationOffset) * (targetY - initialY);
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        className="mt-5 pt-5"
      >
        <div className="row">
          <motion.div
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1, color: '#fd0' }}
      whileTap={{ scale: 0.9 }}
            style={{
        cursor: 'pointer',
        transition: 'color 0.2s ease',
      }}
      className="mt-5"
          >
            <h1 className="page-head text-center">About Us</h1>
          </motion.div>
          <motion.div
          className="container-fluid col-11 col-md-6 col-lg-5 mt-auto mb-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="para">Winndeal Computer Technology is a full-fledged IT Solutions &
            Services company located in the heart of Dubai, UAE. With a strong
            focus on IT Infrastructure, System Integration, Cloud Solutions,
            Software & Security solutions, we cater to clients from diverse
            business verticals, including SMB, Enterprise & SOHO market
            segments.</h4>
          </motion.div>
          <motion.div
          className="container-fluid col-9 col-md-5 col-lg-4"
          ><img src={Ap} alt="pic" className="img-fluid m-auto" /></motion.div>
          <motion.div
          className="container-fluid col-9 col-md-5 col-lg-5"
          initial={{ opacity: 0, scale: 1 ,x: initialY}}
   animate={{ opacity: 1, scale: 1 ,x: currentY }}
   transition={{ duration: 1 }}><img src={Ap} alt="pic" className="img-fluid m-auto" /></motion.div>
          <motion.div
          className="container-fluid col-11 col-md-6 col-lg-5 mt-auto mb-auto"
          initial={{ opacity: 0, scale: 1 ,x: initialX }}
      animate={{ opacity: 1, scale: 1 ,x: currentX }}
      transition={{ duration: 1 }}
      style={{
      transform: 'translate(-10%)'}}
          >
           <h4 className="para"> Our strategic partnerships and highest levels of partnership
            accreditations with global brands like HPE, Dell, Lenovo, Aruba,
            APC, Microsoft, and many others enable us to provide our customers
            with the latest technologies and solutions.</h4>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
