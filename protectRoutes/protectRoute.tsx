import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addUserDetails, currentUser } from "../redux/user/userAuthSlicer";
// import { useCookies } from 'react-cookie'

const UserProtectRouter = ({ children }: any) => {
  // const [cookie, setCookie, removeCookie] = useCookies(['jwt'])
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(currentUser);

  useEffect(() => {
    const publicFu = () => {
      dispatch(
        addUserDetails({
          result:{
            firstName: localStorage.getItem("userName"),
            lastName: "",
            email: localStorage.getItem("email"),
            _id: localStorage.getItem("userId"),
          },
          accessToken:{
            access_token: localStorage.getItem("userToken"),
          }
        })
      );
    };
    publicFu();
    if (user.userId !== null) {
    } else {
      router.push("/User/Login");
    }
  }, []);

  if (user.userId !== null) {
    return children;
  }
};

export default UserProtectRouter;
