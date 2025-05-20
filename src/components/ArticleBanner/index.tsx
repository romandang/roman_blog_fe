import React from "react";
import Link from "next/link";

interface ArticleBannerProps {
  data: {
    imageUrl: string;
    pathAlias: string;
    title: string;
    datePublished: string;
    categoryName: string;
    categoryUrl: string;
    description: string;
  };
}

const ArticleBanner = ({ data }: ArticleBannerProps) => {
  const { imageUrl, pathAlias, title, datePublished, categoryName, categoryUrl, description } = data;

  return (
    <div className="row">
      <article className="col-md-12 first-article text-center mb-30">
        <div className="post-content">
          <div className="post-meta-1 mb-20">
            <Link
              href={`/category/${categoryUrl}`}
              className="tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3"
              tabIndex={0}
            >
              {categoryName}
            </Link>
            <span className="post-date text-muted font-md">
              {datePublished}
            </span>
          </div>
          <h1 className="post-title mb-30 fw-700">
            <Link href={`/article/${pathAlias}`} tabIndex={0}>
              {title}
            </Link>
          </h1>
          <div className="post-excerpt text-grey-400 mb-30">
            {description}
          </div>
        </div>
        <figure className="border-radius-10 hover-up-3">
          <Link href={`/article/${pathAlias}`}>
            <img
              src={imageUrl}
              alt={title}
              className="border-radius-10"
            />
          </Link>
        </figure>
      </article>
    </div>
  );
};

export default ArticleBanner;
