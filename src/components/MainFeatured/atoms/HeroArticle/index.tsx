import React from "react";

interface HeroArticleProps {
  imageUrl: string;
  categoryName: string;
  categoryUrl: string;
  datePublic: string;
  title: string;
}

const HeroArticle: React.FC<HeroArticleProps> = ({
  imageUrl,
  categoryName,
  categoryUrl,
  datePublic,
  title,
}) => {
  return (
    <div className='position-relative post-thumb'>
      <div
        className='thumb-overlay position-relative'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <a className='img-link' href='single.html' />
        <span className='top-right-icon bg-white'>
          <i className='elegant-icon icon_ribbon_alt ' />
        </span>
        <div className='post-content-overlay text-white ml-30 mr-30 pb-30'>
          <div className='post-meta-1 mb-20'>
            <a
              href={categoryUrl}
              className='tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3'
              tabIndex={0}
            >
              {categoryName}
            </a>
            <span className='post-date text-white font-md'>{datePublic}</span>
          </div>
          <h3 className='post-title'>
            <a className='text-white' href='single.html'>
              {title}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroArticle;
