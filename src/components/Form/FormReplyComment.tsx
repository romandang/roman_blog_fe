import { postComment, postReplyComment } from "@/redux/actions/interactive";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

interface FormCommentProps {
  articleId: string;
  commentId: string;
}

const FormReplyComment = ({ articleId, commentId }: FormCommentProps) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    await dispatch(postReplyComment({ parentId: commentId, comment: data.comment, articleId }) as any);
    reset();
  };

  return (
    <div className="comment-form mt-0 mb-0 pb-35">
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
                rows={4}
                placeholder="What do you think?"
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

export default FormReplyComment; 
