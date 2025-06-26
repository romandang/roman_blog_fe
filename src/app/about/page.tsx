import Layout from "@/layout/layout";
import { API } from "@/utils/endpoints";
import AboutUsView from "@/views/AboutUs";

export default async function AboutUsPage() {
  const resultAboutUs = await fetch(API.COMMON.GET_ABOUT_US);
  const aboutUs = await resultAboutUs.json();
  const aboutUsData = aboutUs?.response?.data;

  return (
    <Layout> 
      <AboutUsView data={aboutUsData} /> 
    </Layout>
  );
};
