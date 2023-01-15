import React, { useState } from "react";
import AddPost from "./AddPost";
// import dynamic from "next/dynamic";
import { Box, Chip } from "@mui/material";
import Jobs from "./Jobs";
import Post from "./Post";

// const Post = dynamic(() => import("./Post"));

interface Props {
  mode: String;
}

function Feed({ mode }: Props) {
  const [jobs, setJobs] = useState(true);
  // const[feedsVariant , setFeedsVariant] = useState<string>('filled')
  // const [jobsVariant, setJobsVariant] = useState<string>('contained')

  const changeToJobs = () => {
    setJobs(true);
  };

  const changeToFeeds = () => {
    setJobs(false);
  };

  return (
    <div>
      <Box
        width={"100%"}
        m={1}
        pr={0}
        gap={1}
        sx={{ marginLeft: { sm: 8, md: 1 }, minWidth: { sm: 400 } }}
      >
        {jobs ? (
          <Chip
            label="Jobs"
            variant="filled"
            sx={{ width: "48%", borderRadius: "5%", marginRight: 1 }}
            size="small"
            onClick={changeToJobs}
          />
        ) : (
          <Chip
            label="Jobs"
            variant="outlined"
            sx={{ width: "48%", borderRadius: "5%", marginRight: 1 }}
            size="small"
            onClick={changeToJobs}
          />
        )}
        {jobs ? (
          <Chip
            label="Feeds"
            variant="outlined"
            sx={{
              width: { xs: "46%", sm: "42%", md: "48%" },
              borderRadius: "5%",
            }}
            size="small"
            onClick={changeToFeeds}
          />
        ) : (
          <Chip
            label="Feeds"
            variant="filled"
            sx={{
              width: { xs: "46%", sm: "42%", md: "48%" },
              borderRadius: "5%",
            }}
            size="small"
            onClick={changeToFeeds}
          />
        )}
      </Box>
      {!jobs ? (
        <>
          <AddPost />
          <Post mode={mode} />
        </>
      ) : (
        <>
          <Jobs mode={mode} />
          <Jobs mode={mode} />
          <Jobs mode={mode} />
          <Jobs mode={mode} />
        </>
      )}
    </div>
  );
}

export default Feed;
