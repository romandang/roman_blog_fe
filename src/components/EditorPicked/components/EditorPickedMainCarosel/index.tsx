import React from "react";

interface EditorPickedMainCaroselProps {
  categoryUrl: string;
  categoryName: string;
  createdDate: string;
  title: string;
  url: string;
  description: string;
  imageUrl: string;
}

const EditorPickedMainCarosel: React.FC<EditorPickedMainCaroselProps> = ({
  categoryUrl,
  categoryName,
  createdDate,
  title,
  url,
  description,
  imageUrl,
}) => {
  return (
    <div className='slide-fade-item'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <div className='post-meta-1 mb-20 mt-50'>
            <a
              href={categoryUrl}
              className='tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3'
            >
              {categoryName}
            </a>
            <span className='post-date text-muted font-md'>{createdDate}</span>
          </div>
          <h2 className='post-title mb-30 fw-700'>
            <a href={url}>{title}</a>
          </h2>
          <div className='post-excerpt text-grey-400 mb-30'>{description}</div>
        </div>
        <div className='col-lg-6 col-md-12'>
          <figure className='position-relative'>
            <img
              className='border-radius-10 post-thumb'
              src={imageUrl}
              alt='flow'
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default EditorPickedMainCarosel;
