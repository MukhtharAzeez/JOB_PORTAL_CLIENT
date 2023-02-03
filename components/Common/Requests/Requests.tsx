import moment from 'moment'
import React from 'react'

function Requests({ request }: any) {
    return (
        <ol className="w-full">
            <li className="border-l-2 border-purple-600">
                <div className="md:flex flex-start ">
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-100 w-full mx-6 my-6">
                        <div className="flex justify-between mb-4">
                            <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{request.admin.name}</a>
                            <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{moment(request.createdAt).format('LLLL')}</a>
                        </div>
                        <p className="text-purple-600 hover:text-purple-700 focus:text-purple-800 ">{request.job.job}</p>
                        <p className="text-gray-700 mb-6">{request.message}</p>
                        <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Accept</button>
                        <button type="button" className="ml-4 inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">Reject</button>
                    </div>
                </div>
            </li>
        </ol>
    )
}

export default Requests
