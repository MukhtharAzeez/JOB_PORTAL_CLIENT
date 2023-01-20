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
      const userId = localStorage.getItem("userId");
      if (userId) {
        return router.push("/");
      }
      const firstName = localStorage.getItem("userName");
      const lastName = "";
      const email = localStorage.getItem("email");
      const userToken = localStorage.getItem("userToken");
      dispatch(
        addUserDetails({
          result: { firstName, lastName, _id: userId, email },
          accessToken: { access_token: userToken },
        })
      );
    };
    publicFu();
  }, [user]);

  if (user.userId == null) {
    return children;
  }
};

export default PublicRoute;
