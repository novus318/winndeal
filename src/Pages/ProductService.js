import React from 'react'
import Header from '../Components/Header/Header'
import { motion } from 'framer-motion';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import Products from '../Components/Products/Products';
import ContactIcons from '../Components/ContactIcons';
import Footer from '../Components/Footer/Footer';
import Layout from '../Components/Layout';
import Installation from  '../Images/Installation.png'
import Maintenance from  '../Images/Maintenance.png'
import Security from  '../Images/Security.png'
import Consultation from  '../Images/Consultation.png'
function ProductService() {
  const serviceList = [
    {
      name: 'Installation and Setup',
      image: Installation,
      description:
        'We provide professional installation and setup services for all your IT infrastructure needs.',
    },
    {
      name: 'Maintenance and Support',
      image: Maintenance,
      description:
        'Our team offers ongoing maintenance and support to ensure your systems run smoothly and efficiently.',
    },
    {
      name: 'Network Security Audits',
      image: Security,
      description:
        'We conduct comprehensive network security audits to identify vulnerabilities in your network defenses.',
    },
    {
      name: 'Expert IT Consultation',
      image: Consultation,
      description:
        'Get expert IT consultation services to make informed decisions and optimize your technology investments.',
    },
  ];

  const listItem1Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <Layout title={"Products & Services"}>
    <Header/>
    <ContactIcons/>
    <div className='mt-5 pt-5'>
    <div className='mt-5'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-5 pb-4'
      >
        <motion.h1
          whileHover={{ scale: 1.1, color: "#fd0" }}
          whileTap={{ scale: 0.9 }}
          style={{
            cursor: "pointer",
            transition: "color 0.2s ease",
          }}
          className="text-center page-head mt-3 mb-5 display-4"
        >
          Our Services
        </motion.h1>
        <div className='row container-fluid m-auto'>
        {serviceList.map((service, index) => (
          <div className='col-11 col-md-3 mb-3'>
           <MDBCard className='p-1'>
                  <motion.div
                    key={index}
                    variants={listItem1Variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay: index * 0.2 }}
                  >
                    <div>
                    <MDBCardImage src={service.image}
                        alt={service.name}
                        style={{ width: '100%'}}
                        className='img-fluid s-image'
                      />
                    </div>
                    <MDBCardBody>
                    <MDBCardText>
                    <div><h2 className='text-center page-head'>{service.name}</h2>
                    <h5 className='c-des'>{service.description}</h5></div>
                    </MDBCardText>
                    </MDBCardBody>
                  </motion.div>
                  </MDBCard>
                  </div>
                ))}
        </div>
      </motion.div>
      <Products/>
    </div>
    </div>
    <Footer/>
    </Layout>
    </>
  )
}

export default ProductService
