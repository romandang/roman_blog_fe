import React from "react";

interface TrendingCardProps {
  imageUrl: string;
  categoryName: string;
  categoryUrl: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  imageUrl,
  categoryName,
  categoryUrl,
}) => {
  return (
    <div className="col">
      <div
        className="border-radius-10 position-relative category-thumb thumb-overlay"
        style={{ backgroundImage: `url(${imageUrl}` }}
      >
        <h5>
          <a href={categoryUrl}>{categoryName}</a>
        </h5>
      </div>
    </div>
  );
};

export default TrendingCard;
