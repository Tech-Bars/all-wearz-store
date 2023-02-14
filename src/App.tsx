import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import Itemspage from './pages/Items';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/item' element={<Itemspage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
