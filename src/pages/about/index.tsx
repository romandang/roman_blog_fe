import Layout from "@/app/layout";
import AboutView from "@/views/About";
import React from "react";

const AboutPage = () => {
  return (
    <Layout headerData={[]}>
      <AboutView />
    </Layout>
  );
};

export default AboutPage;
