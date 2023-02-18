import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import Itemspage from './pages/Items';
import { Nav } from './components/Nav';
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {

  useEffect(() => {
    AOS.init({
      delay: 600, duration: 700, easing: 'ease-out'
    })
  }, [])

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/item' element={<Itemspage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
