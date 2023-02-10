import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { currentCompanyAdmin } from '../../redux/company-admin/CompanyAdminAuthSlicer';
import { currentUser } from '../../redux/user/userAuthSlicer';
import CompanyAdmins from './CompanyAdmins';
import Friends from './Friends';

function FriendsList({ setChat, onlineUsers }: any) {
    const [id, setId] = useState(null)
    const [type, setType] = useState(null)
    const { userId } = useSelector(currentUser)
    const { companyAdminId } = useSelector(currentCompanyAdmin)
    useEffect(() => {
        if (userId) {
            setId(userId)
            setType('user')
        } else {
            setId(companyAdminId)
            setType('companyAdmin')
        }
    }, [])
    return (
        id && type == 'user' ? (
            <>
                <Friends setChat={setChat} onlineUsers={onlineUsers} id={id} type={type} />
                <CompanyAdmins setChat={setChat} onlineUsers={onlineUsers} id={id} type={type} />
            </>
        ) : id ? (
            <>
                <CompanyAdmins setChat={setChat} onlineUsers={onlineUsers} id={id} type={type} />
                {/* <Friends setChat={setChat} onlineUsers={onlineUsers} id={id} type={type} /> */}
            </>
        ) : (
            <></>
        )
    )
}

export default FriendsList
