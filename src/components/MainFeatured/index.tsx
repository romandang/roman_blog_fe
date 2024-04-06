import React from "react";
import { heroArticleData } from "./mock/heroArticleData";
import { subArticleData } from "./mock/subArticleData";

import HeroArticle from "./atoms/HeroArticle";
import SubArticle from "./atoms/SubArticle";
import { generateRandomKey } from "@/utils/helper";

const MainFeatured = () => {
  return (
    <section className='featured-grid pt-65 pb-65'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='position-relative mb-md-30'>
              <div className='carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow .img-fadeIn animated'>
                <div className='slide-fade-2'>
                  {heroArticleData.map((data) => (
                    <HeroArticle
                      key={generateRandomKey()}
                      categoryName={data.categoryName}
                      categoryUrl={data.categoryName}
                      datePublic={data.datePublic}
                      imageUrl={data.imageUrl}
                      title={data.title}
                    />
                  ))}
                </div>
              </div>
              <div className='slide-fade-arrow-cover-2' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              {subArticleData.map((data) => (
                <SubArticle
                  key={generateRandomKey()}
                  categoryName={data.categoryName}
                  categoryUrl={data.categoryUrl}
                  imageUrl={data.imageUrl}
                  title={data.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatured;
