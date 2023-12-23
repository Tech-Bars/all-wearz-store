import { FC, Dispatch } from 'react'
import { Link } from 'react-router-dom'

interface props {
    showAccountModal: boolean
    setShowAccountModal: Dispatch<React.SetStateAction<boolean>>
}

const MyAccountModal: FC<props> = ({
    showAccountModal,
    setShowAccountModal,
}) => {
    return (
        <div
            className={`${
                showAccountModal
                    ? 'opacity-100  visible'
                    : ' opacity-0 invisible'
            }  transition-all delay-150 duration-300 ease-in-out shadow-lg absolute flex flex-col top-16 right-52 z-40 w-44 h-60 justify-between bg-gray-50 rounded-md`}
        >
            <div className="flex flex-col gap-2 p-3  justify-start">
                <Link to="/account">
                    {' '}
                    <h2
                        onClick={() => {
                            setShowAccountModal(!showAccountModal)
                        }}
                        className="text-sm text-black font-medium font-sora cursor-pointer"
                    >
                        My Account
                    </h2>
                </Link>
                <h2 className="text-sm text-black font-medium font-sora cursor-pointer">
                    My Orders
                </h2>
            </div>
            <div className="flex items-center p-3 justify-center border-t-2 border-primary">
                <h2 className="text-base font-medium text-primary font-sora cursor-pointer">
                    LOGOUT
                </h2>
            </div>
        </div>
    )
}

export default MyAccountModal
