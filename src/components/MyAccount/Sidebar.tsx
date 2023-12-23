import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import Gear from './assets/Gear.svg'
import Orders from './assets/Orders.svg'
import Profile from './assets/Profile.svg'

const Sidebar: FC = () => {
    const isActiveLink = 'bg-secondary font-semibold'

    return (
        <div className="border bg-gray-50 flex flex-col justify-between  w-[30%] ">
            <div className="flex flex-col ">
                <NavLink
                    className={({
                        isActive,
                    }: {
                        isActive: boolean
                    }): string => {
                        return isActive ? isActiveLink : ''
                    }}
                    to="."
                >
                    <span className="text-sm flex flex-row items-center gap-5 w-full px-10 cursor-pointer py-3 transition-all duration-300 delay-75 ease-in-out hover:bg-secondary hover:font-semibold">
                        <img src={Profile} alt="settings Icon" className="" />
                        <h1 className="text-sm">My Account</h1>
                    </span>
                </NavLink>
                <span className="text-sm flex flex-row items-cente gap-5 cursor-pointer w-full px-10 py-3 transition-all duration-300 delay-75 ease-in-out hover:bg-secondary hover:font-semibold">
                    <img src={Orders} alt="settings Icon" className="" />
                    <h1 className="text-sm">My Orders</h1>
                </span>
                <span className="text-sm flex flex-row items-cente gap-5 cursor-pointer w-full px-10 py-3 transition-all duration-300 delay-75 ease-in-out hover:bg-secondary hover:font-semibold ">
                    <img src={Gear} alt="settings Icon" className="" />
                    <h1 className="text-sm">Account Management</h1>
                </span>
            </div>
            <div>
                <span className="text-base flex justify-center items-center border-t-2 cursor-pointer text-primary p-2 transition-all duration-300 delay-75 ease-in-out hover:bg-secondary hover:font-semibold">
                    LOGOUT
                </span>
            </div>
        </div>
    )
}

export default Sidebar
