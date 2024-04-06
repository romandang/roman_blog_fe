import Layout from "@/app/layout";
import HomeView from "@/views/Home";
import React from "react";

const HomePage = () => {
  return (
    <Layout headerData={[]}>
      <HomeView />
    </Layout>
  );
};

export default HomePage;
