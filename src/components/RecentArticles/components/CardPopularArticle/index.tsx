import React from "react";

interface CardPopularArticleProps {
  imageUrl: string;
  title: string;
  url: string;
  datePublished: string;
}

const CardPopularArticle: React.FC<CardPopularArticleProps> = ({
  imageUrl,
  title,
  url,
  datePublished,
}) => {
  return (
    <li className='wow fadeIn animated'>
      <div className='d-flex latest-small-thumb'>
        <div className='post-thumb d-flex mr-15 border-radius-10 img-hover-scale overflow-hidden'>
          <a className='color-white' href={url} tabIndex={0}>
            <img src={imageUrl} alt='' />
          </a>
        </div>
        <div className='post-content media-body align-self-center'>
          <h5 className='post-title mb-15 text-limit-3-row font-medium'>
            <a href={url} tabIndex={0}>
              {title}
            </a>
          </h5>
          <div className='entry-meta meta-1 float-left font-sm'>
            <span className='post-on has-dot'>{datePublished}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardPopularArticle;
