import ArticleBannerDetail from "@/components/ArticleBannerDetail";
import ArticleContentDetail from "@/components/ArticleContentDetail";
import React from "react";

const ArticleDetailView = () => {
  return (
    <main>
      {/* <div
        className="entry-header entry-header-style-2 pb-80 pt-80 mb-50 text-white"
        style={{ backgroundImage: "url(assets/imgs/news/news-20.jpg)" }}
      >
        <div className="entry-header-content">
          <div className="post-meta-1 mb-20">
            <a
              href="category.html"
              className="tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3"
              tabIndex={0}
            >
              Lifestyle
            </a>
            <span className="post-date  text-white font-md">
              September 15, 2021
            </span>
          </div>
          <h1 className="entry-title mb-50 fw-700">
            30 Best Lifestyle Blogs to Follow in 2021
          </h1>
          <div className="post-meta-2 font-md d-flext align-self-center mb-md-30">
            <a href="page-author.html" tabIndex={0}>
              <img src="assets/imgs/authors/author.jpg" alt="" />
              <span className="author-namge">Kate Adie</span>
            </a>
            <span className="time-to-read has-dot text-white">
              6 mins to read
            </span>
          </div>
        </div>
      </div> */}
      <ArticleBannerDetail />
      <div className="container single-content">
        <article className="entry-wraper mb-50">
          <ArticleContentDetail />
        </article>
      </div>
    </main>
  );
};

export default ArticleDetailView;
