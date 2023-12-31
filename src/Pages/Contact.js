// Contact.js
import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Layout from "../Components/Layout";
import banner2 from "../Images/c1.webp";
import emailjs from "emailjs-com";
import "./Page.css";
import { motion,useAnimation } from 'framer-motion';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIcon
  } from 'mdb-react-ui-kit';
import ContactIcons from "../Components/ContactIcons";
import Footer from "../Components/Footer/Footer";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


 const SERVICE_ID_EMAIL='service_ruqcbt8'
const EMAILJS_TEMPLATE_ID='template_ck9zh7o'
const EMAIL_USER_ID='eAIazN3sfCYuXsB-i'
  const handleEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message,
    };
    toast.success('Enquiry has been Sent', {
      style: {
        border: '1px solid #fd0',
        padding: '10px',
        color: '#333333',
      },
      iconTheme: {
        primary: '#333333',
        secondary: '#fd0',
      },
    });
    emailjs
      .send(SERVICE_ID_EMAIL,EMAILJS_TEMPLATE_ID, templateParams,EMAIL_USER_ID)
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          toast.error('Somthing wrong,Try again', {
            style: {
              border: '1px solid #fd0',
              padding: '10px',
              color: '#333333',
            },
            iconTheme: {
              primary: '#333333',
              secondary: '#fd0',
            },
          });
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const Location=()=>{
    window.open('https://goo.gl/maps/Ja7wtrVrpMZC6xHi6')
  }
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

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
    <Layout
    canonicalUrl={'https://winndeal.com/contact'}
    title={"Contact Us"} keywords={'computer accessories in uae,computer,hardware,best,consulting firms,it service providers,amc,it remote assistants,it support'}>
        <Header />
        <ContactIcons/>
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
                  className="text-center mt-4"
                >
                  <input
          className="input col-12 p-2 mb-4"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input col-12 p-2 mb-4"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input col-12 p-2 mb-4"
          placeholder="Subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="input col-12 p-2 mb-4"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
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
          <div onClick={Location} className='col-10 ms-5 col-md-5 me-auto pb-5 locate'>
        <MDBCard className='p-1'>
      <motion.div
        initial={{ opacity: 0, y: -50 }} animate={controls}
        transition={{ delay: 0.2 }}
        className='section'
      >
        <MDBCardHeader className='text-center'><MDBIcon className="l-arrow" fas icon="map-marked-alt" size='2x'/></MDBCardHeader>
        <MDBCardBody>
        <MDBCardTitle>
        <h3 className='page-head'>
          STORE LOCATION
        </h3>
        </MDBCardTitle>
        <MDBCardText className='para'>
Office-B19-190 ,Block B
SRTI Park, Sharjah - United Arab Emirates<br/>
Phone : +97143985048
        </MDBCardText>
        </MDBCardBody>
      </motion.div>
      </MDBCard>
        </div>
        </div>
        <Footer/>
      </Layout>
    </>
  );
}

export default Contact;
