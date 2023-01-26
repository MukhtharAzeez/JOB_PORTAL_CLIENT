import instance from "../../axios/axios";

export const getCompanyAdminDetails = async (adminId: any) => {
  console.log("adminId ", adminId);

  const { data } = await instance.get(
    `/companyAdmin/profile?adminId=${adminId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const getAllCompanyPost = async (companyId: any) => {
  console.log("adminId ", companyId);

  const { data } = await instance.get(
    `/companyAdmin/getAllCompanyPosts?companyId=${companyId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};