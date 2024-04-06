import React from "react";

const Tags = () => {
  return (
    <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
      <div className="tags w-50 w-sm-100">
        <h5 className="mb-15">Tags: </h5>
        <a href="category.html" rel="tag" className="hover-up-3">
          deer
        </a>
        <a href="category.html" rel="tag" className="hover-up-3">
          nature
        </a>
        <a href="category.html" rel="tag" className="hover-up-3">
          conserve
        </a>
      </div>
      <div className="single-social-share clearfix wow fadeIn animated mb-15 w-50 w-sm-100">
        <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
          <li className="list-inline-item text-muted">
            <span>Share this: </span>
          </li>
          <li className="list-inline-item">
            <a
              className="social-icon fb text-xs-center"
              target="_blank"
              href="#"
            >
              <i className="elegant-icon social_facebook" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="social-icon tw text-xs-center"
              target="_blank"
              href="#"
            >
              <i className="elegant-icon social_twitter " />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="social-icon pt text-xs-center"
              target="_blank"
              href="#"
            >
              <i className="elegant-icon social_pinterest " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tags;
