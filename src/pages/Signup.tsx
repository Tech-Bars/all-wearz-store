import React from 'react'
import { Link } from 'react-router-dom'
import signupSideImage from "../assets/189.-On-Demand-Services.svg"

export const Signup = () => {
  return (
    <div className='h-screen flex justify-center items-center gap-4'>
        <div className='flex p-3 flex-col flex-1 gap-2 justify-center items-center'>
            <form className='w-full md:w-55 lg:w-55 flex flex-col gap-4 justify-center items-center'>
                <h2 className='mr-auto text-dark lg:text-2xl'>Sign up ✨  </h2>
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="submit" value="Sign Up"/>
            </form>
            <p>OR</p>
            <div>
                <button className='btn-primary'>
                    Sign up with Google
                </button>
            </div>
            <br />
            <p className='p-3'>
                Have an account already? &nbsp;
                <button className='btn-small'>
                    <Link to="/login">
                        Login
                    </Link>
                </button>
            </p>
        </div>
        <div className='hidden lg:block md:block flex-grow border border-left shadow'>
            <img src={signupSideImage} alt="" />
        </div>
    </div>
  )
}
