import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { getRandomUser } from "../../../api/Company-Admin/get";
import { getARandomCompany } from "../../../api/User/Get/user";
import companyDefaultLogo from '../../../public/image/companyDefaultLogo.jpg'
import { currentCompanyAdmin } from "../../../redux/company-admin/CompanyAdminAuthSlicer";
import { currentUser } from "../../../redux/user/userAuthSlicer";
import Loader from "../skeleton/Loader";
import EmptyData from '../../../public/image/EmptyData.webp'
import Error from '../../../public/image/Error.webp'


export function RightBar() {
  const router = useRouter();
  const { userId } = useSelector(currentUser)
  const { companyAdminId } = useSelector(currentCompanyAdmin)
  const fetcher = async () => {
    if (userId) {
      const getRandomCompany = await getARandomCompany()
      return getRandomCompany;
    }
    if (companyAdminId) {
      const getRandomCompany = await getRandomUser()
      return getRandomCompany;
    }
  };
  const { data, error, isLoading } = useSWR("getRandomCompany", fetcher);
  if (error) return <div className="hidden lg:block min-w-[340px] max-w-[340px] my-1"><Image alt="" src={Error} className="rounded-md" /></div>
  if (isLoading) return <div className="hidden lg:block"><Loader /></div>
  return (
    <>
      {
        data.map(function (each: any) {
          return (
            <div key={each._id} className="hidden lg:block min-w-[340px] max-w-[340px] my-2">
              <div className="bg-white shadow-2xl rounded-lg w-full mx-auto max-h-[680px]  scrollbar-hide py-1">
                <div className="flex justify-center">
                  <Image
                    src={each?.image ? each?.image : companyDefaultLogo}
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-full mx-auto absolute  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                  />
                </div>
                <div className="mt-32">
                  <h1 className="font-bold text-center text-3xl text-gray-900">
                    {userId ? each?.company : each?.firstName + " " + each?.lastName}
                  </h1>
                  <p className="text-center text-sm text-gray-400 font-medium">
                    {userId ? each?.establishedOn : each?.email}
                  </p>
                  <p>
                    <span></span>
                  </p>
                  <div className="my-5 px-6">
                    <div
                      className="cursor-pointer text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                    >
                      {
                        userId ? (
                          <div 
                      onClick={() => router.push({
                        pathname: `/company-admin/user/${each?._id}`,
                      },
                      )}>See All <span className="font-bold">Jobs Posted</span> by {each?.company}</div>
                        ) : (
                          <div>Go to <span className="font-bold">{each?.firstName + " " + each?.lastName}</span> Profile </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      {
        data.length == 0 &&
        (<div className="fixed hidden lg:block min-w-[340px] max-w-[340px] my-2 mt-24">
          <Image alt="" src={EmptyData} className="rounded-md" />
        </div>
        )
      }
    </>
  );
}
