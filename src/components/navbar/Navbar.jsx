import React from 'react'
import { useHistory } from 'react-router-dom'
import {RiLogoutCircleLine} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'

function Navbar() {
    const history = useHistory()

    const handleLogout = () => {
        localStorage.clear()
        history.push('/login')
    }

    const handleGoToHome = () => {
        history.push('/home')
    }

    return (
        <nav className="flex flex-row sticky top-0 z-50 justify-between bg-gray-800">
            <div className="flex flex-row">
                <div className="flex items-center text-xl text-yellow-50 mx-4">DSi Classroom</div>
                <div className="flex items-center h-16 cursor-pointer"
                onClick={handleGoToHome}>
                    <div className="bg-green-300 px-2 mx-4 py-2 rounded-md hover:bg-green-400">
                        <AiFillHome size={32}/>
                    </div>
                </div>
            </div>

            <div className="flex items-center h-16 cursor-pointer"
            onClick={handleLogout}>
                <div className="bg-red-400 px-2 mx-4 py-2 rounded-lg hover:bg-red-500">
                    <RiLogoutCircleLine size={32}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
