import React from "react";

const Comment = () => {
  return (
    <div className="comment-list wow fadeIn animated">
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img src="assets/imgs/authors/author-4.jpg" alt="" />
          </div>
          <div className="desc">
            <p className="comment">
              Vestibulum euismod, leo eget varius gravida, eros enim interdum
              urna, non rutrum enim ante quis metus. Duis porta ornare nulla ut
              bibendum
            </p>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h5>
                  <a href="#">Rosie</a>
                </h5>
                <p className="date">6 minutes ago </p>
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
