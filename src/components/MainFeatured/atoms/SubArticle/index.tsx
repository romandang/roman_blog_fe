import React from "react";

interface SubArticleProps {
  imageUrl: string;
  categoryUrl: string;
  categoryName: string;
  title: string;
}

const SubArticle: React.FC<SubArticleProps> = ({
  imageUrl,
  categoryUrl,
  categoryName,
  title,
}) => {
  return (
    <article className='col-lg-6 mb-30  mb-md-30'>
      <div className='position-relative post-thumb border-radius-10 overflow-hidden hover-up-3'>
        <div
          className='thumb-overlay position-relative'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <a className='img-link' href='single.html' />
          <div className='post-content-overlay text-white ml-30 mr-30 pb-30'>
            <div className='post-meta-1 mb-20'>
              <a
                href={categoryUrl}
                className='tag-category bg-primary shadown-1 text-dark button-shadow hover-up-3'
                tabIndex={0}
              >
                {categoryName}
              </a>
            </div>
            <h5 className='post-title'>
              <a className='text-white' href='single.html'>
                {title}
              </a>
            </h5>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SubArticle;
