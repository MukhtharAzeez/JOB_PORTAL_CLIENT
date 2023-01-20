import instance from "../../axios/axios";

export const getAllCompanyAdmins = async () => {
  const result = await instance.get(`/company/getAllCompanyAdmins`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};