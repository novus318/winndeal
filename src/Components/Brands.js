import React from 'react';
import { motion} from 'framer-motion'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Asus from '../Images/asus.webp';
import Dell from '../Images/dell .webp';
import HP from '../Images/hp.webp';
import Lenovo from '../Images/lenovo.webp';
import MS from '../Images/ms.webp';
import Canon from '../Images/canon.webp';
import Qnap from '../Images/qnap.webp';
import Samsung from '../Images/samsung.webp';
import Synology from '../Images/synology.webp';


const brandImages = [MS, Lenovo, HP, Dell, Asus, Samsung, Qnap,Synology, Canon];

function Brands() {
    const settings = {
            dots: false,
            infinite: true,
            speed: 1000, 
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2, 
                },
              },
            ]
      };

  return (
    <div className="container-fluid row m-auto">
    <motion.h1
    whileHover={{ scale: 1.1, color: '#fd0' }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      style={{
        cursor: 'pointer',
        transition: 'color 0.2s ease',
      }} className="page-head text-center">Brands We Boost</motion.h1>
    <Slider {...settings}>
      {brandImages.map((image, index) => (
        <div key={index} className='p-5'>
          <img src={image} alt={`Brand ${index}`} className="mt-3 img-fluid no-focus-outline" />
        </div>
      ))}
    </Slider>
  </div>
  );
}

export default Brands;