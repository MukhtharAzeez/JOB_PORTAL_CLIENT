import * as React from "react";
import PostSkeleton from "../../Common/skeleton/PostSkeleton";
import { getJobsPosts } from "../../../api/User/Get/post";
import CompanyPosts from "./CompanyPosts/CompanyPosts";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

interface Props {
  mode: String;
}

function Jobs({ mode }: Props) {
  const [jobsData, setJobsData] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [skipCount, setSkipCount] = useState(0)


  async function fetchData(){
    const data = await getJobsPosts(2, skipCount)
    setJobsData([...jobsData,...data])
    setSkipCount(skipCount+1) 
    console.log(data.length)
    if(data.length == 0) setHasMore(false)
  }

  async function fetcher(){
    fetchData()
  }

  useEffect(()=>{
    fetcher()
  })
  
  return (
    <InfiniteScroll 
      dataLength={jobsData.length}
      next={fetcher} hasMore={hasMore}
      loader={<PostSkeleton mode={mode} 
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
      />}>

      {jobsData.map(function (job: any) {
        return <CompanyPosts key={job._id} mode={mode} post={job} />;
      })}

    </InfiniteScroll>
  );
}

export default Jobs;
