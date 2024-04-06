import React from "react";
import { cardPopularArticleData } from "./mock/cardPopularArticleData";
import CardPopularArticle from "./components/CardPopularArticle";
import { cardRecentArticleData } from "./mock/cardRecentArticle";
import CardRecentArticle from "./components/CardRecentArticle";
import { cardGalleryData } from "./mock/cardGalleryData";
import CardGallery from "./components/CardGallery";
import { generateRandomKey } from "@/utils/helper";

const RecentArticles = () => {
  return (
    <section className='recent-posts pb-65'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='header-title mb-25'>
              <h3 className='font-heading mb-0 wow fadeIn animated'>
                Recent Articles
              </h3>
            </div>
            <div className='loop-list loop-list-style-1  mb-md-30'>
              {cardRecentArticleData.map((data) => (
                <CardRecentArticle
                  key={generateRandomKey()}
                  authorAvarta={data.authorAvarta}
                  authorName={data.authorName}
                  authorUrl={data.authorUrl}
                  categoryName={data.categoryName}
                  categoryUrl={data.categoryUrl}
                  createdDate={data.createdDate}
                  imageUrl={data.imageUrl}
                  title={data.title}
                  url={data.url}
                />
              ))}
            </div>
          </div>
          <div className='col-lg-4 primary-sidebar sticky-sidebar'>
            <div className='widget-area'>
              <div className='sidebar-widget widget-latest-posts mb-50 wow fadeIn animated'>
                <div className='widget-header-1 position-relative mb-30'>
                  <h5 className='mt-5 mb-30 font-heading'>Most popular</h5>
                </div>
                <div className='post-block-list post-module-1'>
                  <ul className='list-post'>
                    {cardPopularArticleData.map((data) => (
                      <CardPopularArticle
                        key={generateRandomKey()}
                        datePublished={data.datePublished}
                        imageUrl={data.imageUrl}
                        title={data.title}
                        url={data.url}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div className='sidebar-widget widget_instagram wow fadeIn animated'>
                <div className='widget-header-1 position-relative mb-30'>
                  <h5 className='mt-5 mb-30 font-heading'>Gallery</h5>
                </div>
                <div className='instagram-gellay'>
                  <ul className='insta-feed'>
                    {cardGalleryData.map((data) => (
                      <CardGallery
                        key={generateRandomKey()}
                        imageUrl={data.imageUrl}
                        url={data.url}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
