import instance from "../../../axios/axios";

export const getCurrentUserDetails = async (userId: string) => {  
  const { data } = await instance.get(
    `/user/profile?userId=${userId}`,
    {
      withCredentials: true,
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};
