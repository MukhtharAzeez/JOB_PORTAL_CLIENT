import React, { useState } from "react";
import AddPost from "./userFeeds/AddPost";
// import dynamic from "next/dynamic";
import Jobs from "./Jobs";
import Post from "./userFeeds/Post";

// const Post = dynamic(() => import("./Post"));

interface Props {
  mode: String;
}

function Feed({ mode }: Props) {
  const [jobs, setJobs] = useState(true);


  const changeToJobs = () => {
    setJobs(true);
  };

  const changeToFeeds = () => {
    setJobs(false);
  };

  return (
    <div className="mt-20">
      <label htmlFor="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-400 w-full text-center">
        <input id="Toggle3" type="checkbox" className="hidden peer" />
        <span className="px-4 py-2 rounded-l-md dark:bg-gray-800 peer-checked:dark:bg-gray-300 w-full" onClick={changeToJobs}>Jobs</span>
        <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-gray-800 w-full" onClick={changeToFeeds}>Feeds</span>
      </label>
      {!jobs ? (
        <>
          <AddPost />
          <Post mode={mode} />
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

export default Feed;
