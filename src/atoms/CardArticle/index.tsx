import React from "react";
import Link from "next/link";

interface CardArticleProps {
  imageUrl: string;
  categoryUrl: string;
  categoryName: string;
  createdDate: string;
  title: string;
  timeReading: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
    url: string;
  };
}

const CardArticle: React.FC<CardArticleProps> = ({
  imageUrl,
  categoryUrl,
  categoryName,
  createdDate,
  title,
  author,
  timeReading,
  slug,
}) => {
  return (
    <article className="col-md-6 mb-40 wow fadeIn animated">
      <div className="post-card-1 border-radius-10 hover-up">
        <div
          className="post-thumb thumb-overlay img-hover-slide position-relative"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <Link className="img-link" href={`/article/${slug}`} />
          <div className="post-meta-1 mb-20">
            <Link
              href={categoryUrl}
              className="tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3"
            >
              {categoryName}
            </Link>
          </div>
        </div>
        <div className="post-content p-30">
          <div className="post-card-content">
            <div className="entry-meta meta-1 float-left font-md mb-10">
              <span className="post-on has-dot">{createdDate}</span>
            </div>
            <h4 className="post-title mb-30">
              <Link href={`/article/${slug}`}>{title}</Link>
            </h4>
            <div className="post-meta-2 font-md d-flext">
              <Link href={author.url || "#"} tabIndex={0}>
                <img src={author.avatar} alt={author.name} />
                <span className="author-namge">{author.name}</span>
              </Link>
              <span className="time-to-read has-dot">{timeReading}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle;
