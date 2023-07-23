import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Layout from '../Components/Layout'
function Home() {
  return (
    <>
    <Layout title={'WinnDeal'} description={'We deliver cutting-edge IT solutions tailored to your business needs in UAE,Our team of experts is committed to providing top-notch services that drive results'}
    keywords={'Winndeal,winndeal,WINNDEAL,WinnDeal,UAE,uae,DUBAI,Dubai,dubai,nizamudheen'} author={'Muhammed Nizamudheen M'}>
    <Header/>
    <Banner/>
    </Layout>
    </>
  )
}

export default Home
