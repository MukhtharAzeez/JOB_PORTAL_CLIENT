import * as React from "react";
import PostSkeleton from "../../Common/skeleton/PostSkeleton";
import useSWR from "swr";
import { getJobsPosts } from "../../../api/User/Get/post";
import CompanyPosts from "../../Company/CompanyPosts/CompanyPosts";

interface Props {
  mode: String;
}

const fetcher = async () => {
  const jobs = await getJobsPosts();
  return jobs;
};
interface props {
  data: any;
  error: any;
  isLoading: boolean;
}

function Jobs({ mode }: Props) {

  const { data, error, isLoading }: props = useSWR("jobs", fetcher);

  if (error) return <PostSkeleton mode={mode} />;
  if (isLoading) return <PostSkeleton mode={mode} />;

  if (data.length == 0) return <PostSkeleton mode={mode} />;

  
  return (
    <>
      {data.map(function (job: any) {
        return <CompanyPosts key={job._id} mode={mode} post={job} />;
      })}
    </>
  );
}

export default Jobs;
