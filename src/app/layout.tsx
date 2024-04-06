import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ICategory } from "@/redux/reducers/common";
import React from "react";

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
