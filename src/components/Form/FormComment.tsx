import { postComment } from "@/redux/actions/interactive";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

interface FormCommentProps {
  articleId: string;
}

const FormComment = ({ articleId }: FormCommentProps) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    await dispatch(postComment({ comment: data.comment, articleId }) as any);
    reset();
  };

  return (
    <div className="comment-form wow fadeIn animated pb-35">
      <div className="widget-header-2 position-relative mb-30">
        <h3 className="mt-5 mb-30 font-heading">Leave a Reply</h3>
      </div>
      <form
        className="form-contact comment_form"
        onSubmit={handleSubmit(onSubmit)}
        id="commentForm"
      >
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control w-100"
                {...register("comment")}
                id="comment"
                cols={30}
                rows={9}
                placeholder="Write Comment"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-lg bg-dark text-white d-inline-block"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComment;
