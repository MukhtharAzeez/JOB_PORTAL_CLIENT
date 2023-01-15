import { CardContent, Checkbox } from "@mui/material";
import React, { useState } from "react";
import moment from "moment";
import CommentReplies from "./CommentReplies";
import IconButton from "@mui/material/IconButton";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Comment({ comments }: any) {
  const [replies, setReplies] = useState(false);

  return (
    <CardContent>
      <div className="antialiased mx-auto max-w-screen-sm">
        <h3 className="mb-4 text-lg font-semibold text-white-900">
          {comments.length} Comments....
        </h3>
        <div className="space-y-4">
          {comments.map(function (comment: any) {
            return (
              <div key={comment._id}>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                      src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>
                      {comment.userId.firstName + " " + comment.userId.lastName}
                    </strong>{" "}
                    <span className="text-xs text-gray-400">
                      {moment(comment.createdAt).fromNow()}
                      <IconButton
                        aria-label="add to favorites"
                        className="hover:bg-transparent"
                        disableRipple
                        size="small"
                      >
                        <Checkbox
                          checkedIcon={<ThumbUpIcon />}
                          icon={<ThumbUpOutlinedIcon />}
                        />
                        <p className="text-sm">5</p>
                      </IconButton>
                    </span>
                    <p className="text-s">{comment.comment}</p>
                    <div className="mt-4 flex items-center">
                      <div
                        className="text-sm text-gray-500 font-semibold cursor-pointer"
                        onClick={() => setReplies(!replies)}
                      >
                        5 Likes
                      </div>
                      <div
                        className="text-sm text-gray-500  pl-5 font-semibold cursor-pointer"
                        onClick={() => setReplies(!replies)}
                      >
                        5 Replies
                      </div>
                    </div>
                    {replies && <CommentReplies />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CardContent>
  );
}

export default Comment;
