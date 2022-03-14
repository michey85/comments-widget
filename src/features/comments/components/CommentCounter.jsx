import { useState } from 'react';
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
}

const CommentCounter = ({count = 0, commentId, replyId, isCurrentUser}) => {
  const [currentChoose, setCurrentChoose] = useState(0);
  const dispatch = useDispatch();

  const onIncrement = () => {
    setCurrentChoose(1);
    if (replyId) {
      dispatch(incReplyScore({commentId, replyId}));
    } else {
      dispatch(incCommentScore(commentId));
    }
  };
  const onDecrement = () => {
    setCurrentChoose(-1);
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
        <Add 
          scale={0.75}
          onClick={(!isCurrentUser && currentChoose < 1) ? onIncrement : null}
          sx={{
            cursor: isCurrentUser ? 'not-allowed' : 'inherit',
            opacity: currentChoose === 1 ? 1 : 0.4,
            '&:hover': {
              opacity: 1,
            }
          }}
        />
      </Typography>

      <Typography>
        {count}
      </Typography>
      
      <Typography component="span">
        <Remove
          scale={0.75} 
          onClick={(!isCurrentUser && currentChoose > -1) ? onDecrement : null}
          sx={{
            cursor: isCurrentUser ? 'not-allowed' : 'inherit',
            opacity: currentChoose === -1 ? 1 : 0.4,
            '&:hover': {
              opacity: 1,
            }
          }}
        />
      </Typography>
    </Stack>
  )
}

export {CommentCounter};
