import React from 'react'

function Loader() {
    return (
        <div className="flex items-center justify-center p-5 bg-transparent min-w-screen">
            <div className="flex space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            </div>
        </div>
    )
}

export default Loader
