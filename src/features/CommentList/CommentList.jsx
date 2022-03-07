import { CommentBody } from '../CommentBody'

import data from '../../data.json';
import { Stack } from '@mui/material';

const CommentList = () => {
  return (
    <Stack direction={'column'} spacing={2} sx={{mb: 2}}>
      {data.comments.map((comment) => (
        <CommentBody
          key={comment.id}
          isCurrentUser={data.currentUser.username === comment.user.username}
          {...comment}
        />
      ))}
    </Stack>
  )
}

export {CommentList};
