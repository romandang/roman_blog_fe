import Layout from "@/layout/layout";
import { API } from "@/utils/endpoints";
import { _ } from "@/utils/helper";
import HomeView from "@/views/Home";
export default async function Homepage() {
  const resultHomepage = await fetch(API.COMMON.GET_DATA_HOMEPAGE);
  const homepage = await resultHomepage.json();
  const homepageData = homepage?.response?.data;

  return (
    <Layout>
      {!_.isEmpty(homepageData) && <HomeView homepageData={homepageData} />}
    </Layout>
  );
}
