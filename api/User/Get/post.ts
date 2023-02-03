import instance from "../../../axios/axios";

export const getAllUsersPost = async () => {
  const { data } = await instance.get("/userPost/getPosts", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data;
};

export const getJobsPosts = async (limit:number,skip:number) => {
  const { data } = await instance.get(`/company/getJobPosts?limit=${limit}&skip=${skip}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data;
};


export const applyForJob = async (jobId:string, userId:string) => {
  const { data } = await instance.get(
    `/jobApplicant/applyForJob?jobId=${jobId}&userId=${userId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return data;
};