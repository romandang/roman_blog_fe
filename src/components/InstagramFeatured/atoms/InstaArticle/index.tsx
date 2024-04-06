import React from "react";

interface InstaArticleProps {
  imageUrl: string;
  authorAvarta: string;
  authorName: string;
  postedBy: string;
}

const InstaArticle: React.FC<InstaArticleProps> = ({
  imageUrl,
  authorAvarta,
  authorName,
  postedBy,
}) => {
  return (
    <div className='post-card-1 instagram-card border-radius-10 hover-up p-30'>
      <figure className='mb-30 img-hover-scale overflow-hidden border-radius-10'>
        <img className='border-radius-10' src={imageUrl} alt='' />
      </figure>
      <div className='post-meta-2 font-md d-flex'>
        <a className='align-self-center' href='page-author.html'>
          <img src={authorAvarta} alt='' />
        </a>
        <div className='mb-0'>
          <a href='page-author.html'>
            {" "}
            <strong className='author-namge'>{authorName}</strong>
          </a>
          <p className='post-on font-sm text-grey-400 mb-0'>{postedBy}</p>
        </div>
      </div>
    </div>
  );
};

export default InstaArticle;
