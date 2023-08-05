import React from 'react'
import Header from '../Components/Header/Header'
import { motion } from 'framer-motion';
import Products from '../Components/Products/Products';
function ProductService() {
  const serviceList = [
    'Installation and Setup',
    'Maintenance and Support',
    'Network Security Audits',
    'Data Backup and Recovery',
    'IT Consultation',
  ];

  const listItem1Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <Header/>
    <div className='mt-5 pt-5'>
    <div className='mt-5'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-5'
      >
        <h1>Our Services</h1>
        <ul>
          {serviceList.map((service, index) => (
            <motion.li
              key={index}
              variants={listItem1Variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <Products/>
    </div>
    </div>
    </>
  )
}

export default ProductService
