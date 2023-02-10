import React from 'react'
import CompanyAdmins from './CompanyAdmins';
import Friends from './Friends';

function FriendsList({ setChat, onlineUsers ,id, type}: any) {

    return (
        <>
            <Friends setChat={setChat} onlineUsers={onlineUsers} id={id}/>
            <CompanyAdmins setChat={setChat} onlineUsers={onlineUsers} id={id}/>
        </>
    )
}

export default FriendsList
