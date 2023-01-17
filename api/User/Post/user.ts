import instance from "../../../axios/axios";

export const updateUserProfile = async (formData: any) => {
  const result = await instance.post(`/user/updateProfile`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};
