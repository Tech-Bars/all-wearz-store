import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import Itemspage from './pages/Items';
import { Nav } from './components/Nav';
import MyAccountModal from './components/MyAccountModal';
import MyAccount from './pages/MyAccount';
import AccountOverview from './components/MyAccount/AccountOverview';



function App() {
  const [showAccountModal, setShowAccountModal] = useState<boolean>(false)
  return (
    <>
    <Nav 
        setShowAccountModal={setShowAccountModal}
        showAccountModal={showAccountModal}
    />
    <MyAccountModal 
        showAccountModal={showAccountModal}
        setShowAccountModal={setShowAccountModal}  
    />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/item' element={<Itemspage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<MyAccount />} >
          <Route index element={<AccountOverview />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
