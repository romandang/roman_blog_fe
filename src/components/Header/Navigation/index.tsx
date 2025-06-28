"use client";
import React from "react";
import * as _ from "lodash";
import { generateRandomKey } from "@/utils/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  id: number;
  title: string;
  url: string;
};

type device = "desktop" | "mobile";

interface INavigation extends NavigationItem {
  subItem: NavigationItem[];
}

export interface NavigationProps {
  data: INavigation[];
}

const Navigation: React.FC<NavigationProps> = ({ data }) => {
  const currentPathName = usePathname();

  const renderNavigation = (device: device) => {
    const isMobile = device === "mobile";
    if (_.isEmpty(data)) return <></>;

    return data.map((item) => {
      const isCurrentItem = currentPathName === item.url;
      if (_.isEmpty(item.subItem)) {
        return (
          <li key={generateRandomKey()} className={`${isCurrentItem ? "current-item" : ""}`}>
            {currentPathName === item.url ? (
              <a>{item.title}</a>
            ) : (
              <Link href={item.url}>{item.title}</Link>
            )}
          </li>
        );
      }

      return (
        <li className="menu-item-has-children" key={generateRandomKey()}>
          {currentPathName === item.url ? (
            <a>{item.title}</a>
          ) : (
            <Link href={item.url}>{item.title}</Link>
          )}
          <ul className={`sub-menu ${isMobile && "font-small"}`}>
            {item.subItem.map((subItem) => {
              return (
                <li key={generateRandomKey()} className={`${isCurrentItem ? "current-item" : ""}`}>
                  {currentPathName === subItem.url ? (
                    <a>{subItem.title}</a>
                  ) : (
                    <Link href={subItem.url}>{subItem.title}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
  };

  return (
    <nav>
      {/*Desktop menu*/}
      <ul className="main-menu d-none d-lg-inline">
        {renderNavigation("desktop")}
      </ul>
      {/*Mobile menu*/}
      <ul id="mobile-menu" className="d-block d-lg-none text-muted">
        {renderNavigation("mobile")}
      </ul>
    </nav>
  );
};

export default Navigation;
