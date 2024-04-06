import React from "react";

const Post = () => {
  return (
    <li>
      <div className="d-flex latest-small-thumb">
        <div className="post-thumb d-flex mr-15 border-radius-10 img-hover-scale overflow-hidden">
          <a className="color-white" href="single.html" tabIndex={0}>
            <img src="assets/imgs/news/thumb-11.jpg" alt="" />
          </a>
        </div>
        <div className="post-content media-body align-self-center">
          <h5 className="post-title mb-15 text-limit-3-row font-medium">
            <a href="single.html" tabIndex={0}>
              9 Things I Love About Shaving My Head During Quarantine
            </a>
          </h5>
          <div className="entry-meta meta-1 float-left font-sm">
            <span className="post-on has-dot">September 15, 2021</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Post;
