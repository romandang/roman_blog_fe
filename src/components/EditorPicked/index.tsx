import React from "react";
import { cardRelevantArticleData } from "./mock/cardRelevantArticleData";
import CardRelevantArticle from "@/atoms/CardRelevantArticle";
import { editorPickedMainCaroselData } from "./mock/editorPickedMainCaroselData";
import EditorPickedMainCarosel from "./components/EditorPickedMainCarosel";
import { generateRandomKey } from "@/utils/helper";

const EditorPicked = ({ data }) => {
  const { carousels, relevantArticles } = data;

  return (
    <section className="pb-65">
      <div className="container">
        <h3 className="mb-65 font-heading wow fadeIn animated">
          Editor's picked
        </h3>
        <div className="position-relative wow fadeIn animated mb-65">
          <div className="slide-fade slide-fade-inner bg-brand-4 border-radius-10 p-65 p-sm-25">
            {carousels.map((data) => (
              <EditorPickedMainCarosel
                key={generateRandomKey()}
                categoryName={data.categoryName}
                categoryUrl={data.categoryUrl}
                createdDate={data.createdDate}
                description={data.description}
                imageUrl={data.imageUrl}
                title={data.title}
                url={data.url}
              />
            ))}
          </div>
          <div className="slide-fade-arrow-cover" />
        </div>
        <div className="row wow fadeIn animated">
          {relevantArticles.map((data) => (
            <CardRelevantArticle
              key={data.title}
              datePublished={data.datePublished}
              imageUrl={data.imageUrl}
              title={data.title}
              url={data.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorPicked;
