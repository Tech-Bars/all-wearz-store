import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import Itemspage from './pages/Items'
import { Nav } from './components/Nav'
import MyAccountModal from './components/MyAccountModal'
import MyAccount from './pages/MyAccount'
import AccountOverview from './components/MyAccount/AccountOverview'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import Home from './pages/Home'

function App() {
    const [showAccountModal, setShowAccountModal] = useState<boolean>(false)

    useEffect(() => {
        AOS.init({
            delay: 600,
            duration: 700,
            easing: 'ease-out',
            once: false,
        })
    }, [])

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
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/item" element={<Itemspage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/account" element={<MyAccount />}>
                    <Route index element={<AccountOverview />} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App
