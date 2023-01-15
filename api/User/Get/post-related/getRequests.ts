import instance from "../../../../axios/axios";

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
