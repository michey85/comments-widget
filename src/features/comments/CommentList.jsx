import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Stack } from '@mui/material';

import { CommentBody } from './components/CommentBody';
import {CommentReplies} from './components/CommentReplies';

import { selectComments } from './comments-slice';
import { selectUserName } from '../user/user-slice';

const CommentList = ({handleModal}) => {
  const comments = useSelector(selectComments);
  const currentUserName = useSelector(selectUserName);

  return (
    <Stack direction={'column'} spacing={2} sx={{mb: 2}}>
      {comments.map((comment) => (
        <Fragment key={comment.id}>
          <CommentBody
            currentUser={currentUserName}
            handleModal={handleModal}
            {...comment}
          />
          {!!comment.replies.length && (
            <CommentReplies
              commentId={comment.id}
              replies={comment.replies}
              handleModal={handleModal}
            />
          )}
        </Fragment>
      ))}
    </Stack>
  )
}

export {CommentList};
