import { allUsersIdStore } from "./../zustand/allUsersIdStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addAdminDetails, currentAdmin } from "../redux/admin/adminAuthSlicer";

const AdminProtectRoute = ({ children }: any) => {
  const dispatch = useDispatch();
  const setId = allUsersIdStore((state) => state.setId);
  const router = useRouter();
  const admin = useSelector(currentAdmin);

  useEffect(() => {
    const publicFu = () => {
      const adminToken = localStorage.getItem("adminToken");
      if (!adminToken) {
        router.push("/admin/login");
      }
      const email = localStorage.getItem("email");
      const adminId = localStorage.getItem("adminId");
      dispatch(
        addAdminDetails({
          result: { email, _id: adminId },
          accessToken: { access_token: adminToken },
        })
      );
      setId(adminId);
    };
    publicFu();
  }, [admin]);
  if (admin.adminToken != null) {
    return children;
  }
};

export default AdminProtectRoute;
