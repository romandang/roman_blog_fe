const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: true,
})

import dynamic from "next/dynamic";
import React from "react";
import { ICategory } from "@/redux/reducers/common";

interface ILayout {
  children: React.ReactNode;
  headerData: ICategory[];
  footerData: any;
}

const Layout: React.FC<ILayout> = ({ children, headerData, footerData }) => {
  return (
    <>
      <Header />
      {children}
      <Footer footerData={footerData} />
    </>
  );
};

export default Layout;
