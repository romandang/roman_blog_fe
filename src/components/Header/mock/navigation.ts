import {
  ABOUT_URL,
  BLOG_URL,
  CONTACT_URL,
  DESIGN_URL,
  HOME_URL,
} from "@/utils/routes";

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
    title: "Blog",
    url: BLOG_URL,
    subItem: [],
  },
  {
    title: "Design",
    url: DESIGN_URL,
    subItem: [],
  },
  {
    title: "Contact",
    url: CONTACT_URL,
    subItem: [],
  },
];
