import { ABOUT_URL, ARTICLE_URL, CONTACT_URL, HOME_URL } from "@/utils/routes";

export const navigationData = [
  {
    title: "Home",
    url: HOME_URL,
    subItem: [
      {
        title: "Home",
        url: "Home default",
      },
    ],
  },
  {
    title: "About",
    url: ABOUT_URL,
    subItem: [],
  },
  {
    title: "Article",
    url: ARTICLE_URL,
    subItem: [],
  },
  // {
  //   title: "Design",
  //   url: DESIGN_URL,
  //   subItem: [],
  // },
  {
    title: "Contact",
    url: CONTACT_URL,
    subItem: [],
  },
];
