import * as React from "react";
import useSWR from "swr";
import AllUsersPost from "./AllUsersPost";
import { getAllUsersPost } from "../../../../api/User/Get/post";
import PostSkeleton from "../../../Common/skeleton/PostSkeleton";

interface Props {
  mode: String;
}

const fetcher = async () => {
  const posts = await getAllUsersPost();
  return posts;
};
interface props {
  data: any;
  error: any;
  isLoading: boolean;
}

export default function Post({ mode }: Props) {
  const { data, error, isLoading }: props = useSWR("posts", fetcher);

  if (error) return <PostSkeleton mode={mode} />;
  if (isLoading) return <PostSkeleton mode={mode} />;

  if (data.length == 0) return <PostSkeleton mode={mode} />;

  return (
    <>
      {data.map(function (post: any) {
        return <AllUsersPost key={post._id} mode={mode} post={post} />;
      })}
    </>
  );
}

