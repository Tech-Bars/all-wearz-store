import React from 'react'
import loginSideImage from '../assets/413-Buy-Button-on-Phone-screen.svg'

export const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center gap-4">
            <div className="flex p-3 flex-col flex-1 gap-2 justify-center items-center">
                <form className="w-full md:w-55 lg:w-55 flex flex-col gap-4 justify-center items-center">
                    <h2 className="mr-auto text-dark lg:text-2xl">Login 🚀 </h2>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Log in" />
                </form>
                <p>OR</p>
                <div>
                    <button className="btn-primary">Login with Google</button>
                </div>
                <br />
                <div>
                    <p>
                        Forgot Password?{' '}
                        <button className="btn-small">Reset</button>
                    </p>
                </div>
                <p className="p-3">
                    Don't have an account yet? &nbsp;
                    <button className="btn-small">Sign up</button>
                </p>
            </div>
            <div className="hidden lg:block md:block flex-grow border border-left shadow">
                <img src={loginSideImage} alt="" />
            </div>
        </div>
    )
}
