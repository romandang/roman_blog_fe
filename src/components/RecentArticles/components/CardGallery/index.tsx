import React from "react";

interface CardGalleryProps {
  url: string;
  imageUrl: string;
}

const CardGallery: React.FC<CardGalleryProps> = ({ imageUrl, url }) => {
  return (
    <li>
      <a
        href={url}
        className='play-video'
        data-animate='zoomIn'
        data-duration='1.5s'
        data-delay='0.1s'
      >
        <img className='border-radius-10' src={imageUrl} alt='' />
      </a>
    </li>
  );
};

export default CardGallery;
