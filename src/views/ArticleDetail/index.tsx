import ArticleBannerDetail from "@/components/ArticleBannerDetail";
import ArticleContentDetail from "@/components/ArticleContentDetail";
import React from "react";

const ArticleDetailView = ({ article }: { article: any }) => {
  return (
    <main>
      <ArticleBannerDetail
        imageUrl={article.imageUrl}
        categoryName={article.categoryName}
        categoryUrl={article.categoryUrl}
        datePublished={article.datePublished}
        title={article.title}
        authorName={article.authorName}
        authorUrl={article.authorUrl}
        authorAvarta={article.authorAvarta}
        timeReading={article.timeReading}
      />
      <div className="container single-content">
        <article className="entry-wraper mb-50">
          <ArticleContentDetail
            id={article.id}
            content={article.content}
            shortDescription={article.shortDescription}
          />
        </article>
      </div>
    </main>
  );
};

export default ArticleDetailView;
