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

export const sendFriendRequest = async (userId: string,friendId:string) => {
  const { data } = await instance.get(
    `/user/sendFriendRequest?userId=${userId}&friendId=${friendId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const getFriendsList = async (userId: string) => {
  const { data } = await instance.get(`/user/userFriends?userId=${userId}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data;
};