import React from "react";
import Comment from "./atoms/Comment";

const CommentList = () => {
  return (
    <div className="comments-area wow fadeIn animated">
      <div className="widget-header-2 position-relative mb-30">
        <h3 className="mt-5 mb-30 font-heading">Comments</h3>
      </div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentList;
