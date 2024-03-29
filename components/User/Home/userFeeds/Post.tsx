import * as React from "react";
import { getAllUsersPost } from "../../../../api/User/Get/post";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { PostSkeleton } from "../../../Common/skeleton/PostSkeleton";
import { AllUsersPost } from "./AllUsersPost";
import { AuthorizationContext } from "../../../../contexts/AuthorizationContext";

interface Props {
  mode: String;
}

export function Post({ mode }: Props) {
  const { alertToLogin } = React.useContext(AuthorizationContext);
  const [postsData, setPostsData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  async function fetchData() {
    try {
      const data = await getAllUsersPost(5, skipCount);
      setPostsData([...postsData, ...data]);
      setSkipCount(skipCount + 1);
      if (data.length == 0) setHasMore(false);
    } catch (err: any) {
      if (err?.response?.data?.statusCode === 401) {
        alertToLogin()
        return
      }
    }
  }

  async function fetcher() {
    fetchData();
  }

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <InfiniteScroll
      dataLength={postsData.length}
      next={fetcher}
      hasMore={hasMore}
      endMessage={
        <div className="mt-2 min-w-[360px] md:min-w-[450px] w-full lg:max-w-[600px]  flex justify-center">
          <div className="flex w-11/12  justify-around  items-center rounded-lg shadow-lg mb-4 bg-indigo-500 p-4 text-white">
            <div className="">
              <h4 className="mb-2 font-bold">Congrats 🍿</h4>
              <p>You all are Cached up </p>
            </div>
            <div className="w-12 flex justify-center">
              <div className="text-2xl bg-indigo-600 rounded-full p-3">
                <BeenhereIcon />
              </div>
            </div>
          </div>
        </div>
      }
      loader={<PostSkeleton mode={mode} />}
    >
      {postsData.map(function (post: any) {
        return <AllUsersPost key={post._id} mode={mode} post={post} />;
      })}
    </InfiniteScroll>
  );
}

