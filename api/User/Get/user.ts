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

export const getUserChat = async (userId: string) => {
  const { data } = await instance.get(`/chat/user/${userId}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data;
};


export const getMessages = async (chatId: string) => {
  const { data } = await instance.get(`/chat/getMessages?chatId=${chatId}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data;
};

export const sendMessageToReceiver = async (
  senderId: string,
  chatId: string,
  text: string
) => {
  const { data } = await instance.post(
    `/chat/sendMessage`,
    { senderId, chatId, text },
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const getUserNotifications = async (userId: string) => {
  const { data } = await instance.get(
    `/user/getUserNotifications?userId=${userId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const userAcceptSchedule = async (requestId: any) => {
  const { data } = await instance.get(
    `/user/userAcceptSchedule?requestId=${requestId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const userRejectSchedule = async (requestId: any) => {
  const { data } = await instance.get(
    `/user/userRejectSchedule?requestId=${requestId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};

export const userRequestToChangeTime = async (requestId: any) => {
  const { data } = await instance.get(
    `/user/userRequestToChangeTime?requestId=${requestId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};