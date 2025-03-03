import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="comment-list wow fadeIn animated">
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img src={comment.authorAvatar} alt="" />
          </div>
          <div className="desc">
            <p className="comment">{comment.comment}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h5>
                  <a href="#">{comment.authorName}</a>
                </h5>
                <p className="date">{comment.createdDate} </p>
              </div>
              <div className="reply-btn">
                <a href="#" className="btn-reply">
                  Reply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
