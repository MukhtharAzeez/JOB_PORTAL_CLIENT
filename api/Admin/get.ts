import instance from "../../axios/axios";

export const getAllCompanies = async () => {
  const result = await instance.get(`/admin/getAllCompanies`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};


export const approveCompany = async (companyId:string) => {
  const result = await instance.get(
    `/admin/approveCompany?companyId=${companyId}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result;
};

