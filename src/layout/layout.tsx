import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { API } from "@/utils/endpoints";
import React from "react";

interface ILayout {
  children: React.ReactNode;
}

export default async function Layout({ children }: ILayout) {
  const resultFooter = await fetch(API.COMMON.GET_FOOTER);
  const footer = await resultFooter.json();
  const footerData = footer?.response?.data;
  
  return (
    <>
      <Header />
      {children}
      <Footer footerData={footerData} />
    </>
  );
};