import { Divider, Box } from '@mui/material';
import { CommentBody } from './CommentBody';


export const CommentReplies = ({ replies, commentId }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: { xs: 2, md: 4 },
      pl: { xs: 0, md: 4 },
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
        <CommentBody
          {...reply}
          key={reply.id}
          commentId={commentId}
        />
      ))}
    </Box>
  </Box>
);
