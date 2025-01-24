import { generateRandomKey } from "@/utils/helper";
import HeroArticle from "./atoms/HeroArticle";
import SubArticle from "./atoms/SubArticle";

const MainFeatured = ({ data }) => {
  const { heroArticle = [], subArticle = [] } = data || {};

  return (
    <section className="featured-grid pt-65 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="position-relative mb-md-30">
              <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow .img-fadeIn animated">
                <div className="slide-fade-2">
                  {heroArticle.map((currentData) => (
                    <HeroArticle
                      key={generateRandomKey()}
                      categoryName={currentData.categoryName}
                      categoryUrl={currentData.categoryName}
                      datePublished={currentData.datePublished}
                      imageUrl={currentData.imageUrl}
                      title={currentData.title}
                    />
                  ))}
                </div>
              </div>
              <div className="slide-fade-arrow-cover-2" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {subArticle.map((data) => (
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
