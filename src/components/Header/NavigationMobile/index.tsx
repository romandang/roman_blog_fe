"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavigationProps } from "../Navigation";
import { generateRandomKey } from "@/utils/helper";
import { usePathname } from "next/navigation";

const NavigationMobile: React.FC<NavigationProps> = ({ data }) => {
  const [isExpand, setIsExpand] = useState(false);
  const currentPathName = usePathname();
  const [customData, setCustomData] = useState(
    data.map((item) => {
      return {
        ...item,
        subItem: item.subItem.map((subItem) => ({
          ...subItem,
          isExpand: false,
        })),
      };
    }),
  );

  const handleClickChildrenExpand = (parentId: number, chilrenId: number) => {
    const cloneCustomData = [...customData];
    const parentIdx = cloneCustomData.findIndex((item) => item.id === parentId);
    if (parentIdx !== -1) {
      const childrenIdx = cloneCustomData[parentIdx].subItem.findIndex(
        (item) => item.id === chilrenId,
      );
      if (childrenIdx !== -1) {
        cloneCustomData[parentIdx].subItem[childrenIdx].isExpand =
          !cloneCustomData[parentIdx].subItem[childrenIdx].isExpand;
        setCustomData([...cloneCustomData]);
      }
    }
  };

  return (
    <div className="mobile_menu d-lg-none d-block">
      <div className="slicknav_menu" role="presentation">
        <div className="container">
          <a
            aria-haspopup="true"
            role="button"
            tabIndex={0}
            className="slicknav_btn slicknav_collapsed"
            onClick={() => setIsExpand((state) => !state)}
          >
            <span className="slicknav_menutxt">MENU</span>
          </a>
        </div>
        {isExpand && (
          <ul className="slicknav_nav" aria-hidden="true" role="menu">
            {customData.map((item) => {
              return (
                <li
                  className="menu-item-has-children slicknav_collapsed slicknav_parent"
                  key={generateRandomKey()}
                >
                  {currentPathName === item.url ? (
                    <a style={{ color: "black" }}>{item.title}</a>
                  ) : (
                    <Link href={item.url} tabIndex={-1}>
                      {item.title}
                    </Link>
                  )}

                  {item.subItem.map((currentSubitem) => {
                    return (
                      <React.Fragment key={generateRandomKey()}>
                        <span
                          className="slicknav_arrow"
                          style={{ color: "black", fontWeight: "bold" }}
                          onClick={() =>
                            handleClickChildrenExpand(
                              item.id,
                              currentSubitem.id,
                            )
                          }
                        >
                          +
                        </span>
                        {currentSubitem.isExpand && (
                          <ul
                            className="sub-menu font-small slicknav_hidden"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li>
                              {currentPathName === currentSubitem.url ? (
                                <a style={{ color: "black" }}>
                                  {currentSubitem.title}
                                </a>
                              ) : (
                                <Link href={currentSubitem.url}>
                                  {currentSubitem.title}
                                </Link>
                              )}
                            </li>
                          </ul>
                        )}
                      </React.Fragment>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavigationMobile;
