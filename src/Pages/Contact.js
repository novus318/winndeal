import React from 'react'
import Header from '../Components/Header/Header'
import { motion } from "framer-motion"
import Layout from '../Components/Layout'
import banner2 from '../Images/banner2.png'
import './Page.css'
function Contact() {
  const handleEmail=(e)=>{
    e.preventDefault()
  }
  return (
    <>
    <Layout title={'Contact Us'}>
    <Header/>
    <div className='mt-5 pt-5' style={{background:'#fd0'}}>
    <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9 }} className='row  mt-2 container-fluid'>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.6, scale: 1 }}
    transition={{ duration: 0.9 }} className='col-10  col-md-5 ms-5 me-5'>
    <img src={banner2} alt="imag-e" className='img-fluid' />
      </motion.div>
    <div className='col-12 col-md-6 mt-5'>
    <motion.form initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9 }} onSubmit={handleEmail} className='text-center'>

      <input className='input col-12 p-2 mb-4' placeholder='Name' type='text' />

      <input className='input col-12 p-2 mb-4' placeholder='Email' type='email' />

      <input className='input col-12 p-2 mb-4' placeholder='Subject' type='text' />

      <textarea className='input col-12 p-2 mb-4' placeholder='Message'/>

      <button type='submit' className='col-12 p-2 mb-5 form-btn'>Send</button>
    </motion.form>
    </div>
    </motion.div>
    </div>
    </Layout>
    </>
  )
}

export default Contact
