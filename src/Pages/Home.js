import React, { useEffect} from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Layout from '../Components/Layout'
import Promise from '../Components/Promise/Promise'
import Cards from '../Components/Cards/Cards'
import Products from '../Components/Products/Products'
import Footer from '../Components/Footer/Footer'
import ContactIcons from '../Components/ContactIcons'
import Mission from '../Components/Mission/Mission'
import ChatBot from '../Components/ChatBot'
import { useLocation } from 'react-router-dom'
import Brands from '../Components/Brands'
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
    <Layout title={'WinnDeal'} description={'Deliver cutting-edge IT solutions tailored to your business needs in UAE,Providing top-notch services that drive results'}
    keywords={'Winndeal,windeal,dubai,nizamudheen,sharja,IT support companies,IT services near me,loopcod'} author={'Muhammed Nizamudheen M'}>
    <Header/>
    <Banner/>
    <Promise/>
    <Products/>
    <Brands/>
    <Mission/>
    <Cards/>
    <ChatBot/>
    <ContactIcons/>
    <Footer/>
    </Layout>
    </>
  )
}

export default Home
