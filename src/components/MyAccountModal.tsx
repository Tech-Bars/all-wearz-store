import React, {FC} from 'react'


interface props{
    showAccountModal:boolean
}

const MyAccountModal:FC<props> = ({showAccountModal}) => {
  return (
    <div className={`${showAccountModal ? "opacity-100  visible" : " opacity-0 invisible"}  transition-all delay-150 duration-300 ease-in-out shadow-lg absolute flex flex-col top-16 right-52 z-40 w-44 h-60 justify-between bg-gray-50 rounded-md`}>
       <div className="flex flex-col gap-2 p-3  justify-start">
        <h2 className="text-base text-black font-medium font-sora">Account</h2>
        <h2 className="text-base text-black font-medium font-sora">My Orders</h2>
       </div>
       <div className="flex items-center p-3 justify-center border-t-2 border-primary">
        <h2 className="text-base font-medium text-primary font-sora">LOGOUT</h2>
       </div>
    </div>
  )
}

export default MyAccountModal