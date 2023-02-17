import React, { FC } from 'react'
import AccountDetails from '../components/MyAccount/AccountDetails'
import Address from '../components/MyAccount/Address'
import Sidebar from '../components/MyAccount/Sidebar'

const MyAccount:FC = () => {
  return (
    <div className="flex flex-row gap-3 h-[90vh] mt-20  mx-auto w-screen md:w-[85%] lg:w-[75%] ">      
        <Sidebar />
        <div className="w-[65%] px-10 py-5 border mx-auto flex flex-col gap-5">
        <AccountDetails />
        <Address />
        </div>
    </div>
  )
}

export default MyAccount