import React from "react";

const ArticleBanner = () => {
  return (
    <div className="row">
      <article className="col-md-12 first-article text-center mb-30">
        <div className="post-content">
          <div className="post-meta-1 mb-20">
            <a
              href="category.html"
              className="tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3"
              tabIndex={0}
            >
              Lifestyle
            </a>
            <span className="post-date text-muted font-md">
              September 15, 2021
            </span>
          </div>
          <h1 className="post-title mb-30 fw-700">
            <a href="single.html" tabIndex={0}>
              30 Best Lifestyle Blogs to Follow in 2021
            </a>
          </h1>
          <div className="post-excerpt text-grey-400 mb-30">
            Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices
            purus dolor erat bibendum sapien metus.
          </div>
        </div>
        <figure className="border-radius-10 hover-up-3">
          <a href="single.html">
            <img
              src="https://picsum.photos/1110/463"
              alt=""
              className="border-radius-10"
            />
          </a>
        </figure>
      </article>
    </div>
  );
};

export default ArticleBanner;
