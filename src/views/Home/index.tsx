import AdBanner from "@/components/AdBanner";
import EditorPicked from "@/components/EditorPicked";
import InstagramFeatured from "@/components/InstagramFeatured";
import Interesting from "@/components/Interesting";
import MainFeatured from "@/components/MainFeatured";
import Newsletter from "@/components/Newsletter";
import RecentArticles from "@/components/RecentArticles";
import Trending from "@/components/Trending";

const HomeView = ({ homepageData }) => {
  const { mainFeatured, trending, recentArticles, editorPicked } = homepageData;
  const isDisplayEditorPicked = editorPicked?.carousels?.length > 0;

  return (
    <main className="home-page-2">
      {/* <Preloader isLoading={isLoading} /> */}
      <MainFeatured data={mainFeatured} />
      <Trending data={trending} />
      <AdBanner />
      <RecentArticles data={recentArticles} />
      {isDisplayEditorPicked && <EditorPicked data={editorPicked} />}
      {/* <Interesting /> */}
      {/* <InstagramFeatured /> */}
      <Newsletter />
    </main>
  );
};

export default HomeView;
