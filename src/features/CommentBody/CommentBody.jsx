import { useState } from 'react';
import { Paper } from '@mui/material';
import { CommentCounter } from '../CommentCounter/CommentCounter';

import { CommentContent } from './CommentContent';
import { CommentAction } from './CommentAction';
import { UserInfo } from './UserInfo';

import { ReplyToComment } from './ReplyToComment';
import { CommentReplies } from './CommentReplies';

const CommentBody = ({id, content, createdAt, score, user, replies = [], currentUser, replyingTo = '', handleModal}) => {
  const [isReplyActive, setReplyActive] = useState(false);

  // TODO: получать из стора
  const isCurrentUser = currentUser === user.username;

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
      <div style={{
        gridArea: 'info'
      }}>
        <UserInfo
          username={user.username}
          avatar={user.image.png}
          createdAt={createdAt}
          isCurrentUser={isCurrentUser}
        />
      </div>
      <div style={{
        gridArea: 'content'
      }}>
        <CommentContent replyingTo={replyingTo} content={content} />
      </div>
      <div style={{
        gridArea: 'counter',
        justifySelf: 'start',
      }}>
        <CommentCounter count={score} />
      </div>
      <div style={{
        gridArea: 'actions'
      }}>
        <CommentAction
          type={isCurrentUser ? 'custom' : 'reply'}
          handleReply={handleReply}
          handleModal={handleModal}
        />
      </div>
    </Paper>

    {isReplyActive && (
      <ReplyToComment
        isReplyActive={isReplyActive}
        username={user.username}
        onClose={closeReply}
      />
    )}

    {!!replies.length && (
      <CommentReplies replies={replies} />
    )}

    </>
  )
}

export {CommentBody};


