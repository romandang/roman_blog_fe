"use client";
import ArticleBanner from "@/components/ArticleBanner";
import Filter from "@/app/article/components/Filter/Filter";
import Interesting from "@/components/Interesting";
import React, { useCallback, useEffect, useState } from "react";
import { getAllArticles } from "@/redux/actions/article";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers/root";
import { useSearchParams } from "next/navigation";
import https from "@/utils/http";
import { API } from "@/utils/endpoints";
import { FilterConfig, FilterData } from "@/types/common";

const ArticleView = () => {
  const { listArticle } = useSelector((state: RootState) => state.article);
  const [filterConfig, setFilterConfig] = useState<FilterConfig>({
    category: "",
    sort_by: "recently",
  });
  const [filterData, setFilterData] = useState<FilterData>({
    categories: [],
    sortBy: [],
  });

  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const createQueryString = useCallback((config: any) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(config).forEach(([key, value]) => {
      if (value) {
        params.set(key, value.toString());
      }
    });

    return params.toString();
  }, []);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const response = await https.get(API.COMMON.GET_FILTER_CONFIG);
        setFilterData(response.data);
      } catch (error) {
        console.error("Error fetching filter config:", error);
      }
    };

    fetchFilterData();
  }, []);

  useEffect(() => {
    dispatch(getAllArticles(createQueryString(filterConfig)) as any);
  }, [JSON.stringify(filterConfig)]);

  return (
    <main>
      <div className="recent-posts pt-65 pb-65 position-relative">
        <div className="container">
          <ArticleBanner />
          <Filter
            filterData={filterData}
            filterConfig={filterConfig}
            setFilterConfig={setFilterConfig}
          />
          <Interesting listArticle={listArticle} />
          <div className="text-center mt-65">
            <button className="btn btn-lg bg-dark text-white d-inline-block">
              Load more posts
            </button>
          </div>
        </div>
      </div>
      <section className="newsletter bg-brand-3 pt-100 pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-8">
                <div className="header-title-2 mb-65">
                  <h4 className="mb-0 text-grey-400 wow fadeIn animated">
                    <img src="assets/imgs/theme/svg/send.svg" alt="" />
                    <span>Subscribe</span>
                  </h4>
                  <h3 className="font-heading wow fadeIn animated">
                    to Our Newsletter
                  </h3>
                </div>
                <form className="form-subcriber mt-30 d-flex wow fadeIn animated">
                  <input
                    type="email"
                    className="form-control bg-white font-small"
                    placeholder="Enter your email"
                  />
                  <button className="btn bg-dark text-white" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <img
              src="assets/imgs/theme/sketch-1.png"
              alt=""
              className="sketch-1 wow fadeIn animated"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticleView;
