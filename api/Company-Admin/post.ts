import instance from "../../axios/axios";

export const addAJobPost = async (formData: any) => {
  const result = await instance.post(`/companyAdmin/postJob`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};
