import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../../../redux/user/userAuthSlicer";
import useSWR from "swr";
import Link from "next/link";
import SkeletonLoader from "../../Loader/SkeletonLoader";
import { getCurrentUserDetails } from "../../../api/User/Get/user";

function Profile() {
  const { userId } = useSelector(currentUser);

  const fetcher = async () => {
    const profile = await getCurrentUserDetails(userId);
    return profile;
  };
  const { data, error, isLoading } = useSWR("profile",fetcher);

 
  

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>

      <div className="relative flex flex-col min-w-0 min-h-[550px] break-words bg-white xs:w-full sm:w-[500px] md:w-[580px] lg:w-full mb-6 shadow-xl rounded-lg mt-36">
        <div className="px-6rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                {isLoading || error ? (
                  <svg
                    className="animate-pulse shadow-xl rounded-full h-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px text-gray-100 dark:text-gray-300"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <img
                    alt="..."
                      src={data.image ? data.image :'https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile-thumbnail.png'}
                    className="shadow-xl rounded-full h-40 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                )}
              </div>
            </div>
            <div className="w-full text-center mt-28 ml-6">
              <Link
                href={{ pathname: "/User/Profile/Edit"}}
                className="hover:underline cursor-pointer text-black font-bold"
              >
                Update Profile
              </Link>
            </div>
            <div className="w-full text-center">
              <div className="flex justify-center py-4 lg:pt-4 pt-8 pl-[48px]">
                <div className="mr-4 p-3 pr-8 text-center">
                  {isLoading || error ? (
                    <span className="h-10 animate-pulse bg-gray-100 block rounded-lg dark:bg-gray-200 w-10 ml-2"></span>
                  ) : (
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      44
                    </span>
                  )}
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  {isLoading || error ? (
                    <span className="h-10 animate-pulse bg-gray-100 block rounded-lg dark:bg-gray-200 w- ml-2"></span>
                  ) : (
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                  )}
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center pl-5">
                  {isLoading || error ? (
                    <span className="h-10 animate-pulse bg-gray-100 block rounded-lg dark:bg-gray-200 w-10 ml-2"></span>
                  ) : (
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                  )}
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          {isLoading || error ? (
            <SkeletonLoader />
          ) : (
            <>
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {data.firstName + " " + data.lastName}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                  {data.email}
                </div>
                  <div className='w-full justify-center flex'>
                    <div className="mb-2 text-blueGray-600 mt-10 w-96 flex gap-2 justify-center">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>

                      {
                        data.qualifications.map(function(obj:any , index:number){
                          return (
                            <div key={obj} >
                              <p className="mt-1 text-sm font-bold">  {obj} {index==data.qualifications.length-1 ? '': '|'}  </p>
                            </div>
                          )
                        })
                      }
                    </div>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <span className="mb-4 text-lg leading-relaxed text-blueGray-700 flex flex-wrap justify-center gap-2">
                        {
                          data.skills.map(function (obj: any, index: number) {
                            return (
                              <div key={obj} >
                                <p className="mt-1 text-sm font-bold">  {obj} {index == data.skills.length - 1 ? '' : '|'}</p>
                              </div>
                            )
                          })
                        }
                    </span>
                    <a className="font-normal text-pink-500">Show more</a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
