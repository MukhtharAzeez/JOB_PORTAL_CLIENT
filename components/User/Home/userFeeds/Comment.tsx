import { CardContent } from "@mui/material";
import React from "react";
import UserComment from "./UserComment";

function Comment({ comments }: any) {
  return (
    <CardContent>
      <div className="antialiased mx-auto max-w-screen-sm max-h-96 overflow-scroll">
        <h3 className="mb-4 text-lg font-semibold text-white-900">
          {comments.length} Comments....
        </h3>
        <div className="space-y-4">
          {comments.map(function (comment: any) {
            return <UserComment key={comment} comment={comment} />;
          })}
        </div>
      </div>
    </CardContent>
  );
}

export default Comment;
