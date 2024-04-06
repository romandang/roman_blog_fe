import Layout from "@/app/layout";
import RegisterView from "@/views/Register";
import React from "react";

const RegisterPage = () => {
  return (
    <Layout headerData={[]}>
      <RegisterView />
    </Layout>
  );
};

export default RegisterPage;
