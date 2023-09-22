import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import { motion, useAnimation } from "framer-motion";
import A2 from "../Images/a2.webp";
import A1 from "../Images/a1.webp";
import "./Page.css";
import Cards from "../Components/Cards/Cards";
import ContactIcons from "../Components/ContactIcons";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout";
import { useLocation } from "react-router-dom";

function About() {
  const controls = useAnimation();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
     <Layout
     canonicalUrl={'https://winndeal.com/about'}
     title={"WinnDeal-About"}keywords={'it services company,it firm,it solutions company,it company website,about winndeal,uae,it solutions,pc peripherals,it company dubai'}>
     <Header />
      <ContactIcons/>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        className="mt-5 pt-5"
      >
        <div className="row m-auto">
          <motion.div
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1, color: "#fd0" }}
            whileTap={{ scale: 0.9 }}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            className="mt-5"
          >
            <h1 className="page-head text-center mb-5">About Us</h1>
          </motion.div>
          <motion.div
            className="container-fluid col-11 col-md-6 col-lg-5 mt-auto mb-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="para">
              Winndeal Computer Technology is a full-fledged IT Solutions &
              Services company located in the heart of Dubai, UAE. With a strong
              focus on IT Infrastructure, System Integration, Cloud Solutions,
              Software & Security solutions, we cater to clients from diverse
              business verticals, including SMB, Enterprise & SOHO market
              segments.
            </h4>
          </motion.div>
          <motion.div transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }} className="container-fluid col-9 col-md-5 col-lg-4 mt-3">
            <img src={A2} alt="pic" className="img-fluid m-auto" />
          </motion.div>
          <motion.div
            className="container-fluid col-9 col-md-5 col-lg-5 mb-3 mt-3"
            initial={{ opacity: 0, scale: 1 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            <img src={A1} alt="pic" className="img-fluid m-auto" />
          </motion.div>
          <motion.div
            className="container-fluid col-11 col-md-6 col-lg-5 mt-auto mb-auto"
            initial={{ opacity: 0, scale: 1 }}
            animate={controls}
            transition={{ duration: 1 }}
            style={{
              transform: "translate(-10%)",
            }}
          >
            <h4 className="para">
              Our strategic partnerships and highest levels of partnership
              accreditations with global brands like HP, Dell, Lenovo, Aruba,
              APC, Microsoft, and many others enable us to provide our customers
              with the latest technologies and solutions.
            </h4>
          </motion.div>
        </div>
        <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          transform: "translate(-10%)",
        }}>
          <h4 className="container para mt-5 mb-5 text-center  ">
            As a reliable and stable partner, Winndeal Computer Technology is
            committed to meeting your IT requirements with precision and
            excellence. Whether you are a small business, a large enterprise, or
            a home office, our tailored IT solutions will align with your unique
            needs and drive your success.
          </h4>
        </motion.div>
      </motion.div>
      <Cards/>
      <Footer/>
     </Layout>
    </>
  );
}

export default About;
