import instance from "../../../axios/axios";

export const getCurrentUserDetails = async (userId:string) => {
    console.log(userId)
  const { data } = await instance.get(`/user/profile?userId=${userId}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
