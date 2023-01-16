import instance from "../../../../axios/axios";

export const addPostToServer = async (formData: any) => {
  const { data } = await instance.post("/userPost/addPost", formData, {
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

export const postLike = async (postId: string, userId: string) => {
  const result = await instance.get(
    `/userPost/like?postId=${postId}&userId=${userId}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result;
};

export const postComment = async (
  postId: string,
  userId: string,
  comment: string
) => {
  await instance.post(
    `/userPost/comment`,
    { postId, userId, comment },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const getPostComment = async (postId: string) => {
  const comments = await instance.get(
    `/userPost/getComments?postId=${postId}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return comments;
};

export const likeComment = async (commentId:string, userId:string)=>{
  const result = await instance.get(
    `/userPost/likeAComment?commentId=${commentId}&userId=${userId}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result
}
