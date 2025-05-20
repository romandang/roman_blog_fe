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
}

const Layout: React.FC<ILayout> = ({ children, headerData }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
