import React from "react";
import { instaArticleData } from "./mock/instaArticleData";
import InstaArticle from "./atoms/InstaArticle";
import { generateRandomKey } from "@/utils/helper";

const InstagramFeatured = () => {
  return (
    <section className='instargram bg-brand-4'>
      <div className='container'>
        <div className='header-title-2 text-center mb-65'>
          <h4 className='mb-0 text-grey-400 wow fadeIn animated'>
            <img src='/imgs/theme/svg/instagram.svg' alt='' />
            <span>Follow Us</span>
          </h4>
          <h3 className='font-heading wow fadeIn animated'>on Instagram</h3>
        </div>
        <div className='position-relative wow fadeIn animated'>
          <div className='carausel-3-columns'>
            {instaArticleData.map((data) => (
              <InstaArticle
                key={generateRandomKey()}
                authorAvarta={data.authorAvarta}
                authorName={data.authorName}
                imageUrl={data.imageUrl}
                postedBy={data.postedBy}
              />
            ))}
          </div>
          <div className='carausel-3-columns-arrow-cover mt-30' />
        </div>
      </div>
    </section>
  );
};

export default InstagramFeatured;
