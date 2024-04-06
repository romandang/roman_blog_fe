import Preloader from "@/atoms/Preloader";
import AdBanner from "@/components/AdBanner";
import EditorPicked from "@/components/EditorPicked";
import InstagramFeatured from "@/components/InstagramFeatured";
import Interesting from "@/components/Interesting";
import MainFeatured from "@/components/MainFeatured";
import Newsletter from "@/components/Newsletter";
import RecentArticles from "@/components/RecentArticles";
import Trending from "@/components/Trending";
import React, { useEffect, useState } from "react";

const HomeView = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      <main className='home-page-2'>
        {/* <Preloader isLoading={isLoading} /> */}
        <MainFeatured />
        <Trending />
        <AdBanner />
        <RecentArticles />
        <EditorPicked />
        <Interesting />
        <InstagramFeatured />
        <Newsletter />
      </main>
    </>
  );
};

export default HomeView;
