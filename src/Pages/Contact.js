// Contact.js
import React from "react";
import Header from "../Components/Header/Header";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";
import banner2 from "../Images/c1.png";
import "./Page.css";

function Contact() {
  const handleEmail = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Layout title={"Contact Us"}>
        <Header />
        <div className="mt-5 pt-5" style={{ background: "#fd0" }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="container-fluid mt-5"
          >
            <div className="row mt-2">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.9 }}
                className="col-10 col-md-5 mt-auto mb-auto m-auto"
              >
                <img src={banner2} alt="imag-e" className="img-fluid rounded-7 mt-5" />
              </motion.div>
              <div className="col-12 col-md-6 mt-2">
                <motion.h1 transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1, color: "#fff" }}
            whileTap={{ scale: 0.9 }}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }} className="text-center mb-1 page-head">Get in Touch</motion.h1>
                <h4 className="text-center mb-2 para">We'd love to hear from you!</h4>
                <motion.form
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9 }}
                  onSubmit={handleEmail}
                  className="text-center"
                >
                  <input className="input col-12 p-2 mb-4" placeholder="Name" type="text" />
                  <input className="input col-12 p-2 mb-4" placeholder="Email" type="email" />
                  <input className="input col-12 p-2 mb-4" placeholder="Subject" type="text" />
                  <textarea className="input col-12 p-2 mb-4" placeholder="Message" />
                  <motion.button transition={{ duration: 0.2 }}
            whileHover={{ scale: 0.9, color: "#fd0" }}
            whileTap={{ scale: 0.9 }}
            style={{
              cursor: "pointer",
              transition: "color 0.2s ease",
            }} type="submit" className="col-12 p-2 mb-5 form-btn">
                    Send
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
