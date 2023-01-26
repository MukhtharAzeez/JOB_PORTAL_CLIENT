import instance from "../../../axios/axios";

export const getAllUsersPost = async () => {
  const { data } = await instance.get("/userPost/getPosts", {
    withCredentials: true,
    // headers: {
    //   Authorization: "Bearer " + localStorage.getItem("token"),
    // },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const getJobsPosts = async () => {
  const { data } = await instance.get("/company/getJobPosts", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};


export const applyForJob = async (jobId:string, userId:string) => {
  const { data } = await instance.get(`/user/applyForJob?jobId=${jobId}&userId=${userId}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};