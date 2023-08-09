import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import './Products.css'
import serverImage from "../../Images/server.png";
import workstationImage from "../../Images/workStation.png";
import upsImage from "../../Images/UPS.png";
import laptopImage from "../../Images/laptops.png";
import networkImage from "../../Images/network.png";
function Products() {
  const controls = useAnimation();
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sectionElements = document.querySelectorAll(".section");

    sectionElements.forEach((element) => {
      const elementTop = element.offsetTop;
      const desiredPosition = elementTop - 300;

      if (scrollY > desiredPosition) {
        controls.start({ opacity: 1, y: 0 });
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);
  const products = [
    {
      name: 'LAPTOPS',
      image: laptopImage,
      description: 'Our Laptops combine portability with performance. Whether you are a business traveler or a student, these laptops offer productivity and entertainment on the go.',
    },
    {
      name: 'SERVERS',
      image: serverImage,
      description: 'Our Servers are designed for high-performance computing, handling heavy workloads with ease. They provide reliable and scalable solutions for businesses of all sizes.',
    },
    {
      name: 'WORKSTATIONS',
      image: workstationImage,
      description: 'Experience the next level of creativity and productivity with our Workstations. They are engineered for professionals in graphic design, video editing, and 3D rendering.',
    },
    {
      name: 'UPS',
      image: upsImage,
      description: 'Our UPS (Uninterruptible Power Supply) systems protect your valuable equipment from power interruptions and fluctuations. Ensure your critical systems stay operational during outages.',
    },
    {
      name: 'NETWORK & SECURITY',
      image: networkImage,
      description: 'Our Network and Security solutions ensure a safe and reliable IT infrastructure. From firewalls to data encryption, we safeguard your network from cyber threats.',
    },
  ];
  const listItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 1, y: -50 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          whileHover={{ scale: 1.1, color: "#fd0" }}
          whileTap={{ scale: 0.9 }}
          style={{
            cursor: "pointer",
            transition: "color 0.2s ease",
          }}
          className="text-center page-head mt-3 mb-5 pb-5 display-4"
        >
          Our Products
        </motion.h1>
        <motion.div className="container-fluid m-auto mb-5">
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="row mb-2 pb-3 justify-content-center"
            >
              <motion.img
              animate={{ opacity: 0.85, scale: 1 }}
                src={product.image}
                alt={product.name}
                style={{ borderRadius: "10%" }}
                className="col-11 col-md-5 me-4"
              />
              <motion.div className="col-11 col-md-6 mt-auto pt-1 mb-auto">
                <h1 className="p-head text-center mb-3" >{product.name}</h1>
                <h5 className="p-d">{product.description}</h5>
              </motion.div>
              <hr className="mt-3"/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Products;
