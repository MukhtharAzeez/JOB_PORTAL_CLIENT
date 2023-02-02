import instance from "../../axios/axios";

export const getAllCompanyAdmins = async (companyId:any) => {
  const result = await instance.get(`/company/getAllCompanyAdmins?companyId=${companyId}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};

export const getCompanyDetails = async (companyId:any) => {
  const result = await instance.get(`/admin/getCompanyDetails?companyId=${companyId}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.data;
};