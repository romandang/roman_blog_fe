import Interesting from "@/components/Interesting";
import React from "react";

const SearchView = () => {
  return (
    <main>
      <section className="pt-65 pb-65">
        <div className="container">
          <div className="archive-header pb-65">
            <div className="archive-header-title">
              <h1 className="font-heading mb-30">Search results</h1>
              <p className="mb-0 font-lg">
                We found 25 articles for <strong>"Media"</strong> key word{" "}
              </p>
            </div>
          </div>
          <div className="hr" />
        </div>
      </section>
      <div className="recent-posts pb-65">
        <div className="container">
          <Interesting />
          <div className="mt-65">
            <button className="btn btn-lg bg-dark text-white d-inline-block">
              Load more posts
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchView;
