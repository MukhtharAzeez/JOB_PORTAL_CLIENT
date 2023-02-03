import React from 'react'
import useSWR from "swr";
import Requests from '../../../components/Common/Requests/Requests';
import { useSelector } from 'react-redux';
import { currentCompany } from '../../../redux/company/companyAuthSlicer';
import { getAllRequests } from '../../../api/Company/get';

function EachRequests() {
    const { companyId } = useSelector(currentCompany)
    const fetcher = async () => {
        const allCompanyRequests = await getAllRequests(companyId);
        console.log(allCompanyRequests)
        return allCompanyRequests;
    };
    const { data, error, isLoading } = useSWR("allCompanyRequests", fetcher);
    if (error) return <div>Error....</div>
    if (isLoading) return <div>Loading....</div>

    return (
        <>
            {
                data.map(function (request: any) {
                    return (
                        <Requests key={request._id} request={request} />
                    )
                })
            }
        </>
    )
}

export default EachRequests
