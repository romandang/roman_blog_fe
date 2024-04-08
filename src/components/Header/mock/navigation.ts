import { ABOUT_URL, ARTICLE_URL, CONTACT_URL, HOME_URL } from "@/utils/routes";

export const navigationData = [
  {
    id: 1,
    title: "Home",
    url: HOME_URL,
    subItem: [
      {
        id: 1,
        title: "Home",
        url: "Home default",
      },
    ],
  },
  {
    id: 2,
    title: "About",
    url: ABOUT_URL,
    subItem: [],
  },
  {
    id: 3,
    title: "Article",
    url: ARTICLE_URL,
    subItem: [
      {
        id: 1,
        title: "Home",
        url: "Home default",
      },
    ],
  },
  // {
  //   title: "Design",
  //   url: DESIGN_URL,
  //   subItem: [],
  // },
  {
    id: 4,
    title: "Contact",
    url: CONTACT_URL,
    subItem: [],
  },
];
