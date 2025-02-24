import React from "react";

const ArticleBannerDetail = ({
  imageUrl,
  categoryName,
  categoryUrl,
  datePublished,
  title,
  authorName,
  timeReading,
  authorUrl,
  authorAvarta,
}) => {
  return (
    <div
      className="entry-header entry-header-style-2 pb-80 pt-80 mb-50 text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="entry-header-content">
        <div className="post-meta-1 mb-20">
          <a
            href={categoryUrl}
            className="tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3"
            tabIndex={0}
          >
            {categoryName}
          </a>
          <span className="post-date  text-white font-md">{datePublished}</span>
        </div>
        <h1 className="entry-title mb-50 fw-700">{title}</h1>
        <div className="post-meta-2 font-md d-flext align-self-center mb-md-30">
          <a href={authorUrl} tabIndex={0}>
            <img src={authorAvarta} alt="" />
            <span className="author-namge">{authorName}</span>
          </a>
          <span className="time-to-read has-dot text-white">{timeReading}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleBannerDetail;
