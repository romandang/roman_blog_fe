import React from "react";
import Comment from "./atoms/Comment";
import FormComment from "../Form/FormComment";

const CommentList = ({ comments }) => {
  return (
    <div className="comments-area wow fadeIn animated">
      <div className="widget-header-2 position-relative mb-30">
        <h3 className="mt-5 mb-30 font-heading">Comments</h3>
      </div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
