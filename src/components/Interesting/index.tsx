import React from "react";
import { articlesData } from "./mock/articlesData";
import CardArticle from "@/atoms/CardArticle";
import { generateRandomKey } from "@/utils/helper";

const Interesting = () => {
  return (
    <section className='trending pb-65 position-relative'>
      <div className='container'>
        <div className='header-title mb-65'>
          <h3 className='font-heading mb-0 wow fadeIn  animated'>
            Recent Articles
          </h3>
          <span className='sub-header-title text-grey-400 wow fadeIn  animated'>
            Don't miss new trend
          </span>
        </div>
        <div className='row'>
          {articlesData.map((data) => (
            <CardArticle
              key={generateRandomKey()}
              authorAvarta={data.authorAvarta}
              authorName={data.authorName}
              categoryName={data.categoryName}
              categoryUrl={data.categoryUrl}
              imageUrl={data.imageUrl}
              postedBy={data.postedBy}
              timeReading={data.timeReading}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interesting;
