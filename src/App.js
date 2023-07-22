
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductService from './Pages/ProductService';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading';

function App() {
  const [loading, setLoading] = useState(true)
useEffect(() => {
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },1700)
}, [])
  return (
  <>
  {loading ? <Loading/>:
  <Router>
   <Routes> 
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/product-services" element={<ProductService />} />
  <Route path="/contact" element={<Contact/>} />
  </Routes>
  </Router>}
  </>
  );
}

export default App;
