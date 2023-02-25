import React, { useState } from "react";
import { Jobs } from "./Jobs";
import { AddPost } from "./userFeeds/AddPost";
import { Post } from "./userFeeds/Post";

interface Props {
  mode: String;
}

export function Feed({ mode }: Props) {
  const [jobs, setJobs] = useState(true);
  const changeToJobs = () => {
    setJobs(true);
  };
  const changeToFeeds = () => {
    setJobs(false);
  };
  return (
    <div className="mt-20 mx-2">
      <div className="inline-flex items-center p-2 rounded-md  dark:text-gray-400 text-center  min-w-[360px] md:min-w-[450px] w-full lg:max-w-[600px]">
        <span className={`cursor-pointer px-4 py-2 rounded-l-md ${jobs ? 'dark:bg-gray-800' : 'dark:bg-gray-300'} w-full`} onClick={changeToJobs}>Jobs</span>
        <span className={`cursor-pointer px-4 py-2 rounded-r-md ${!jobs ? 'dark:bg-gray-800' : 'dark:bg-gray-300'} w-full`} onClick={changeToFeeds}>Feeds</span>
      </div>
      {!jobs ? (
        <>  
          <div className="min-w-[360px] md:min-w-[450px] w-full lg:max-w-[600px]">
            <AddPost />
            <Post mode={mode} />
          </div>
        </>
      ) : (
        <>
          <Jobs mode={mode} />
        </>
      )}
      <div className="h-8 w-full bg-transparent"></div>
    </div>
  );
}