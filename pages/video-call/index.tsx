import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MobileBottom from '../../components/Common/companyAdmin-user/MobileBottom/MobileBottom';
import VideoPlayer from '../../components/Video/VideoPlayer'
import { ContextProvider } from '../../contexts/videoSocketContext'
import { addCompanyAdminDetails } from '../../redux/company-admin/CompanyAdminAuthSlicer';
import { addUserDetails } from '../../redux/user/userAuthSlicer';


const index = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    useEffect(() => {
        const publicFu = () => {
            const userToken = localStorage.getItem("userToken");
            const companyAdminToken = localStorage.getItem("companyAdminToken");
            if (!companyAdminToken && !userToken) {
                router.push("/user/login");
            }
            if (companyAdminToken){
                const email = localStorage.getItem("email");
                const companyId = localStorage.getItem("companyId");
                const companyAdminId = localStorage.getItem("companyAdminId");
                dispatch(
                    addCompanyAdminDetails({
                        result: { email, _id: companyAdminId, company: companyId },
                        accessToken: { access_token: companyAdminToken },
                    })
                );
            }
            else if (userToken){
                const firstName = localStorage.getItem("userName");
                const lastName = ''
                const email = localStorage.getItem("email")
                const image = localStorage.getItem("image");
                const userId = localStorage.getItem("userId")
                dispatch(addUserDetails({ result: { firstName, lastName, _id: userId, email, image }, accessToken: { access_token: userToken } }));
            }
        };
        publicFu();
    }, []);
    return (
        <ContextProvider>
            <div className=" bg-black">
                <VideoPlayer />
            </div>
            <div className="sm:hidden">
                <MobileBottom />
            </div>
        </ContextProvider>
    )
}

export default index
