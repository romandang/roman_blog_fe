import React from "react";

interface CardRecentArticleProps {
  imageUrl: string;
  url: string;
  categoryName: string;
  categoryUrl: string;
  title: string;
  authorUrl: string;
  authorName: string;
  authorAvarta: string;
  createdDate: string;
}

const CardRecentArticle: React.FC<CardRecentArticleProps> = ({
  imageUrl,
  url,
  categoryName,
  categoryUrl,
  title,
  authorUrl,
  authorName,
  authorAvarta,
  createdDate,
}) => {
  return (
    <article className='hover-up-3 border-radius-10 overflow-hidden wow fadeIn animated'>
      <div className='row'>
        <div className='col-md-5'>
          <div
            className='post-thumb position-relative'
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <a className='img-link' href={url} />
          </div>
        </div>
        <div className='col-md-7 align-self-center'>
          <div className='post-content pr-30'>
            <div className='post-meta-1 mb-20'>
              <a
                href={categoryUrl}
                className='tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3'
                tabIndex={0}
              >
                {categoryName}
              </a>
            </div>
            <h4 className='post-title mb-40'>
              <a className='' href='single.html'>
                {title}
              </a>
            </h4>
            <div className='d-flex'>
              <div className='post-meta-2 font-md d-flex w-70'>
                <a className='align-self-center' href={authorUrl} tabIndex={0}>
                  <img src={authorAvarta} alt='' />
                </a>
                <div className='mb-0'>
                  <a href={authorUrl} tabIndex={0}>
                    {" "}
                    <strong className='author-name'>{authorName}</strong>
                  </a>
                  <p className='post-on font-sm text-grey-400 mb-0'>
                    {createdDate}
                  </p>
                </div>
              </div>
              <div className='text-right post-list-icon align-self-center w-30'>
                <a>
                  <i className='elegant-icon icon_ribbon_alt ' />
                </a>
                <a>
                  <i className='elegant-icon icon_heart_alt ' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardRecentArticle;
