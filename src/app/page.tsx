import Layout from "@/layout/layout";
import { API } from "@/utils/endpoints";
import { _ } from "@/utils/helper";
import HomeView from "@/views/Home";
export default async function Homepage() {
  const data = await fetch(API.COMMON.GET_DATA_HOMEPAGE);
  const homepage = await data.json();
  const homepageData = homepage?.response?.data;

  return (
    <Layout headerData={[]}>
      {!_.isEmpty(homepageData) && <HomeView homepageData={homepageData} />}
    </Layout>
  );
}
