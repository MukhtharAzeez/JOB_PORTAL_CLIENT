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
