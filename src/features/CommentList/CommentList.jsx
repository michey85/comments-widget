import { CommentBody } from '../CommentBody'

import data from '../../data.json';
import { Stack } from '@mui/material';

const CommentList = ({handleModal}) => {
  return (
    <Stack direction={'column'} spacing={2} sx={{mb: 2}}>
      {data.comments.map((comment) => (
        <CommentBody
          key={comment.id}
          currentUser={data.currentUser.username}
          handleModal={handleModal}
          {...comment}
        />
      ))}
    </Stack>
  )
}

export {CommentList};
