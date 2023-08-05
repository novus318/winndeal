import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { motion } from "framer-motion";
import A2 from "../Images/a2.png";
import A1 from "../Images/a1.png";
import "./Page.css";
import Cards from "../Components/Cards/Cards";

function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const initialX = 300;
  const targetX = -40;
  const animationOffset = 270;
  const currentX =
    scrollY > animationOffset
      ? targetX
      : initialX + (scrollY / animationOffset) * (targetX - initialX);
  const initialY = -400;
  const targetY = 70;
  const currentY =
    scrollY > animationOffset
      ? targetY
      : initialY + (scrollY / animationOffset) * (targetY - initialY);
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
            }} className="container-fluid col-9 col-md-5 col-lg-4">
            <img src={A2} alt="pic" className="img-fluid m-auto" />
          </motion.div>
          <motion.div
            className="container-fluid col-9 col-md-5 col-lg-5"
            initial={{ opacity: 0, scale: 1, x: initialY }}
            animate={{ opacity: 1, scale: 1, x: currentY }}
            transition={{ duration: 1 }}
          >
            <img src={A1} alt="pic" className="img-fluid m-auto" />
          </motion.div>
          <motion.div
            className="container-fluid col-11 col-md-6 col-lg-5 mt-auto mb-auto"
            initial={{ opacity: 0, scale: 1, x: initialX }}
            animate={{ opacity: 1, scale: 1, x: currentX }}
            transition={{ duration: 1 }}
            style={{
              transform: "translate(-10%)",
            }}
          >
            <h4 className="para">
              {" "}
              Our strategic partnerships and highest levels of partnership
              accreditations with global brands like HPE, Dell, Lenovo, Aruba,
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
    </>
  );
}

export default About;
