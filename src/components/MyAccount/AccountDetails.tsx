import { FC } from 'react'

const AccountDetails: FC = () => {
    return (
        <div className="bg-gray-50 shadow-lg rounded-md ">
            <div>
                <h1 className="text-xl p-2 font-sora font-semibold border-b">
                    Account Details
                </h1>
            </div>
            <div className="p-2 flex flex-col gap-3">
                <span>
                    <h1 className="text-lg font-sora  text-primary">Name</h1>
                    <h2 className="text-sm font-sora text-black ">
                        Firstname Lastname
                    </h2>
                </span>
                <span>
                    <h1 className="text-lg font-sora text-primary">Email</h1>
                    <h2 className="text-sm font-sora  text-black ">
                        myemail@xyz.com
                    </h2>
                </span>
                <span>
                    <h1 className="text-lg font-sora text-primary">
                        Phone Number
                    </h1>
                    <h2 className="text-sm font-sora  text-black ">
                        123-456-8765
                    </h2>
                </span>
            </div>
        </div>
    )
}

export default AccountDetails
