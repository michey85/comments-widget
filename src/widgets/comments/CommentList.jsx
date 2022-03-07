import { Fragment } from 'react'
import { Stack } from '@mui/material';

import { CommentBody } from '../../features/CommentBody';
import {CommentReplies} from '../../features/CommentReplies';

import data from '../../data.json';

const CommentList = ({handleModal}) => {
  return (
    <Stack direction={'column'} spacing={2} sx={{mb: 2}}>
      {data.comments.map((comment) => (
        <Fragment key={comment.id}>
          <CommentBody
            
            currentUser={data.currentUser.username}
            handleModal={handleModal}
            {...comment}
          />
          {!!comment.replies.length && (
            <CommentReplies replies={comment.replies} handleModal={handleModal}/>
          )}
        </Fragment>
      ))}
    </Stack>
  )
}

export {CommentList};
