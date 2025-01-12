import Layout from "@/layout/layout";
import Page404View from "@/views/Error/404";
import React from "react";

const Page = () => {
  return (
    <Layout headerData={[]}>
      <Page404View />
    </Layout>
  );
};

export default Page;
