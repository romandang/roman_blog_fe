import FormComment from "../Form/FormComment";
import Comment from "./atoms/Comment/Comment";
import { useState } from "react";

const CommentList = ({
  comments,
  articleId,
}: {
  comments: any[];
  articleId: string;
}) => {
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);

  const handleReplyClick = (commentId: string) => {
    setActiveReplyId(activeReplyId === commentId ? null : commentId);
  };

  return (
    <>
      <div className="comments-area wow fadeIn animated">
        <div className="widget-header-2 position-relative mb-30">
          <h3 className="mt-5 mb-30 font-heading">Comments</h3>
        </div>
        {comments.map((comment) => {
          return (
              <Comment
                articleId={articleId}
                comment={comment}
                key={comment.id}
                activeReplyId={activeReplyId}
                onReplyClick={handleReplyClick}
                listReplyComment={comment?.replyComments}
              />
          );
        })}
      </div>
      <FormComment articleId={articleId} />
    </>
  );
};

export default CommentList;
