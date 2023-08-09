import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Layout from '../Components/Layout'
import Promise from '../Components/Promise/Promise'
import Cards from '../Components/Cards/Cards'
import Products from '../Components/Products/Products'
import Footer from '../Components/Footer/Footer'
import ContactIcons from '../Components/ContactIcons'
import Mission from '../Components/Mission/Mission'
function Home() {
  return (
    <>
    <Layout title={'WinnDeal'} description={'We deliver cutting-edge IT solutions tailored to your business needs in UAE,Our team of experts is committed to providing top-notch services that drive results'}
    keywords={'Winndeal,winndeal,WINNDEAL,WinnDeal,UAE,uae,DUBAI,Dubai,dubai,nizamudheen'} author={'Muhammed Nizamudheen M'}>
    <Header/>
    <Banner/>
    <Promise/>
    <Products/>
    <Mission/> 
    <Cards/>
    <ContactIcons/>
    <Footer/>
    </Layout>
    </>
  )
}

export default Home
