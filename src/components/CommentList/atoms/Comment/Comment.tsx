import FormReplyComment from "@/components/Form/FormReplyComment";
import CommentChild from "../CommentChild/CommentChild";

const Comment = ({
  comment,
  activeReplyId,
  onReplyClick,
  articleId,
  listReplyComment,
}) => {
  const isReply = activeReplyId === comment.id;

  return (
    <div className="comment-list wow fadeIn animated">
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img
              className="rounded-circle w-[65px]"
              src={comment.authorAvatar}
              alt="Avartar"
            />
          </div>
          <div className="desc">
            <p className="comment">{comment.comment}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h5>
                  <a href="#">{comment.authorName}</a>
                </h5>
                <p className="date">{comment.createdDate} </p>
              </div>
              <div className="reply-btn ml-3">
                <button
                  onClick={() => onReplyClick(comment.id)}
                  className="btn-reply"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {listReplyComment && listReplyComment.length > 0 && (
        <div className="ml-50 mt-50 mb-50">
          {listReplyComment.map((reply) => (
            <CommentChild key={reply.id} comment={reply} />
          ))}
        </div>
      )}
      {isReply && (
        <FormReplyComment commentId={comment.id} articleId={articleId} />
      )}
    </div>
  );
};

export default Comment;
