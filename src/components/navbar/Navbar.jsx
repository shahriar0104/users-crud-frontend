import React from 'react'
import { useHistory } from 'react-router-dom'

function Navbar() {
    const history = useHistory()

    const handleLogout = () => {
        history.push('/login')
    }

    const handleGoToHome = () => {
        history.push('/home')
    }

    return (
        <nav className="flex lg:flex-row md:flex-row sm:flex-row  flex-col sticky top-0 z-50 justify-between bg-gray-800">
            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col">
                <div className="flex items-center text-xl text-yellow-50 mx-4">DSi Classroom</div>
                <div className="flex items-center h-16"
                onClick={handleGoToHome}>
                    <button className="bg-green-300 px-8 mx-4 py-2 w-32 rounded-lg hover:bg-green-400">
                        Home
                    </button>
                </div>
            </div>

            <div className="flex items-center h-16"
            onClick={handleLogout}>
                <button className="bg-green-300 w-32 px-8 mx-4 py-2 rounded-lg hover:bg-green-400">
                    Log Out
                </button>
            </div>
        </nav>
    )
}

export default Navbar
