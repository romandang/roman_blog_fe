"use client";
import Tags from "@/atoms/Tags";
import React, { useEffect, useState } from "react";
import Author from "../Author";
import CommentList from "../CommentList";
import MorePost from "../MorePost";
import FormComment from "../Form/FormComment";
import https from "@/utils/http";
import { API } from "@/utils/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers/root";
import { getCommentByArticleId } from "@/redux/actions/interactive";

const ArticleContentDetail = ({
  id,
  content,
  shortDescription,
}: {
  content: string;
  shortDescription: string;
  id: string;
}) => {
  const { listComment } = useSelector((state: RootState) => state.interactive);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchComments = async () => {
      dispatch(getCommentByArticleId({ articleId: id }) as any);
    };
    fetchComments();
  }, [id]);

  return (
    <>
      <div className="excerpt mb-30">
        <div className="entry-content">
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          />
        </div>
      </div>
      <div className="entry-main-content wow fadeIn animated">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className="border-radius-10 border bg-white mb-30 p-65 wow fadeIn animated text-center">
          <h4 className="mb-0 mt-0">Become a member</h4>
          <p className="font-md text-grey-400">
            Get the latest news right in your inbox. We never spam!
          </p>
          <form
            className="mt-30 d-flex wow fadeIn  animated"
            style={{ visibility: "visible", animationName: "fadeIn" }}
          >
            <input
              type="email"
              className="form-control mr-15"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="btn btn-lg bg-dark text-white d-inline-block"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <Tags />
      <Author />
      <CommentList comments={listComment} />
      <FormComment articleId={id} />

      <MorePost />
    </>
  );
};

export default ArticleContentDetail;
