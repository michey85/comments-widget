import { useState } from 'react';
import { Paper } from '@mui/material';

import { CommentCounter } from './CommentCounter';
import { CommentContent } from './CommentContent';
import { CommentAction } from './CommentAction';
import { UserInfo } from './UserInfo';
import { ReplyToComment } from './ReplyToComment';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../user/user-slice';

const CommentBody = ({
  id,
  content,
  createdAt,
  score,
  user,
  replyingTo = '',
  handleModal = Function.prototype,
  commentId,
}) => {
  const [isReplyActive, setReplyActive] = useState(false);

  const currentUserName = useSelector(selectUserName)
  const isCurrentUser = currentUserName === user.username;

  const isReply = !!commentId;
  const replyId = commentId ? id : null;

  const handleReply = () => {
    setReplyActive(true)
  }
  const closeReply = () => {
    setReplyActive(false)
  }

  return (
    <>
    <Paper
      elevation={0}
      sx={{
        p: 2,
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: '1fr 10fr 1fr',
        },
        gridTemplateAreas: {
          xs: `
            "info     info"
            "content  content"
            "counter  actions"
          `,
          md: `
            "counter  info     actions"
            "counter  content  content"
          `,
        },
        gap: 3,
      }}
    >
      <UserInfo
        username={user.username}
        avatar={user.image.png}
        createdAt={createdAt}
        isCurrentUser={isCurrentUser}
      />

      <CommentContent replyingTo={replyingTo} content={content} />
      
      <CommentAction
        type={isCurrentUser ? 'custom' : 'reply'}
        handleReply={handleReply}
        handleModal={handleModal}
      />

      <CommentCounter
        count={score}
        replyId={replyId}
        commentId={isReply ? commentId : id}
      />
    </Paper>

    {isReplyActive && (
      <ReplyToComment
        username={user.username}
        onClose={closeReply}
        commentId={commentId}
      />
    )}

    </>
  )
}

export {CommentBody};


