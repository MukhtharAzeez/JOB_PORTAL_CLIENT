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
export const editAPost = async (formData: any) => {
  const result = await instance.post(`/companyAdmin/editAJob`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};
