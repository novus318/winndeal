
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductService from './Pages/ProductService';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { useEffect, useState } from 'react';

import Layout from './Components/Layout';
import { Toaster } from 'react-hot-toast';
import 'react-chatbot-kit/build/main.css'
import Load from './Components/Load';

function App() {

useEffect(() => {
  const disableContextMenu = (event) => {
    event.preventDefault();
  };

  window.addEventListener('contextmenu', disableContextMenu);

  return () => {
    window.removeEventListener('contextmenu', disableContextMenu);
  };
}, []);
  return (
  <>
  <Layout>
  <Router>
   <Routes> 
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About />} />
  <Route path="/product-services" element={<ProductService />} />
  <Route path="/contact" element={<Contact/>} />
  </Routes>
  </Router>
  <Toaster />
  </Layout>
  </>
  );
}

export default App;
