import { generateRandomKey } from "@/utils/helper";
import TrendingCard from "./components/TrendingCard";

const Trending = ({ data }) => {
  return (
    <section className="pb-65 bg-brand-4">
      <div className="container">
        <div className="header-title mb-65 layout-2">
          <h3 className="font-heading mb-0 wow fadeIn  animated">
            Trending Topics
          </h3>
          <a href="category.html">See all topics</a>
        </div>
        <div className="row carausel-6-columns wow fadeIn  animated">
          {data.map((category) => (
            <TrendingCard
              key={generateRandomKey()}
              imageUrl={category.imageUrl}
              categoryName={category.categoryName}
              categoryUrl={category.categoryUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
