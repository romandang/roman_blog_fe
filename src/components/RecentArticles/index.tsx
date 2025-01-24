import React from "react";
import { cardPopularArticleData } from "./mock/cardPopularArticleData";
import CardPopularArticle from "./components/CardPopularArticle";
import { cardRecentArticleData } from "./mock/cardRecentArticle";
import CardRecentArticle from "./components/CardRecentArticle";
import { cardGalleryData } from "./mock/cardGalleryData";
import CardGallery from "./components/CardGallery";
import { _, generateRandomKey } from "@/utils/helper";

const RecentArticles = ({ data }) => {
  const { populars, recents, galerys } = data;

  return (
    <section className="recent-posts pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="header-title mb-25">
              <h3 className="font-heading mb-0 wow fadeIn animated">
                Recent Articles
              </h3>
            </div>
            <div className="loop-list loop-list-style-1  mb-md-30">
              {recents.map((article) => (
                <CardRecentArticle
                  key={generateRandomKey()}
                  authorAvarta={article.authorAvarta}
                  authorName={article.authorName}
                  authorUrl={article.authorUrl}
                  categoryName={article.categoryName}
                  categoryUrl={article.categoryUrl}
                  createdDate={article.createdDate}
                  imageUrl={article.imageUrl}
                  title={article.title}
                  url={article.url}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-4 primary-sidebar sticky-sidebar">
            <div className="widget-area">
              <div className="sidebar-widget widget-latest-posts mb-50 wow fadeIn animated">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30 font-heading">Most popular</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    {populars.map((article) => (
                      <CardPopularArticle
                        key={generateRandomKey()}
                        datePublished={article.datePublished}
                        imageUrl={article.imageUrl}
                        title={article.title}
                        url={article.url}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              {!_.isEmpty(galerys) && (
                <div className="sidebar-widget widget_instagram wow fadeIn animated">
                  <div className="widget-header-1 position-relative mb-30">
                    <h5 className="mt-5 mb-30 font-heading">Gallery</h5>
                  </div>
                  <div className="instagram-gellay">
                    <ul className="insta-feed">
                      {galerys.map((article) => (
                        <CardGallery
                          key={generateRandomKey()}
                          imageUrl={article.imageUrl}
                          url={article.url}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
