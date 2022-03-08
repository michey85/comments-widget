import { useDispatch } from 'react-redux';
import { Stack, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import { decCommentScore, decReplyScore, incCommentScore, incReplyScore } from '../comments-slice';

const wrapperStyles = {
  gridArea: 'counter',
  justifySelf: 'start',
  verticalAlign: 'middle',
  backgroundColor: 'grey.200',
  borderRadius: 2,
  p: 1,
  alignItems: 'center',
  gap: 2,
  width: {xs: 'auto', md: '24px'},
  '& *': {
    fontWeight: 700,
    color: 'primary.main'
  },
  '& > span:hover': {
    cursor: 'pointer',
  },
  '& svg': {
    opacity: 0.7,
  },
  '& svg:hover': {
    opacity: 1,
  },
}

// TODO: disable buttons for own comments
// TODO: only one + or - from currentUser
const CommentCounter = ({count = 0, commentId, replyId}) => {
  const dispatch = useDispatch();

  const onIncrement = () => {
    if (replyId) {
      dispatch(incReplyScore({commentId, replyId}));
    } else {
      dispatch(incCommentScore(commentId));
    }
  };
  const onDecrement = () => {
    if (replyId) {
      dispatch(decReplyScore({commentId, replyId}));
    } else {
      dispatch(decCommentScore(commentId));
    }
  };

  return (
    <Stack
      direction={{xs: 'row', md: 'column'}}
      sx={wrapperStyles}
    >
      <Typography component="span">
        <Add scale={0.75} onClick={onIncrement}/>
      </Typography>

      <Typography>
        {count}
      </Typography>
      
      <Typography component="span">
        <Remove scale={0.75} onClick={onDecrement} />
      </Typography>
    </Stack>
  )
}

export {CommentCounter};
