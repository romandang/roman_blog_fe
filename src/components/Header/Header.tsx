"use client";
import Search from "@/atoms/Search";
import { getUserInfo } from "@/redux/actions/auth";
import { PRIVATE_TOKEN } from "@/utils/common";
import { API } from "@/utils/endpoints";
import { LOGIN_URL } from "@/utils/routes";
import dayjs from "dayjs";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SidebarWrapper from "../SidebarWrapper";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import UserInfo from "./components/UserInfo/UserInfo";
import { navigationData } from "./mock/navigation";

export default function Header() {
  const { data: session, status }: any = useSession();
  const isLogin = status === "authenticated";
  const { authorName, avatar, name }: any = session?.user || {};
  const currentDate = dayjs().format("DD MMMM YYYY");
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isLogin) {
      dispatch(getUserInfo() as any);
    }
  }, [status]);

  if (session?.error === "SessionExpired") {
    signOut({
      callbackUrl: "/",
    });
  }

  return (
    <React.Fragment>
      <SidebarWrapper />
      <div className="topbar bg-brand-3 pt-15 pb-15 font-md">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 align-self-center">
              <span className="date text-muted">Today: {currentDate}</span>
            </div>
            <div className="col-sm-6 text-right align-self-center">
              <ul className="social-network d-inline-block list-inline  mb-0 float-right">
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="Facebook">
                    <i className="elegant-icon social_facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="Tweet now">
                    <i className="elegant-icon social_twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="Pin it">
                    <i className="elegant-icon social_pinterest" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="Pin it">
                    <i className="elegant-icon social_skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Start Header */}
      <header className="main-header header-sticky header-fluid">
        <div className="position-relative">
          <div className="container-fluid align-self-center">
            <div className="header-style-1 header-style-2">
              <div className="logo">
                <a href="index.html">
                  <img src="/imgs/theme/logo.svg" alt="" />
                </a>
              </div>
              <div className="main-nav d-none d-lg-block">
                <Navigation data={navigationData} />
              </div>
              <div className="off-canvas-toggle-cover d-inline-block">
                <div
                  className="off-canvas-toggle hidden d-inline-block"
                  id="off-canvas-toggle"
                >
                  <img
                    className="svg-icon-24"
                    src="/imgs/theme/svg/menu.svg"
                    alt=""
                  />
                </div>
              </div>
              {/*end: main-nav*/}
              <div className="header-right d-none d-lg-block">
                <button className="search-icon d-md-inline">
                  <img src="/imgs/theme/svg/search.svg" alt="" />
                </button>
                <span className="notice-icon hover-up-3">
                  <i className="elegant-icon icon_ribbon_alt " />
                </span>
                <span className="notice-icon  hover-up-3 active">
                  <img src="/imgs/theme/svg/bell.svg" alt="" />
                </span>
                  {isLogin && <UserInfo 
                    authorName={authorName || name} 
                    avatar={avatar} 
                  />}
                  {!isLogin && (
                    <button className="btn btn-md bg-dark text-white ml-15 box-shadow d-none d-lg-inline">
                      <Link href={LOGIN_URL}>
                        Sign In
                      </Link>
                    </button>
                  )}
              </div>
            </div>
            <NavigationMobile data={navigationData} />
          </div>
        </div>
      </header>

      <div className="bg-square" />
      <Search />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${API.COMMON.GET_ALL_CATEGORIES}`, {
    headers: {
      Authorization: `Bearer ${PRIVATE_TOKEN}`,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const result = await res.json();
  const listCategory = result?.data?.map((category: any) => ({
    title: category?.attributes?.title,
    url: category?.attributes?.slug,
  }));

  return {
    props: {
      listCategory,
    },
  };
}
