import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addUserDetails, currentUser } from "../redux/user/userAuthSlicer";

const PublicRoute = ({ children }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(currentUser);
  useEffect(() => {
    const publicFu = () => {
      dispatch(
        addUserDetails({
          result: {
            firstName: localStorage.getItem("userName"),
            lastName: "",
            email: localStorage.getItem("email"),
            _id: localStorage.getItem("userId"),
          },
          accessToken: {
            access_token: localStorage.getItem("userToken"),
          }
        })
      );
    };

    publicFu();
    if (user.userId) {
      router.push("/");
    }
  }, [user]);
  if (user.userId == null) {
    return children;
  }
};

export default PublicRoute;
