import React, { FC } from 'react'
import AccountDetails from './AccountDetails'
import Address from './Address'

const AccountOverview: FC = () => {
    return (
        <div className="w-[70%] px-10 py-5 border mx-auto flex flex-col gap-5">
            <AccountDetails />
            <Address />
        </div>
    )
}

export default AccountOverview
