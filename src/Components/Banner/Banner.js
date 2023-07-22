import React from 'react'
import { motion } from "framer-motion"
import "./Banner.css"
function Banner() {
  return (
    <div className='banner mt-5 pt-5'>
      <div className='d-flex justify-content-between'>
        <div className='container'>
          <h1>bskbvakbvjabj</h1>
        </div>
        <div className='container m-auto right-c'>
          <motion.div
           initial={{ opacity: 0, scale: 1 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }} className='banner-head'>We deliver</motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner
