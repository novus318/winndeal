import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import Products from '../Components/Products/Products';
import Footer from '../Components/Footer/Footer';
import Layout from '../Components/Layout';
import Installation from  '../Images/Installation.png'
import Maintenance from  '../Images/Maintenance.png'
import Security from  '../Images/Security.png'
import Consultation from  '../Images/Consultation.png'
import Remote from '../Images/Remote.png'
import Contract from '../Images/contract.png'
import OS from  '../Images/os.png'
import CCTV from  '../Images/Surveillance.png'
import { useLocation } from 'react-router-dom';
function ProductService() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/product-services') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  const serviceList = [
    {
      name: 'Network & IT AMC',
      image: Contract,
      description:
        'Service offers management of network infrastructure along panoramic hardware & software maintenance',
    },
    {
      name: 'Installation and Setup',
      image: Installation,
      description:
        'We provide professional installation and setup services for all your IT infrastructure needs.',
    },
    {
      name: 'Security Solutions',
      image: CCTV,
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
      name: 'Remote Assist Services',
      image: Remote,
      description: 'Our remote services allow us to assist you virtually, solving IT issues and providing support remotely.',
    },
    {
      name: 'Network Security Audits',
      image: Security,
      description:
        'We conduct comprehensive network security audits to identify vulnerabilities in your network defenses.',
    },
    {
      name: 'OS Configuration',
      image: OS,
      description:
        'Customize and configure operating systems to meet your specific requirements and preferences.',
    },
    {
      name: 'Expert IT Consultation',
      image: Consultation,
      description:
        'Get expert IT consultation services to make informed decisions and optimize your technology investments.',
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 1500 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1500, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 400 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
  }
  const listItem1Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <Layout title={"Products & Services"}>
    <Header/>
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
        <div className='container-fluid m-auto'>
        <Carousel responsive={responsive}>
        {serviceList.map((service, index) => (
           <MDBCard className='p-1 me-4'>
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
                ))}
                </Carousel>
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
