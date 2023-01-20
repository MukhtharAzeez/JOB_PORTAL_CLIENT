import Head from 'next/head'
import React from 'react'

function AddCompanyAdmins() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
            </Head>
            {/* <section className=" py-1 bg-blueGray-50"> */}
            <div className="w-full lg:w-11/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Add an Admin
                            </h6>
                            <button className="bg-[#1e293b] text-gray-400  active:bg-[#1e293b] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md hover:bg-gray-400 hover:text-black outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                User Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                            Name
                                        </label>
                                        <input type="text" name='name' placeholder='Name of the Admin' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                            Email address
                                        </label>
                                        <input type="email" name='email' placeholder='Email of the Admin' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                            Position in Company
                                        </label>
                                        <input type="text" name='position' placeholder='Admin Position in Company' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                            Employee Id
                                        </label>
                                        <input type="text" name='employeeId' placeholder='Employee identity Number' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Contact Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                            Address
                                        </label>
                                        <input type="number"  name='address' placeholder='Address of the Admin' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                            Personal Mobile Number
                                        </label>
                                        <input type="email" name='mobile' placeholder='Personal Number' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                            Business Number
                                        </label>
                                        <input type="text" name='businessMobile' placeholder='Business NUmber' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                            Postal Code
                                        </label>
                                        <input type="text" name='postalCode' placeholder='Postal Code' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Choose Authority of Admins :
                            </h6>
                            <ul className="grid w-full gap-6 md:grid-cols-3">
                                <li>
                                    <input type="checkbox" id="react-option" value="anyActionsWithPermission" className="hidden peer" required />
                                    <label htmlFor="react-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 cursor-pointer bg-white border-2 border-gray-200 rounded-lg cursor-pointe  peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 ">
                                        <div className="block">
                                            <div className="w-full text-sm">Normal : Admin can do anything after getting approval from Company</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="flowbite-option" value="sheduleInterviewsWithoutPermission" className="hidden peer" />
                                    <label htmlFor="flowbite-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 cursor-pointer bg-white border-2 border-gray-200 rounded-lg cursor-pointe  peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 ">
                                        <div className="block">
                                            <div className="w-full text-sm">Admin can schedule online Interviews And Also can schedule offline Interviews</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="angular-option" value="haveAllAuthorities" className="hidden peer" />
                                    <label htmlFor="angular-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 cursor-pointer bg-white border-2 border-gray-200 rounded-lg cursor-pointe  peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 ">
                                        <div className="block">
                                            <div className="w-full text-sm">Admin can Hire Users Directly , Dont want approval from Company</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>

                        </form>
                    </div>
                </div>
            </div>
            {/* </section > */}
        </>
    )
}

export default AddCompanyAdmins