import Layout from "@/app/layout";
import AuthorView from "@/views/Author";
import React from "react";

const AuthorPage = () => {
  return (
    <Layout headerData={[]}>
      <AuthorView />
    </Layout>
  );
};

export default AuthorPage;
