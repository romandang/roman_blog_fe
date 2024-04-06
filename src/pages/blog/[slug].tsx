import Layout from "@/app/layout";
import { PRIVATE_TOKEN } from "@/utils/common";
import { API } from "@/utils/endpoints";

export default function Page({ post, listCategory }: any) {
  return (
    <Layout headerData={listCategory}>
      <></>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `${API.BLOG.GET_ALL_BLOG}?slug=${context.params.slug}`,
    {
      headers: {
        Authorization: `Bearer ${PRIVATE_TOKEN}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  const commonRes = await fetch(`${API.COMMON.GET_ALL_CATEGORIES}`, {
    headers: {
      Authorization: `Bearer ${PRIVATE_TOKEN}`,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const result = await res.json();
  const commonResult = await commonRes.json();

  const listCategory =
    commonResult?.data?.map((category: any) => ({
      title: category?.attributes?.title,
      url: category?.attributes?.slug,
    })) || [];

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post: result?.data?.[0]?.attributes || {},
      listCategory,
    },
  };
}

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  // Call an external API endpoint to get posts
  const res = await fetch(API.BLOG.GET_ALL_BLOG, {
    headers: {
      Authorization: `Bearer ${PRIVATE_TOKEN}`,
    },
  });

  const posts = await res.json();
  const paths = posts?.data?.map((post: any) => ({
    params: { slug: post?.attributes?.slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}
