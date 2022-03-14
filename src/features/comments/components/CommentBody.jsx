import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';

import { selectUserName } from '../../user/user-slice';

import { CommentCounter } from './CommentCounter';
import { CommentContent } from './CommentContent';
import { CommentAction } from './CommentAction';
import { UserInfo } from './UserInfo';
import { ReplyToComment } from './ReplyToComment';

import {useModal} from '../hooks/use-modal';

const CommentBody = ({
  id,
  content,
  createdAt,
  score,
  user,
  replyingTo = '',
  commentId,
}) => {
  const isReply = !!commentId;
  const replyId = commentId ? id : null;

  const handleModal = useModal(commentId || id, isReply ? id : null);
  const [activeReply, setActiveReply] = useState('');

  const currentUserName = useSelector(selectUserName)
  const isCurrentUser = currentUserName === user.username;

  const handleReply = () => {
    setActiveReply(isCurrentUser ? content : `@${replyingTo || user.username} `);
  }
  const closeReply = () => {
    setActiveReply('');
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
        isCurrentUser={isCurrentUser}
      />
    </Paper>

    {!!activeReply && (
      <ReplyToComment
        onClose={closeReply}
        commentId={commentId}
        isCurrentUser={isCurrentUser}
        replyingTo={activeReply}
      />
    )}

    </>
  )
}

export {CommentBody};
