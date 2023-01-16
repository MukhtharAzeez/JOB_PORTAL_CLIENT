// import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { currentUser } from "../redux/user/userAuthSlicer";
import { useEffect } from "react";

const UserProtectRouter = ({ children }:any) => {
    // const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(currentUser);
    useEffect(() => {
        if(user.email.length==0){
            router.push('/User/Login')
        }
    }, []);
    if(user.email.length>0){
        return children;
    }
};

export default UserProtectRouter;