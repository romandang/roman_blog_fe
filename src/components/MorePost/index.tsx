import React from "react";
import Post from "./atoms/Post";

const MorePost = () => {
  return (
    <div className="single-more-articles border-radius-10">
      <div className="widget-header-2 position-relative mb-30">
        <h5 className="mb-30 font-heading">Related posts</h5>
        <button className="single-more-articles-close">
          <i className="elegant-icon icon_close" />
        </button>
      </div>
      <div className="post-block-list post-module-1">
        <ul className="list-post">
          <Post />
          <Post />
        </ul>
      </div>
    </div>
  );
};

export default MorePost;
