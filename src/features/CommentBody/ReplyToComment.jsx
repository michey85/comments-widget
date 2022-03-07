import { useEffect } from 'react';
import { CommentForm } from '../CommentForm';

export const ReplyToComment = ({ username, onClose }) => {
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
  }, []);

  return (
    <CommentForm replyingTo={username} />
  );
};
