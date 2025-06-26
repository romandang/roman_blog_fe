const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: true,
})

import { API } from "@/utils/endpoints";
import dynamic from "next/dynamic";
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