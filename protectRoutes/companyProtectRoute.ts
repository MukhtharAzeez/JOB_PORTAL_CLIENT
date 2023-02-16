import { allUsersIdStore } from './../zustand/allUsersIdStore';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  addCompanyDetails,
  currentCompany,
} from "../redux/company/companyAuthSlicer";

const CompanyProtectRoute = ({ children }: any) => {
  const dispatch = useDispatch();
  const setId = allUsersIdStore((state) => state.setId);
  const router = useRouter();
  const company = useSelector(currentCompany);

  useEffect(() => {
    const publicFu = () => {
      const companyToken = localStorage.getItem("companyToken");
      if (!companyToken) {
        router.push("/company/login");
      }
      const email = localStorage.getItem("email");
      const companyId = localStorage.getItem("companyId");
      dispatch(
        addCompanyDetails({
          result: { email, _id: companyId },
          accessToken: { access_token: companyToken },
        })
      );
      setId(companyId)
    };
    publicFu();
  }, [company]);
  if (company.companyId != null) {
    return children;
  }
};

export default CompanyProtectRoute;
