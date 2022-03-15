import { useEffect } from 'react';

import { CommentForm } from './CommentForm';

export const ReplyToComment = ({
  onClose,
  commentId,
  replyId,
  isCurrentUser,
  replyingTo,
}) => {
  const handleEsc = (e) => {
    if (e.code === 'Escape') onClose();
  }

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', onClose);
      document.addEventListener('keypress', handleEsc);
    }, 0);

    return () => {
      document.removeEventListener('click', onClose);
      document.removeEventListener('keypress', handleEsc);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommentForm
      type={isCurrentUser ? 'edit' : 'reply'}
      replyingTo={replyingTo}
      commentId={commentId}
      replyId={replyId}
    />
  );
};
