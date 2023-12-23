import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/MyAccount/Sidebar'

const MyAccount: FC = () => {
    return (
        <div className="flex flex-row gap-3 h-[75vh] my-20  mx-auto w-screen md:w-[85%] lg:w-[75%] ">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default MyAccount
