import { Paper, Typography } from '@mui/material';
import { CommentCounter } from '../CommentCounter/CommentCounter';

import { CommentAction } from './CommentAction';
import { UserInfo } from './UserInfo';

const CommentBody = () => {
  // TODO: currentUser -> Delete|Edit, others -> Reply
  const user = {
    avatar: './images/avatars/image-juliusomo.png',
    username: 'juliusomo',
  };
  const content = "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."

  const replies = [
    {
      "id": 3,
      "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      "createdAt": "1 week ago",
      "score": 4,
      "replyingTo": "maxblagun",
      "user": {
        "image": { 
          "png": "./images/avatars/image-ramsesmiron.png",
          "webp": "./images/avatars/image-ramsesmiron.webp"
        },
        "username": "ramsesmiron"
      }
    },
    {
      "id": 4,
      "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      "createdAt": "2 days ago",
      "score": 2,
      "replyingTo": "ramsesmiron",
      "user": {
        "image": { 
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      }
    }
  ]

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 3,
      }}
    >
      <CommentCounter count={2} />
      <UserInfo {...user} createdAt="1 month ago" />
      <CommentAction type="custom" />
      <Typography>
        {content}
      </Typography>
    </Paper>
  )
}

export {CommentBody};
