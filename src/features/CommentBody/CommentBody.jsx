import { Paper, Divider, Box } from '@mui/material';
import { CommentCounter } from '../CommentCounter/CommentCounter';

import { CommentContent } from './CommentContent';
import { CommentAction } from './CommentAction';
import { UserInfo } from './UserInfo';

const CommentBody = ({id, content, createdAt, score, user, replies = [], isCurrentUser, replyingTo = ''}) => {
  // TODO: currentUser -> Delete|Edit, others -> Reply

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
        <CommentAction type={isCurrentUser ? 'custom' : 'reply'} />
      </div>
    </Paper>

    <>
      {!!replies.length && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: {xs: 2, md: 4},
            pl: {xs: 0, md: 4},
          }}
        >
          <Divider orientation='vertical' flexItem />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {replies.map(reply => (
              <CommentBody key={reply.id} {...reply} />
            ))}
          </Box>
        </Box>
      )}
    </>

    </>
  )
}

export {CommentBody};
