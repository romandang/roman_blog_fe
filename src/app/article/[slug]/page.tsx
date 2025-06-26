import Layout from "@/layout/layout";
import ArticleDetailView from "@/views/ArticleDetail";
import React from "react";
import { API } from "@/utils/endpoints";
import { notFound } from "next/navigation";

async function getArticleBySlug(slug: string) {
  const res = await fetch(`${API.ARTICLE.GET_ARTICLE_BY_SLUG}/${slug}`);
  const article = await res.json();
  if (!article) notFound();
  return article;
}

const ArticleDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const result = await getArticleBySlug(slug);
  const article = result.response.data;
  return (
    <Layout>
      <ArticleDetailView article={article} />
    </Layout>
  );
};

export default ArticleDetailPage;
