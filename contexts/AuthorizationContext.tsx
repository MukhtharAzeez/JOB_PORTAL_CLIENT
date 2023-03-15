import { createContext } from "react";
import swal from 'sweetalert';
import {useRouter} from 'next/router'
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/userAuthSlicer";
import { logoutCompanyAdmin } from "../redux/company-admin/CompanyAdminAuthSlicer";
import { logoutCompany } from "../redux/company/companyAuthSlicer";
import { logoutAdmin } from "../redux/admin/adminAuthSlicer";

const AuthorizationContext = createContext(null);


const AuthorizationContextProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const alertToLogin = () =>{
    swal({
        title: "Token Expired !",
        text: "Please Login again in to your Account",
        icon: "error",
        dangerMode: true,
    })
    .then(willLogin => {
        if (willLogin) {
          handleLogout()
        }
    });
  }

  function handleLogout(){
        localStorage.clear();
        dispatch(logoutUser())
        dispatch(logoutCompanyAdmin())
        dispatch(logoutCompany())
        dispatch(logoutAdmin())
        router.push('/')
    }

  return (
    <AuthorizationContext.Provider value={{ alertToLogin }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export { AuthorizationContextProvider, AuthorizationContext };