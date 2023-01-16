import Head from "next/head";
import React from "react";
// import { BsFillPeopleFill } from "react-icons/bs";



function Profile() {
    return (
        //         <div
        //             classNameName=" bg-white  shadow:lg
        //    shadow-gray-300 rounded-md p-4 mb-5  ml-16  mt-6 "
        //         >
        //             <div classNameName="relative">
        //                 <div classNameName="h-40 w-full overflow-hidden flex rounded-md justify-center items-center">
        //                     <img
        //                         src="https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg  "
        //                         alt="cover"
        //                     />
        //                 </div>
        //                 <div classNameName="absolute top-14 left-4">
        //                     <div classNameName="w-36 h-36 rounded-full overflow-hidden shadow-sm shadow-gray-500">
        //                         <img
        //                             // src={userData[0]?.userId?.img ? userData[0].userId.img:"data:image/png;base64,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"}
        //                             src="data:image/png;base64,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"
        //                             alt="avatars"
        //                         />
        //                     </div>
        //                 </div>
        //                 <div classNameName="mt-10">
        //                     <h2 classNameName="text-3xl font-bold text-heavy-metal-800">
        // ljkfalkjsdfds                    </h2>
        //                     <div classNameName="text-heavy-metal-500 leading-4">
        // jlfdjlds                       
        //                     </div>
        //                     <p classNameName="my-3 max-w-6xl text-sm">
        //                         fdjlsjdlsfdsf
        //                     </p>
        //                     <div classNameName="flex justify-end mr-5">

        //                             <button

        //                                 classNameName="ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-4 rounded-l"
        //                             >
        //                                 edit
        //                             </button>

        //                     </div>
        //                     <div classNameName="flex">

        //                             <button

        //                                 classNameName="flex justify-between bg-slate-700 hover:bg-gray-400 text-white font-bold py-1  px-4 rounded-l"
        //                             >
        //                                 follow
        //                             </button>
        //                             <button
        //                                 classNameName=" ml-5 flex justify-between bg-slate-700 hover:bg-gray-400 text-white font-bold py-1  px-4 rounded-l"
        //                             >
        //                                 Message
        //                             </button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div classNameName="flex  mt-10  justify-center">
        //                 <span classNameName="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
        //                     <div classNameName="flex justify-center">
        //                         <p classNameName="text-lg font-bold text-center ml-3">2</p>
        //                     </div>
        //                     <p classNameName="text-center">Posts</p>
        //                 </span>
        //                 <span classNameName="ml-2 bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
        //                     <div classNameName="flex ">
        //                         <div classNameName="text-lg font-bold text-center mt-1">
        //                             {React.createElement(BsFillPeopleFill, { size: "20" })}
        //                         </div>
        //                         <p classNameName="text-lg font-bold text-center ml-3">2</p>
        //                     </div>
        //                     <p classNameName="text-center">Followers</p>
        //                 </span>
        //                 <span classNameName="ml-2 bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
        //                     <div classNameName="flex ">
        //                         <div classNameName="text-lg font-bold text-center mt-1">
        //                             {React.createElement(BsFillPeopleFill, { size: "20" })}
        //                         </div>
        //                         <p classNameName="text-lg font-bold text-center ml-3">2</p>
        //                     </div>
        //                     <p classNameName="text-center">Following</p>
        //                 </span>
        //             </div>



        //             <div classNameName="flex items-center justify-center mt-5">
        //                 <div classNameName="cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
        //                     <h1>Post</h1>
        //                 </div>
        //                 <div classNameName="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
        //                     <h1>Shots</h1>
        //                 </div>
        //                     <div classNameName="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
        //                         <h1>Saved post</h1>
        //                     </div>
        //             </div>
        //             <div classNameName="mt-5">

        //             </div>
        //         </div>
        <>
            <Head>
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
            </Head>

            <div className="relative flex flex-col min-w-0  break-words bg-white xs:w-full sm:w-[500px] md:w-[580px] lg:w-full mb-6 shadow-xl rounded-lg mt-36">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative">
                                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                            </div>
                        </div>
                        <div className="w-full px-4 text-center mt-20">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        22
                                    </span>
                                    <span className="text-sm text-blueGray-400">Friends</span>
                                </div>
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        10
                                    </span>
                                    <span className="text-sm text-blueGray-400">Photos</span>
                                </div>
                                <div className="lg:mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        89
                                    </span>
                                    <span className="text-sm text-blueGray-400">Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Jenna Stones
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                            Los Angeles, California
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            Solution Manager - Creative Tim Officer
                        </div>
                        <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                            University of Computer Science
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                    An artist of considerable range, Jenna the name taken
                                    by Melbourne-raised, Brooklyn-based Nick Murphy
                                    writes, performs and records all of his own music,
                                    giving it a warm, intimate feel with a solid groove
                                    structure. An artist of considerable range.
                                </p>
                                <a href="javascript:void(0);" className="font-normal text-pink-500">
                                    Show more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile;
