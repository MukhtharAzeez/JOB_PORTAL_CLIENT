import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { useRouter } from "next/router";
import { currentUser } from "../redux/user/userAuthSlicer";
import { currentCompany } from "../redux/company/companyAuthSlicer";
import { currentCompanyAdmin } from "../redux/company-admin/CompanyAdminAuthSlicer";

const PublicRoute = ({ children }: any) => {
  const router = useRouter();

  const user = useSelector(currentUser);
  const company = useSelector(currentCompany);
  const companyAdmin = useSelector(currentCompanyAdmin);

  useEffect(() => {
    const publicFu = () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        return router.push("/");
      }
      return null
    };
    publicFu();
  }, [user]);

  useEffect(() => {
    const publicFu = () => {
      const companyToken = localStorage.getItem("companyToken");
      if (companyToken) {
        return router.push("/company");
      }
      return null;
    };
    publicFu();
  }, [company]);

  useEffect(() => {
    const publicFu = () => {
      const companyAdminToken = localStorage.getItem("companyAdminToken");
      if (companyAdminToken) {
        return router.push("/company-admin");
      }
      return null;
    };
    publicFu();
  }, [companyAdmin]);

  if (user.userId == null) {
    return children;
  }
};

export default PublicRoute;
