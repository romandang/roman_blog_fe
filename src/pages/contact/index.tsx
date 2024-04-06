import Layout from "@/app/layout";
import ContactView from "@/views/Contact";
import React from "react";

const ContactPage = () => {
  return (
    <Layout headerData={[]}>
      <ContactView />
    </Layout>
  );
};

export default ContactPage;
