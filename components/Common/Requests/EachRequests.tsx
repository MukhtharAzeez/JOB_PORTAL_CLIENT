import React from 'react'
import useSWR from "swr";
import Requests from '../../../components/Common/Requests/Requests';
import { getAllRequests } from '../../../api/Company/get';
import { getCompanyAdminRequests } from '../../../api/Company-Admin/get';
import { getUserNotifications } from '../../../api/User/Get/user';

function EachRequests({ type , id}: any) {
    const fetcher = async () => {
        if (type == 'company' ) {
            const allCompanyRequests = await getAllRequests(id);
            return allCompanyRequests;
        }else if(type == 'companyAdmin'){
            const allCompanyRequests = await getCompanyAdminRequests(id)
            return allCompanyRequests
        } else if (type == 'user') {
            const allCompanyRequests = await getUserNotifications(id)
            return allCompanyRequests
        }
    };
    const { data, error, isLoading } = useSWR("allCompanyRequests", fetcher);
    if (error) return <div>Error....</div>
    if (isLoading) return <div>Loading....</div>
    return (
        <>
            {
                data.map(function (request: any) {
                    return (
                        <Requests key={request._id} request={request} type={type}/>
                    )
                })
            }
        </>
    )
}
export default EachRequests
