import { allUsersIdStore } from './../zustand/allUsersIdStore';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addUserDetails, currentUser } from "../redux/user/userAuthSlicer";

const UserProtectRouter = ({ children }:any) => {
  const dispatch = useDispatch();
  const setId = allUsersIdStore((state)=>state.setId)
  const router = useRouter();
  const user = useSelector(currentUser);

  useEffect(() => {
    const publicFu = () => {
        const userToken = localStorage.getItem("userToken");
        if (!userToken) {
          router.push("/user/login");
        }
        const firstName = localStorage.getItem("userName");
        const lastName = ''
        const email = localStorage.getItem("email")
        const image = localStorage.getItem("image");
        const userId = localStorage.getItem("userId")
        dispatch(addUserDetails({ result: { firstName , lastName,_id:userId, email,image}, accessToken: {access_token:userToken} }));
        setId(userId)
    };
    
    
    publicFu();
  },[user]);

  if (user.userId !=null) {
    return children;
  }
};

export default UserProtectRouter;
