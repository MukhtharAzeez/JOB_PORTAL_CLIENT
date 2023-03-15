import instance from "../../axios/axios";

export const getAllCompanies = async (skip: number, limit: number) => {
  const result = await instance.get(`/admin/getAllCompanies?limit=${limit}&skip=${skip}`,{
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    });
  return result;
};

export const getCountCompanies = async () => {
  const result = await instance.get(`/admin/getCountCompanies`,  {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    });
  return result;
};

export const approveCompany = async (companyId: string) => {
  const result = await instance.patch(
    `/admin/approveCompany?companyId=${companyId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return result;
};
