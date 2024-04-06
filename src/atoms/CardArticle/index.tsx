import React from "react";

interface CardArticleProps {
  imageUrl: string;
  categoryUrl: string;
  categoryName: string;
  postedBy: string;
  title: string;
  authorName: string;
  authorAvarta: string;
  timeReading: string;
}

const CardArticle: React.FC<CardArticleProps> = ({
  imageUrl,
  categoryUrl,
  categoryName,
  postedBy,
  title,
  authorName,
  authorAvarta,
  timeReading,
}) => {
  return (
    <article className='col-md-6 mb-40 wow fadeIn animated'>
      <div className='post-card-1 border-radius-10 hover-up'>
        <div
          className='post-thumb thumb-overlay img-hover-slide position-relative'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <a className='img-link' href='single.html' />
          <div className='post-meta-1 mb-20'>
            <a
              href={categoryUrl}
              className='tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3'
            >
              {categoryName}
            </a>
          </div>
        </div>
        <div className='post-content p-30'>
          <div className='post-card-content'>
            <div className='entry-meta meta-1 float-left font-md mb-10'>
              <span className='post-on has-dot'>{postedBy}</span>
            </div>
            <h4 className='post-title mb-30'>
              <a href='single.html'>{title}</a>
            </h4>
            <div className='post-meta-2 font-md d-flext'>
              <a href='page-author.html' tabIndex={0}>
                <img src={authorAvarta} alt='' />
                <span className='author-namge'>{authorName}</span>
              </a>
              <span className='time-to-read has-dot'>{timeReading}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle;
