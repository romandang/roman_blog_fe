import React from "react";
import { trendingCardData } from "./mock/data";
import TrendingCard from "./components/TrendingCard";
import { generateRandomKey } from "@/utils/helper";

const Trending = () => {
  return (
    <section className='pb-65 bg-brand-4'>
      <div className='container'>
        <div className='header-title mb-65 layout-2'>
          <h3 className='font-heading mb-0 wow fadeIn  animated'>
            Trending Topics
          </h3>
          <a href='category.html'>See all topics</a>
        </div>
        <div className='row carausel-6-columns  wow fadeIn  animated'>
          {trendingCardData.map((data) => (
            <TrendingCard
              key={generateRandomKey()}
              imageUrl={data.imageUrl}
              categoryName={data.categoryName}
              categoryUrl={data.categoryUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
