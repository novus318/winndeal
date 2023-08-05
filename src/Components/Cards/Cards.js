import React, { useEffect } from 'react'
import { motion,useAnimation } from 'framer-motion';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIcon
  } from 'mdb-react-ui-kit';
function Cards() {
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
        <div className='row container-fluid mb-5 m-auto'>
        <div className='col-11 col-md-4'>
        <MDBCard className='p-1'>
      <motion.div
        initial={{ opacity: 0, y: -50 }} animate={controls}
        transition={{ delay: 0.2 }}
        className='section'
      >
        <MDBCardHeader className='text-center'><MDBIcon fas icon="shield-alt" size='3x'/></MDBCardHeader>
        <MDBCardBody>
        <MDBCardTitle>
        <h1 className='page-head'>
          Authentic Products
        </h1>
        </MDBCardTitle>
        <MDBCardText className='para'>
          Welcome to our home of Authentic & Warranted Products! At WinnDeal, we take offering only the highest quality
          products.Our commitment to authenticity guarantees that you can shop with confidence,knowing that you're getting genuine items that meet the highest standards.
        </MDBCardText>
        </MDBCardBody>
      </motion.div>
      </MDBCard>
        </div>
      <div className='col-11 col-md-4'>
      <MDBCard className='p-1'>
      <motion.div
        initial={{ opacity: 0, y: -50 }} animate={controls}
        transition={{ delay: 0.5 }}
        className='section'
      >
        <MDBCardHeader className='text-center'><MDBIcon fas icon="headset" size='3x'/></MDBCardHeader>
        <MDBCardBody>
        <MDBCardTitle>
        <h1 className='page-head'>
        For a consultation?
        </h1>
        </MDBCardTitle>
        <MDBCardText className='para'>
        Ready to elevate your experience to the next level? We're thrilled to
          offer you a personalized consultation at WinnDeal. Our
          team of experts is standing by to assist you with anything you need,
          from product recommendations to design inspiration.
        </MDBCardText>
        </MDBCardBody>
      </motion.div>
      </MDBCard>
      </div>
      <div className='col-11 col-md-4'>
      <MDBCard className='p-1'>
      <motion.div
        initial={{ opacity: 0, y: -50 }} animate={controls}
        transition={{ delay: 0.8 }}
        className='section'
      >
         <MDBCardHeader className='text-center'><MDBIcon fas icon="trophy" size='3x'/></MDBCardHeader>
        <MDBCardBody>
        <MDBCardTitle>
        <h1 className='page-head'>
        Awards
        </h1>
        </MDBCardTitle>
        <MDBCardText className='para'>
        At WinnDeal, we're proud of the recognition we've received
          for our commitment to excellence and customer satisfaction. Our
          team's hard work and dedication have earned us prestigious awards,
          reaffirming our position as a leader in the industry.
        </MDBCardText>
        </MDBCardBody>
      </motion.div>
      </MDBCard>
      </div>
    </div>
    </>
  )
}

export default Cards
